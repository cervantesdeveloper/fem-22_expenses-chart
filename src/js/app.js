const d =  document;
import data from "../data.json" with {type: "json"};

d.addEventListener("DOMContentLoaded", ()=>{
    createChart();
})

function createChart(){
    const chart = d.querySelector(".card-chart__chart");
    const values = data.map(value=> value.amount);
    const biggestValue = Math.max(...values);
    console.log(biggestValue);
    
    data.forEach(day=>{
        const chartBar = d.createElement("DIV");
        chartBar.classList.add("chart-bar");
        chartBar.innerHTML = 
            `
                <span>$${day.amount}</span>
                <div class="chart-bar__bar" style="height: ${(day.amount / biggestValue) * 147}px; background-color: ${day.amount == biggestValue ? "rgb(118, 181, 188)" : "rgb(236, 119, 95)"}" ></div>
                <p>${day.day}</p>
            `;
        

        chart.appendChild(chartBar);
    })
}