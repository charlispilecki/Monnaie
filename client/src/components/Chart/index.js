import React, { useState, useEffect } from "react";
import API from '../../utils/API';
import { Bar } from "react-chartjs-2";
import axios from "axios";


// API.get('/api/data', function(req, res) => {
//   // do something

// });


// push estimated_cost and actual_cost to arrays for the chart to user


function colorPicker() {
  let letters = '0123456789ABCDEFabcdef'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const styles = {
  paddingUp: {
    paddingTop: "100px"
  }
}

function Chart() {

  let estimated = [];
  let actual = [];

  const [user, setUser] = useState({
    budgetCategories: []
  });

  useEffect(() => {
    API.getUser().then(resp => {
      setUser(resp.data)
    })
  }, [])

  function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
}

  axios.get("/api/user").then((req) => {

    const totalEstimatedCost = req.budgetCategories.map(subreq => subreq.lineItems.reduce((acc, cur) => acc + cur.estimated_cost, 0));
    pushArray(estimated, totalEstimatedCost);
  });
  
  axios.get("/api/user").then((req) => {
  
    const totalActualCost = req.budgetCategories.map(subreq => subreq.lineItems.reduce((acc, cur) => acc + cur.actual_cost, 0));
    pushArray(actual, totalActualCost);
  });

  const data = {
    labels: ["Venue", "Food & Dessert", "Music & Entertainment", "The Rings", "Alcohol", "Event Staff"],
    datasets: [
      {
        label: "Estimated Cost",
        data: estimated,
        fill: true,
        backgroundColor: colorPicker(),
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Actual Cost",
        data: [1,4,5,6],
        fill: false,
        backgroundColor: colorPicker(),
        borderColor: "#742774"
      }
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Budget Details"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      ]
    }
  };


  return (
    <div className="App">
      <div style={styles.paddingUp}>
      </div>
      <Bar data={data} options={options} />

    </div>

  );
}

export default Chart;

