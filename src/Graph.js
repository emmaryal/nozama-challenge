import { useEffect } from "react";
import { defaults } from "react-chartjs-2";
import Chart from "chart.js";
import { connect } from "react-redux";
import { selectDate } from "./actions";
defaults.global.legend.display = false;

const Graph = (props) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(1, "transparent");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: props.dates.map(function (d) {
          return d.date;
        }),
        datasets: [
          {
            backgroundColor: gradient,

            data: props.dates.map(function (d) {
              return d.recoveredKg;
            }),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 500,
                display: true,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <div className="canvas">
      <img src="/recycling.png" alt="recycling" />
      <span>Recovered kg</span>
      <canvas id="myChart"></canvas>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);

  return { dates: state.dates };
};
export default connect(mapStateToProps, { selectDate })(Graph);
