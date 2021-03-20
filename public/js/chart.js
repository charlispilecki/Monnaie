let labels = [];
let estimated = [];
let actual = [];
let myChart;

const ctx = document.getElementById("myChart").getContext('2d');
const config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Estimated Cost',
                data: estimated,
                backgroundColor: 'palegoldenrod',
                barThickness: 40,
                barPercentage: .5

            }, {
                label: 'Actual Cost',
                data: actual,
                backgroundColor: 'gainsboro',
                barThickness: 40,
                barPercentage: .5
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        barValueSpacing: 50,
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 40000
                    }
                }
            ]
        }
    }
};

ctx.canvas.width = 1500;
ctx.canvas.height = 600;

const chart = new Chart(ctx, config);

$.get("/api/user_data").then((json) => { 
    json.BudgetCategories.forEach(e => {
        labels.push(e.desc);
    });
});

// generalized function for adding arrays into other arrays
function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
}

// push estimated_cost and actual_cost to arrays for the chart to user
$.get("/api/user_data").then((json) => {

    const totalEstimatedCost = json.BudgetCategories.map(subJson => subJson.BudgetLineItems.reduce((acc, cur) => acc + cur.estimated_cost, 0));
    pushArray(estimated, totalEstimatedCost);
});

$.get("/api/user_data").then((json) => {

    const totalActualCost = json.BudgetCategories.map(subJson => subJson.BudgetLineItems.reduce((acc, cur) => acc + cur.actual_cost, 0));
    pushArray(actual, totalActualCost);
});

// Data wasn't loading fast enough so set a timeout to load the data slower
setTimeout(function () {
    chart.update();
}, 1000);

// Changes the graph type on click. It glitches if you zoom in and out though
$("#line").click(function () {
    change('line');
});

$("#bar").click(function () {
    change('bar');
});

function change(newType) {
    const ctx = document.getElementById("myChart").getContext("2d");

    // Remove the old chart and all its event handles
    if (myChart) {
        myChart.destroy();
    }

    // Chart.js modifies the object you pass in. Pass a copy of the object so we can use the original object later
    const temp = jQuery.extend(true, {}, config);
    temp.type = newType;
    myChart = new Chart(ctx, temp);
};
