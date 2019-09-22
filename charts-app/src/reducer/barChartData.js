export default function barChartData(state = {}, action) {
  switch (action.type) {
    case "GET_BARCHART_DATA_SUCCESS": {
      return action.value;
    }
    default:
      return state;
  }
}
