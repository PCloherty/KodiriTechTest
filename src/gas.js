import React from 'react';

export function gasbill() {
    let c = Number(document.getElementsByClassName("currentG")[0].innerHTML);
    let x = document.getElementsByClassName("gasInput")[0].valueAsNumber;
    let subTotal = x - c;
    console.log(x, c, subTotal);
    let priceG = subTotal <= 100 ?
        subTotal * 10 : (100 * 10) + ((subTotal - 100) * 20);

    document.getElementsByClassName("gasTotal")[0].innerHTML = priceG
    pennies2PoundG(priceG);
}
export function pennies2PoundG(priceG) {
    let gas2p = priceG / 100;
    console.log(gas2p);
    document.getElementById("gasTotalInPounds").innerHTML = gas2p;
}



export function elecbill() {
    let c = Number(document.getElementsByClassName("currentE")[0].innerHTML);
    let x = document.getElementsByClassName("elecInput")[0].valueAsNumber;
    let subTotal = x - c;
    console.log(x, c, subTotal);
    let priceE = subTotal <= 100 ?
        subTotal * 10 : (100 * 10) + ((subTotal - 100) * 20);

    document.getElementsByClassName("elecTotal")[0].innerHTML = priceE
    pennies2PoundE(priceE);




}
export function pennies2PoundE(priceE) {
    let elec2p = priceE / 100;
    console.log(elec2p);
    document.getElementById("elecTotalInPounds").innerHTML = elec2p;


}

export default function meterReader() {
    return (
        <div className="container">
            <div className="gasReading">Gas Meter reading: <div className="currentG">11000</div></div>
            <div><input className="gasInput" type="number" placeholder="Enter Reading Here"></input></div>
            <button onClick={gasbill}>Calculate Gas</button>
            <div className="pounds"><div className="gasTotal">0</div>p</div>
            <div className="pounds">£<div id="gasTotalInPounds">0</div></div>
            
            <br></br><br></br>
            <div className="elecReading">Electricity Meter reading: <span className="currentE">11000</span></div>
            <div><input className="elecInput" type="number" placeholder="Enter Reading Here"></input></div>
            <button onClick={elecbill}>Calculate Electricity</button>
            <div className="pounds"><div className="elecTotal">0</div>p</div>
            <div className="pounds">£<div id="elecTotalInPounds">0</div></div>
            
        </div>
    );
}
