import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginLogout from "./pages/LoginLogout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

export default createAppContainer(
  createSwitchNavigator({
    LoginLogout: {
      screen: LoginLogout
    },
    Home: {
      screen: Home
    },
    Add: {
      screen: Add
    },
    Edit: {
      screen: Edit
    }
  })
);
