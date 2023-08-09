import React, {useState} from "react";
import styles from "./InvestmentForm.module.css";

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
  
  const commonUserInputHandler = (identifier,value) => {
    if(identifier=== "currentSavings"){
      setCurrentSaving(value);  
    }else if(identifier === "yearlySavings"){
      setYearlySaving(value);
    }else if(identifier === "expectedReturn"){
      setExpectedInterest(value);
    }else{
      setDurationInterest(value);
    }
  }
  
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={currentSaving} onChange={(event) => {
             commonUserInputHandler('currentSavings',event.target.value); 
            }} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={yearlySaving} onChange={(event) => {
             commonUserInputHandler('yearlySavings',event.target.value); 
            }} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={expectedInterest} onChange={(event) => {
             commonUserInputHandler('expectedReturn',event.target.value); 
            }} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={durationInterest} onChange={(event) => {
             commonUserInputHandler('duration',event.target.value); 
            }}  type="number" id="duration" />
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
  );
}

export default InvestmentForm;