import React, {useState} from "react";

import InvestmentLogo from "./Components/Investment/InvestmentLogo"
import InvestmentForm from "./Components/Investment/InvestmentForm";
import InvestmentTable from "./Components/Table/InvestmentTable";

const yearlyData = []; // per-year results

function App() {

  const [yearlyRequiredData,setYearlyRequiredData] = useState(yearlyData);
  
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = userInput.currentSaving; // feel free to change the shape of this input object!
    const yearlyContribution = userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyRequiredData( (prevData) => {
      return [...prevData,yearlyRequiredData]
    })
    // console.log(yearlyData);

    // do something with yearlyData ...
  };

  return (
    <div>
      <InvestmentLogo/>
      <InvestmentForm onFormSubmit={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentTable tableData={yearlyRequiredData}/>
    </div>
  );
}

export default App;
