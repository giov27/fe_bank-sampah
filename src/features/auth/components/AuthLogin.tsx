import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// component
import PasswordInput from "./PasswordInput";
import authService from "../service";
import { useToken } from "../store";

interface Ilogin {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: Ilogin) => {
  const { handleSubmit, control, setValue } = useForm<Login>();
  const router = useRouter();

  const setToken = useToken(state => state.setToken);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: Login) => {
    setIsSubmitting(true)
    authService.login(data)
      .then(res => {
        toast.success(res.message);
        setToken(res.data.token)
        router.push('/dashboard')
      })
      .catch(err => {
        toast.warning(err.message)
      })
      .finally(() => {
        setIsSubmitting(false)
      })

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
        <Stack
          mb={3}
        >
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
              )}
            />
          </Box>
          {/* <Stack
            justifyContent="end"
            direction="row"
            alignItems="center"
            my={2}
          >
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Lupa Password ?
            </Typography>
          </Stack> */}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size="1.5rem" /> : 'Masuk'}
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  )
};

export default AuthLogin;
