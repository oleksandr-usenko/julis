import {NavigateFunction} from "react-router-dom";

let navigator: NavigateFunction;

export const setNavigator = (nav: NavigateFunction) => {
    navigator = nav;
};

export const navigate = (to: string, options = {}) => {
    if (!navigator) throw new Error("Navigator is not set");
    navigator(to, options);
};