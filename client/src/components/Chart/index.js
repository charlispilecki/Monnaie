import React from 'react';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Navbar from '../Navbar/index';
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Venue", "Food & Dessert", "Music & Entertainment", "The Rings", "Alcohol", "Event Staff"],
  datasets: [
    {
      label: "Estimated Cost",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: colorPicker(),
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Actual Cost",
      data: [33, 25, 35, 51, 54, 76],
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
  return (
    <div className="App">
      <div style={styles.paddingUp}>        
      </div>
      <Bar data={data} options={options} />

    </div>

  );
}

export default Chart;

