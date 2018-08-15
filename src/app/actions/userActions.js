/* export function setName(name){
    return {
        type: "SET_NAME",
        payload: name
    }
} */

export function setName(name){
    return dispatch => {
        setTimeout(()=> {
        dispatch({
            type: "SET_NAME",
            payload: name
        });
        }, 2000);
    }
}

export function setAge(number){
    return {
        type: "SET_AGE",
        payload: number
    }
}