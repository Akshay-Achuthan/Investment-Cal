import React, {useState} from "react";
import "./InvestmentForm.css";

const InvestmentForm = (props) => {

  const [currentSaving,setCurrentSaving] = useState('');
  const [yearlySaving,setYearlySaving] = useState('');
  const [expectedInterest,setExpectedInterest] = useState('');
  const [durationInterest,setDurationInterest] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
   
    const userInput = {
      currentSaving: Number(currentSaving),
      yearlyContribution: Number(yearlySaving),
      expectedReturn: Number(expectedInterest),
      duration: Number(durationInterest),
    }

    // console.log(userInput);

    setCurrentSaving('');
    setYearlySaving('');
    setExpectedInterest('');
    setDurationInterest('');

    props.onFormSubmit(userInput);
  }
  
  const currentSavingHandler = (event) => {
    // console.log(event.target.value);
    setCurrentSaving(event.target.value);
  }
  
  const yearlySavingHandler = (event) => {
    // console.log(event.target.value);
    setYearlySaving(event.target.value);
    
  }
  
  const expectedInterestHandler = (event) => {
    // console.log(event.target.value);
    setExpectedInterest(event.target.value);
    
  }
  
  const investmentDurationHandler = (event) => {
    // console.log(event.target.value);
    setDurationInterest(event.target.value);
    
  }
  
  return (
    <form className="form" onSubmit={formSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={currentSaving} onChange={currentSavingHandler} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={yearlySaving} onChange={yearlySavingHandler} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={expectedInterest} onChange={expectedInterestHandler} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={durationInterest} onChange={investmentDurationHandler} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  );
}

export default InvestmentForm;