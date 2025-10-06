import { takeLatest } from 'redux-saga/effects';
import { checkUserLogin } from '../redux/reducers/authSlice';
import { checkUserFunction } from './authSaga';


export function* rootSaga() {
    yield takeLatest(checkUserLogin.type, checkUserFunction);
}
