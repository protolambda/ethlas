import at from './at';
import redHelper from "../redHelper";

const initialState = {
    graphData: null,
    status: "init",
    src: null
};

const mapping = {
    [at.RESET_DATA]: (state, action) => initialState,
    [at.LOADING_DATA]: (state, {src}) => ({
        status: "loading",
        src
    }),
    [at.LOADED_DATA]: (state, {data, src, err}) => ({
        src,
        graphData: data,
        status: !!err ? "fail" : "loaded"
    }),
};

const dataRed = redHelper(mapping, initialState);
export default dataRed;
