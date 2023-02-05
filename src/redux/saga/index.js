import { takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";

export function* fetchData() {
  try {
    const response = yield api.user.getUsers();

    yield put({ type: "DATA_RECEIVED", payload: response?.data?.data });
  } catch (error) {
    yield put({ type: "DATA_ERROR" });
  }
}

export function* addData(data) {
  try {
    yield api.user.addUser(data.payload);
  } catch (error) {
    yield put({ type: "DATA_ERROR" });
  }
}

export default function* rootSaga() {
  yield takeEvery("GET_DATA", fetchData);
  yield takeEvery("ADD_DATA", addData);
}
