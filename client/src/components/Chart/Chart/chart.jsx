<Bar
        data={{
          labels: props.chartLabels,
          datasets: [
            {
              data: props.chartData,
              label: "Activity",
              borderColor: "#3333ff",
              fill: true,
              backgroundColor: colorPicker.map(() => colorPicker[Math.round(Math.random() * 2)])
              ,
            },

          ],
        }}
      />
