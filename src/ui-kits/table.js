export function TableofData({ tableHead, tableBody }) {
  return (
    <>
      <div className="dashboard-table">
        <table>
          <tr className="dashboard-table-head">
            {tableHead.map(
              (item) =>
                (item.label || item.label === "") && (
                  <th key={"Tableau colonnes " + item.name}>{item.label}</th>
                )
            )}
          </tr>
          {tableBody.map((item) => (
            <tr className="dashboard-table-element" key={""}>
              {tableHead.map((item2, index) => (
                <td key={"Tableau colonnes content " + item2.label + index}>
                  {item[item2.name]}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
