import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme);

class BarChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueRanges: new Map([
        ["< -100", []],
        [[-100, -50], []],
        [[-50, 0], []],
        [[0, 50], []],
        [[50, 100], []],
        ["100 <", []]
      ])
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    const { valueRanges } = this.state;

    if (prevProps.value !== value) {
      this.calculateAmountOfNumbers(value, valueRanges);
    }
  }

  calculateAmountOfNumbers = (value, valueRanges) => {
    for (let range of valueRanges.keys()) {
      const min = range[0];
      const max = range[1];
      if (this.isBetween(value, min, max)) {
        let newValue = valueRanges.get(range);
        newValue.push(value);
        valueRanges.set(range, newValue);
      } else if (value > 100) {
        let newValue = valueRanges.get("100 <");
        newValue.push(value);
        valueRanges.set("100 <", newValue);
      } else if (value < -100) {
        let newValue = valueRanges.get("< -100");
        newValue.push(value);
        valueRanges.set("< -100", newValue);
      }
    }

    this.setState({ valueRanges });
  }

  isBetween = (value, min, max) => {
    return value >= min && value <= max;
  };

  render() {
    const { valueRanges } = this.state;
    let dataSource = {
      chart: {
        caption: "The amount of numbers in each numbers range",
        xaxisname: "range categories",
        yaxisname: "the amount of numbers",
        plottooltext: "<b>$value</b> numbers within <b>$label</b> range",
        decimals: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "< -100",
          value: valueRanges.get("< -100").length
        },
        {
          label: "-100 - -50",
          value: Object.fromEntries(valueRanges)[[-100, -50]].length
        },
        {
          label: "-50 - 0",
          value: Object.fromEntries(valueRanges)[[-50, 0]].length
        },
        {
          label: "0 - 50",
          value: Object.fromEntries(valueRanges)[[0, 50]].length
        },
        {
          label: "50 - 100",
          value: Object.fromEntries(valueRanges)[[50, 100]].length
        },
        {
          label: "100 <",
          value: valueRanges.get("100 <").length
        }
      ]
    };
    return (
      <ReactFC
        type="column3d"
        width={700}
        heigh="100%"
        dataFormat="json"
        dataSource={dataSource}
      />
    );
  }
}

export default BarChartComponent;
