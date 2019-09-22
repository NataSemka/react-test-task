import React from "react";
import { connect } from "react-redux";
import BarChartComponent from "../Components/BarChartComponent";

class ChartsContainer extends React.Component {
  render() {
    const { barChartData } = this.props;

    return (
      <div>
        <BarChartComponent value={barChartData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { barChartData } = state;
  return {
    barChartData
  };
}
export default connect(mapStateToProps)(ChartsContainer);
