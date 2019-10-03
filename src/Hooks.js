import React, { useState } from 'react';
import './App.css';



export default function GasMeter() {
  const [OriginalR, SetUnit] = useState(0);
  const [CurrentR, GUnitUsed] = useState(0);
  const [Bill, BillAmount] = useState(0)

  function sums(e) {
    let SubTotal = CurrentR - OriginalR;
    let Total = SubTotal <= 100 ?
      SubTotal * 10 : (100 * 10) +
      ((SubTotal - 100) * 20);

    BillAmount(Total / 100)

  }



  return (
    <div className="container">
      <div>Original reading
        <input type="number" placeholder="Original Reading Here" onBlur={(e) => SetUnit(e.target.value)}></input></div>
      <div>Current reading:
        <input type="number" placeholder="Current Reading Here" onBlur={(e) => GUnitUsed(e.target.value)}></input></div>
      <button onClick={(e) => sums(e)}>Calculate Bill</button>
      <div>£{Bill}</div>
    </div>
  );
}