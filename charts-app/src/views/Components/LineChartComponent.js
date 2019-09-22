import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ScrolLine2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, ScrolLine2D, FusionTheme);

class LineChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [{ label: "" }],
      data: [{ value: 0 }]
    };
  }
  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data.timestamp !== data.timestamp) {
      const time = this.getTime(data.timestamp);
      const value = this.getValue(data.value);
      this.updateDataSource(time, value);
    }
  }
  getTime = timestamp => {
    if (!timestamp) return 0;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime.toString();
  };
  getValue = val => {
    if (!val) return 0;
    return Math.round(val);
  };
  updateDataSource = (time, value) => {
    const { category, data } = this.state;
    category.push({ label: time });
    data.push({ value });
    this.setState({
      category,
      data
    });
  };
  render() {
    const { category, data } = this.state;
    let dataSource = {
      chart: {
        caption: "Received number values",
        subcaption: "(per given time)",
        showvalues: "0",
        numvisibleplot: "10",
        xaxisname: "number values",
        yaxisname: "time of a received number",
        plottooltext: "<b>$dataValue</b> value is received at <b>$label</b>",
        theme: "fusion",
        transposeAxis: 1,
        formatNumber: 0
      },
      categories: [{ category: category }],
      dataset: [{ data: data }]
    };
    return (
      <ReactFC
        type="scrollline2d"
        width={700}
        heigh="100%"
        dataFormat="json"
        dataSource={dataSource}
      />
    );
  }
}

export default LineChartComponent;
