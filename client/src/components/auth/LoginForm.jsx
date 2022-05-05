import { Send } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { loginUser } from '../../api/auth';

import { useDispatch } from 'react-redux';
import { getMemoriesLiked } from '../../api/memoryUserLikes';


function LoginForm() {
    const dispatch = useDispatch();
    const [emailOrUsername, setEmailOrUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = (e) => {
        e.preventDefault();

        loginUser(emailOrUsername, password)
            .then(async ({ user, accessToken }) => {
                dispatch({ type: 'SET_AUTH', user, accessToken });

                const memoryIds = await getMemoriesLiked({ token: accessToken });

                dispatch({ type: 'SET_MEMORIES_LIKED', memoryIds });
            });
    }

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
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
                />
            </div>

            <div>
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button type="submit" onClick={(e) => login(e)} endIcon={<Send />}>
                Login
            </Button>
        </Box>
    )
}

export default LoginForm;