import { all, fork } from 'redux-saga/effects';
import dataSaga from './data/saga';

export default function* root() {
    yield all([
        fork(dataSaga)
    ]);
}
