import * as React from "react";
import { useForm } from "react-hook-form";
import { TextField, Stack, Button, CircularProgress, Container } from "@mui/material";

type FormData = {
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmarpassword: string;
};

export default function App() {
  const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: object) => {
    console.log(data);
  };


  const colorBase = "#183560";
  return (
    <Container
      sx={{ mt: 3, bgcolor: 'white', p: 3, borderRadius: 1 }} maxWidth="md"
    >
      <div>
        <h1>Contactame</h1>
        <form onSubmit={onSubmit}>
          <Stack spacing={2}>
            <TextField
              autoFocus
              label="Usuario"
              type="text"
              fullWidth
              error={!!errors.user_name}
              helperText={errors.user_name && errors.user_name.message}
              {...register("user_name", {
                minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' },
              })}
            />
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                label="Nombre"
                type="text"
                error={!!errors.first_name}
                helperText={errors.first_name && errors.first_name.message}
                {...register("first_name", {
                  minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' },
                })}
              />
              <TextField
                fullWidth
                label="Apellidos"
                type="text"
                error={!!errors.last_name}
                helperText={errors.last_name && errors.last_name.message}
                {...register("last_name", {
                  minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' },
                })}
              />
            </Stack>
            <TextField
              label="Email"
              type="email"
              fullWidth
              autoComplete='off'
              {...register("email")}
            />
            <Stack direction="row" spacing={2}>
              <TextField
                label="Nueva Contraseña"
                type="password"
                fullWidth
                minLength="4"
                autoComplete='new-password'
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                {...register("password", {
                  minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' },
                })}
              /><TextField
                label="Confirmar Contraseña"
                type="password"
                required={!!getValues().password}
                fullWidth
                minLength={4}
                autoComplete='new-password'
                error={!!errors.confirmarpassword}
                helperText={errors.confirmarpassword && errors.confirmarpassword.message}
                {...register("confirmarpassword", {
                  minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' },
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Las contraseñas no coinciden";
                    }
                  }
                })}
              />
            </Stack>
            <Button variant='contained' disabled={loading} color='info' type='submit' sx={{ bgcolor: colorBase }}>
              {loading ? <CircularProgress size={30} /> : "Actualizar"}
            </Button>
          </Stack>
        </form>
      </div>
    </Container>
  );
}