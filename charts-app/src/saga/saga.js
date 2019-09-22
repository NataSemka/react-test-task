import io from "socket.io-client";
import { eventChannel } from "redux-saga";
import { fork, call, put, take } from "redux-saga/effects";

export function createDataChannel() {
  // this function creates channel with events from socket
  const socket = io("http://localhost:8800/");
  const subscribe = emitter => {
    socket.on("data", emitter);

    return () => socket.removeListener("data", emitter);
  };
  return eventChannel(subscribe);
}

export function* chartsDataSaga() {
  // this saga receives updates from socket and passes data to appropriate actions
  const channel = yield call(createDataChannel);

  while (true) {
    const data = yield take(channel);
    if (data) {
      yield put({
        type: "GET_LINECHART_DATA_SUCCESS",
        data
      });
      yield put({
        type: "GET_BARCHART_DATA_SUCCESS",
        value: data.value
      });
    }
  }
}

export default function* rootSaga() {
  yield fork(chartsDataSaga);
}
