import {
    put, takeLatest, select
} from 'redux-saga/effects';
import at from "./at";


/// Temporary test graph, data will be loaded from external source later.
const testData = {
    nodes: [{
        id: "a",
        tag: "test"
    },
        {
            id: "b",
            tag: "foo"
        },
    ],
    edges: [{
        source: "a", target: "b"
    }]
};

function* loadDataMaybe({src}) {
    if (!src) {
        yield put({
            type: at.RESET_DATA
        });
        return;
    }

    const {currentStatus, currentSrc} = yield select(state => ({currentStatus: state.data.status, currentSrc: state.data.src}));
    if (currentSrc !== src || currentStatus === "fail") {
        yield put({
            type: at.LOADING_DATA,
            src
        });
        // TODO http get request, load data


        yield put({
            type: at.LOADED_DATA,
            src,
            data: testData
        })
    }
}

function* dataSaga() {
    yield takeLatest(at.LOAD_DATA, loadDataMaybe);
}

export default dataSaga;
