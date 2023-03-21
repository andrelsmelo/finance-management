import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function ChartComponent(props) {
  const chartRef = useRef();
  const chart = useRef();

  useEffect(() => {
    if (chart.current) {
      chart.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chart.current = new Chart(myChartRef, {
      type: props.type,
      data: props.data,
      options: props.options,
    });
  }, [props.data, props.options, props.type]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
}

export default ChartComponent;
