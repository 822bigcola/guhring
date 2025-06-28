import react from "react";

//Table input: Header and data row
class TableService extends react.Component {
  render() {
    const { headers, data } = this.props;
    console.log("TableService props:", headers);
    return (
      <table className="table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            {headers.map((header, index) => (
              <th scope="col" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {data && data.length > 0 ? (
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                {item.map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody />
        )}
      </table>
    );
  }
}

export default TableService;
