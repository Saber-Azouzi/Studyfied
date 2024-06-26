import {
  Box,
  Button,
  CircularProgress,
  Grid,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { useRef, useState } from "react";
import axios from "axios";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const loginEndpoint = `${process.env.VITE_BACKEND_API}/api/v1/authenticate/login`;
interface LoginFormProps {
  onRegister: () => void;
}

const inputSx: SxProps<Theme> = {
  flexGrow: 1,
  [`& fieldset`]: {
    borderRadius: "2em",
    borderColor: "#A693CD",
    borderWidth: "0px",
    backgroundColor: "rgba(66, 11, 67, 0.4)",
  },
  [`& label`]: {
    color: "white",
  },
  [`& input`]: {
    color: "white",
    backdropFilter: "blur(4px)",
    borderRadius: "2em",
  },
};

const buttonSx: SxProps<Theme> = {
  width: "100%",
  fontSize: "1.1rem",
  paddingY: "0.7rem",
  borderRadius: "3em",
  boxShadow: 0,
  textTransform: "none",
  background:
    "linear-gradient(318deg, rgba(240,177,255,0.8) 0%, rgba(115,66,238,0.5) 100%)",
  fontWeight: "bold",
  color: "white",
  ["&:hover"]: {
    boxShadow: 0,
    background:
      "linear-gradient(318deg, rgba(240,177,255,1) 0%, rgba(115,66,238,1) 100%)",
  },
};

function LoginForm({ onRegister }: LoginFormProps) {
  const navigate = useNavigate();
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [loginDenied, setLoginDenied] = useState(false);
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const hasChangedForm = useRef(false);

  // input handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    hasChangedForm.current = true;
    const { name, value } = event.target;
    switch (name) {
      case "logEmail":
        setLogEmail(value);
        break;
      case "logPassword":
        setLogPassword(value);
        break;

      default:
        break;
    }
  };

  // login button handler
  const handleLogin = () => {
    const loginData = {
      Email: logEmail,
      Password: logPassword,
    };
    setLoading(true);
    axios
      .post(loginEndpoint, loginData)
      .then((res) => {
        const accessToken = res.data?.accessToken;
        const email = res.data?.email;
        const userId = res.data?.userId;
        const name = res.data?.name;
        setUser({ accessToken, email, userId, name });
        navigate("welcome");
      })
      .catch((err) => {
        console.log(err);
        alert(" | check console");
        setLoginDenied(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box component="div">
      <Grid container direction={"column"} rowGap={3} minWidth={"350px"}>
        <Grid
          item
          container
          xs
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={1}
        >
          <h1 className="loginForm-title">Welcome back</h1>
        </Grid>
        {loginDenied && (
          <Grid item xs>
            <h2
              style={{
                color: "rgb(255, 152, 210)",
                fontStyle: "italic",
                fontWeight: "bolder",
              }}
            >
              Email and/or password don't correspond to an account
            </h2>
          </Grid>
        )}
        <Grid
          item
          container
          xs
          direction={"row"}
          alignItems={"center"}
          columnGap={1}
        >
          <MarkunreadRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />
          <TextField
            label="Email"
            color="primary"
            name="logEmail"
            error={loginDenied}
            value={logEmail}
            onChange={handleInputChange}
            sx={inputSx}
          />
        </Grid>
        <Grid
          item
          container
          xs
          direction={"row"}
          alignItems={"center"}
          columnGap={1}
        >
          <VpnKeyRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />
          <TextField
            label="Password"
            type="password"
            color="primary"
            name="logPassword"
            error={loginDenied}
            value={logPassword}
            onChange={handleInputChange}
            sx={inputSx}
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            disabled={loading || !hasChangedForm.current}
            sx={buttonSx}
            onClick={handleLogin}
          >
            {!loading && "Log in"}
            {loading && <CircularProgress sx={{ color: "rgb(240,177,255)" }} />}
          </Button>
        </Grid>
        <Grid item xs sx={{ color: "white" }}>
          don't have an account?{" "}
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={onRegister}
          >
            Register here
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
