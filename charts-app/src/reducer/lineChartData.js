export default function lineChartData(state = {}, action) {
  switch (action.type) {
    case "GET_LINECHART_DATA_SUCCESS": {
      return action.data || {};
    }
    default:
      return state;
  }
}
