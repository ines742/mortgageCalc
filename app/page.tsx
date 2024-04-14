"use client"
import { useState } from 'react';


export default function Home() {
  const [principal, setPrincipal]= useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm]= useState('');
  const [monthlyPayment, setMonthlyPayment]= useState('');
  const [error, setError] = useState('');

  const calculateMonthlyPayment = () => {
    const principalAmount = parseFloat(principal);
    const monthlyInterestRate = parseFloat(interestRate)/ 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) *12;

    if (!isNaN(principalAmount) && !isNaN(monthlyInterestRate) && !isNaN(numberOfPayments)){
     if (principalAmount <= 0 || monthlyInterestRate <= 0 || numberOfPayments <= 0){
        setError('Input can not be negative or Zero, try again please!');
        setMonthlyPayment('');
     } else {
      const numerator = principalAmount * monthlyInterestRate * (1+ monthlyInterestRate) ** numberOfPayments;
      const denominator = (1+ monthlyInterestRate) ** numberOfPayments -1;
      const monthlyPaymentResult = (numerator / denominator).toFixed(2);
      setMonthlyPayment(monthlyPaymentResult);
      setError('');
     }
    } else{
      setError('Please enter a valid number in all fields!');
      setMonthlyPayment('');
    }
  };



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
            <h1 className='title-style'>Mortgage Calculator</h1>
            <div>
              <label className='input-title'>Principal Amount:</label>
              <input className='input-numbers'
                     type="text"
                     inputMode='numeric'
                     value={principal}
                     onChange={(e) => { setPrincipal(e.target.value);
                                        setError(''); }}/>
            </div>
            <div>
              <label className='input-title'>Interest Rate (%):</label>
              <input className='input-numbers'
                      type="text"
                      inputMode='numeric'
                     value={interestRate}
                     onChange={(e) => { setInterestRate(e.target.value);
                                        setError(''); }}/>
            </div>
            <div>
              <label className='input-title'>Loan Term (years):</label>
              <input className='input-numbers'
                     type="text"
                     inputMode='numeric' 
                    value={loanTerm}
                    onChange={(e) => { setLoanTerm(e.target.value);
                                       setError(''); }} />
            </div>
            <button className="calculate"
                    onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
                    {error && <div style={{ color: 'red'}}>{error}</div>}
              <div>
                <h2 className='results'>Monthly Payment: {monthlyPayment ? `$${monthlyPayment}` : ''}</h2>
              </div>
          </div>
    </main>
  );
}
