import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'

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

const userReducer = (state = {
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

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action); //It is important to call next
}

const store = createStore(combineReducers({ mathReducer, userReducer}),
     {}, applyMiddleware(logger));  //Multiple States

store.subscribe(() => {
    //console.log("Store updated!", store.getState());
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