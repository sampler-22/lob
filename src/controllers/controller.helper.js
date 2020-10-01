import States from "../../states.json";
import mcache from "memory-cache";

export const paginate = ({ page, pageSize }) => {
    const offset = page * pageSize;
    const limit = pageSize;

    return { offset, limit };
};

export const stateCodes = (state) => {
    let code;
    if (state.length >= 2) {
        code = States.filter((item) => {
            return item.state.toLowerCase() === state.toLowerCase();
        });
    } else {
        code = States.filter((item) => {
            return item.code.toLowerCase() === state.toLowerCase();
        });
    }

    return code;
};

export const parseNullValue = (value) => {
    return value ? value : "";
};

export const getCachedData = (key) => {
    let cacheBody = mcache.get(key);
    if (cacheBody) return cacheBody;
};

export const addDataToCache = (key, message, data) => {
    const _result = {
        success: true,
        message: message,
        data: data,
    };
    mcache.put(key, _result, process.env.API_CACHE_DURATION * 1000);

    return _result;
};
