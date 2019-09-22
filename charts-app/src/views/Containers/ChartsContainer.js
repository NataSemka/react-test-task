import React from "react";
import { connect } from "react-redux";
import BarChartComponent from "../Components/BarChartComponent";
import LineChartComponent from "../Components/LineChartComponent";
import AlertThresholdComponent from "../Components/AlertThreshold";

class ChartsContainer extends React.Component {
  render() {
    const { barChartData, lineChartData } = this.props;

    return (
      <div className="charts-container">
        <LineChartComponent data={lineChartData} />
        <BarChartComponent value={barChartData} />
        <AlertThresholdComponent number={barChartData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { barChartData, lineChartData } = state;
  return {
    barChartData,
    lineChartData
  };
}
export default connect(mapStateToProps)(ChartsContainer);
