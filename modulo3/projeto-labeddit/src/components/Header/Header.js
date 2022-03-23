import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@mui/material/Button";

import { StyledToolbar } from "./styled";

import {goToFeed, goToLogin} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({rightButtonText, setRightButtonText}) => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if(token) {
        logout()
        setRightButtonText("Login")
        goToLogin(navigate)
      } else {
        goToLogin(navigate)
      }
    }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(navigate)} color="inherit">
          <h2>LabEddit</h2>
        </Button>
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
