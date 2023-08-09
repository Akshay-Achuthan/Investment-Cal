import styles from "./InvestmentTable.module.css"

const InvestmentTable = (props) => {
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
   
  return (
    <table className={styles.result}>
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
            <td>{formatter.format(item.year)}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>{formatter.format(item.yearlyContribution)}</td>
          </tr>
          ))}
        </tbody>
      </table>
  );
}

export default InvestmentTable;