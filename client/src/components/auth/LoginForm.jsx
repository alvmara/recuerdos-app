import { Box, TextField } from '@mui/material';
import React from 'react';

function LoginForm() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Email o nombre de usuario"
                />
            </div>

            <div>
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
            </div>
        </Box>
    )
}

export default LoginForm;