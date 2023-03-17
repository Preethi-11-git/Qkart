import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";


const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const name = localStorage.getItem("username");
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {hasHiddenAuthButtons?(
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/", { from: "Header" })}
        >
          Back to explore
        </Button>):(    
            name?
            (
            <Stack direction="row" spacing={2}>
              
              <Avatar alt={name} src="../../public/avatar.png" ></Avatar>
              <p id="username">{name}</p>
            
            <Button
              className="logout"
              variant="text"
              onClick={() => {
                                 localStorage.clear();
                                 history.push("/", { from: "Header" })
                                 window.location.reload();
                            }}
            >
              LOGOUT
              </Button>
              </Stack>
            ):
            (
              <Stack direction="row" spacing={2}>
              
              <Button
              className="login"
              variant="text"
              onClick={() => history.push("/login", { from: "Header" })}
            >
              LOGIN
              </Button>
              
                <Button
                className="register"
                variant="contained"
                onClick={() => history.push("/register", { from: "Header" })}
              >
              REGISTER
            </Button>
              
            </Stack>
            )
        )
}
      </Box>
    );
};

export default Header;
