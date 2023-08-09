import React, {useState} from "react";

import InvestmentLogo from "./Components/Investment/InvestmentLogo"
import InvestmentForm from "./Components/Investment/InvestmentForm";
import InvestmentTable from "./Components/Table/InvestmentTable";

const yearlyData = []; 

function App() {

  const [yearlyRequiredData,setYearlyRequiredData] = useState(yearlyData);
  
  const calculateHandler = (userInput) => {

    let currentSavings = userInput.currentSaving; 
    const yearlyContribution = userInput.yearlyContribution; 
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyRequiredData( (prevData) => {
      return [...prevData, ...yearlyRequiredData]
    })
  };

  return (
    <div>
      <InvestmentLogo/>
      <InvestmentForm onFormSubmit={calculateHandler}/>

      {yearlyRequiredData.length > 0 ? <InvestmentTable tableData={yearlyRequiredData}/> : <h2 className="no-data">No Data Found</h2>}

    </div>
  );
}

export default App;
