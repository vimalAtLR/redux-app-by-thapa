export const incNum = (data) => {
    return {
        type: "INCREMENT",
        payload: data,
    }
}

export const decNum = (data) => {
    return {
        type: "DECREMENT",
        payload: data,
    }
}