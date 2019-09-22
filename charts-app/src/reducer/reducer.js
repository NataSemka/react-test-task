import { combineReducers } from "redux";
import barChartData from "./barChartData";
import lineChartData from "./lineChartData";

const reducer = combineReducers({
  barChartData,
  lineChartData
});

export default reducer;
