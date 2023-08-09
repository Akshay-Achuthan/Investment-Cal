import "./InvestmentTable.css"

const InvestmentTable = (props) => {
  return (
    <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((item,index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{item.savingsEndOfYear}</td>
            <td>{item.yearlyInterest}</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>{item.yearlyContribution}</td>
          </tr>
          ))}
        </tbody>
      </table>
  );
}

export default InvestmentTable;