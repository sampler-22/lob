import States from "../../states.json";

export const paginate = ({ page, pageSize }) => {
    const offset = page * pageSize;
    const limit = pageSize;

    return { offset, limit };
};

export const stateCodes = (state) => {
    let code;
    if (state.length >= 2) {
        code = state.filter((item) => {
            return item.state.toLowerCase() === state.toLowerCase();
        });
    } else {
        code = state.filter((item) => {
            return item.code.toLowerCase() === state.toLowerCase();
        });
    }

    return code;
};

export const parseNullValue = (value) => {
    return value ? value : "";
};
