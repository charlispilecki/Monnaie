let labels = [];
let estimated = [];
let actual = [];

const dashCtx = document.getElementById("dashChart").getContext('2d');
const dashConfig = {
    type: 'pie',
    data: {
        labels: ["Estimated Cost", "Actual Cost"],
        datasets: [
            {
                label: 'Estimated Cost',
                data: [estimated, actual],
                backgroundColor: [getRandomColor(), getRandomColor()],
                barThickness: 20,
                barPercentage: .5

            }, 
        ]
    },
    options: {
        responsive: true,
        barValueSpacing: 50,       
        legend: {
            display: true
        }
    }
};


dashCtx.canvas.width = 581.17;
dashCtx.canvas.height = 326.91;

const dashChart = new Chart(dashCtx, dashConfig);

// generalized function for adding arrays into other arrays
function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
}

// push estimated_cost and actual_cost to arrays for the chart to user
$.get("/api/user_data").then((json) => {

    const totalEstimatedCost = json.BudgetCategories.flatMap(subJson => subJson.BudgetLineItems).reduce((acc, cur) => acc + cur.estimated_cost, 0);
    estimated.push(totalEstimatedCost);
});

$.get("/api/user_data").then((json) => {

    const totalActualCost = json.BudgetCategories.flatMap(subJson => subJson.BudgetLineItems).reduce((acc, cur) => acc + cur.actual_cost, 0);
    actual.push(totalActualCost);
});

// Data wasn't loading fast enough so set a timeout to load the data slower
setTimeout(function () {
    dashChart.update();
}, 500);

function getRandomColor() {
    var letters = '0123456789ABCDEFabcdef'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}