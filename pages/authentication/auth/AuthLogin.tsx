import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { LOGIN_USER } from "../../../src/config/service.config";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface Ilogin {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

interface IPasswordInput {
  value: string;
  onChange: () => void
}



const PasswordInput = ({ value, onChange }: IPasswordInput) => {
  console.log('password value', value)
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl variant="outlined" fullWidth required >
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}

const AuthLogin = ({ title, subtitle, subtext }: Ilogin) => {
  const { handleSubmit, control, setValue } = useForm();
  const router = useRouter();

  const loginApi = async (loginData) => {
    try {
      const { data: { data, message } } = await axios.post<never>(LOGIN_USER, loginData);
      console.log(data.token)
      localStorage.setItem('TOKEN_BS', data.token);
      toast.success(message);
      router.push('/');
    } catch (e) {
      toast.warning("Error!");
      console.warn(e)
    }
  };

  const onSubmit = (data: any) => {
    const requestBody = new FormData();
    const fieldKeys = Object.keys(data);
    console.log(data)
    loginApi(data)

  }
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Box>
            <Controller
              rules={{ required: true }}
              control={control}
              name={`username`}
              render={({ field }) => (
                <TextField
                  required
                  id="outlined-required"
                  label="Username"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Box>
          <Box mt="25px">
            <Controller
              rules={{ required: true }}
              control={control}
              name={`password`}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                />
                // <TextField
                //   required
                //   id="outlined-required"
                //   label="Username"
                //   fullWidth
                //   {...field}
                // />
              )}
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            // component={Link}
            // href="/"
            type="submit"
          >
            Sign In
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  )
};

export default AuthLogin;
