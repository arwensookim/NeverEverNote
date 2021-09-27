import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
// import {signup, login} from "./util/session_api_util"
import { signup, login } from "./actions/session_actions"
 
document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
          entities: {
            users: {[window.currentUser.id]: window.currentUser}
          },
          session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
      } else {
        store = configureStore();
      }

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})