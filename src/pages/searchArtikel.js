import react from "react";
import axios from "axios";
import TableService from "../service/table";
import { toast } from "react-toastify";

class SearchArtikel extends react.Component {
  state = {
    searchCode: "",
    results: [],
    loading: false,
  };

  handleSearch = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_API_SERVER}/article`,
        { params: { code: this.state.searchCode } }
      );
      const formattedResults = response.data.map((item) => [
        item.Code,
        item.Description,
        item.PriceDealer,
        item.PriceEnduser,
      ]);
      this.setState({ results: formattedResults, loading: false });
    } catch (error) {
      toast.error("Error fetching search results");
      this.setState({ loading: false });
    }
  };

  render() {
    const headers = ["Code", "Description", "Price Dealer", "Price Enduser"];
    return (
      <div
        className="container"
        style={{ marginTop: "100px", marginLeft: "20px" }}
      >
        <form onSubmit={this.handleSearch}>
          <div className="mb-3">
            <label className="form-label">Article Code: </label>
            <input
              type="text"
              value={this.state.searchCode}
              onChange={(e) => this.setState({ searchCode: e.target.value })}
              placeholder="Search articles..."
              style={{ marginLeft: "10px", width: "300px" }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: "10px", marginTop: "-5px" }}
            >
              Search
            </button>
          </div>
        </form>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : this.state.results.length > 0 ? (
          <TableService headers={headers} data={this.state.results} />
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  }
}

export default SearchArtikel;
