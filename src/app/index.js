import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers } from "redux";

const initialState = {
    result: 1,
    lastValues: [],
    username: "Raissa"
};

const mathReducer = (state = {
    result: 1,
    lastValues: []
    }, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
    }
    return state;
};

const usergit ci -m "Reducer = (state = {
    age:27,
    user: "Raissa"
    }, action) => {
    switch (action.type) {
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        case "SET_USER":
        state = {
            ...state,
            user: action.payload
        };
            break;
    }
    return state;
};



const store = createStore(combineReducers({ mathReducer, userReducer}));  //Multiple States

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});

store.dispatch({
    type: "SET_AGE",
    payload: 30
});
store.dispatch({
    type: "SET_USER",
    payload: "Max"
});