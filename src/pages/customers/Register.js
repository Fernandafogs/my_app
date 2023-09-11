import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Register = () => {
    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 3, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField label="Digite o seu nome" variant="standard"/>
            </div>  
            <div>
                <TextField label="Digite o seu cargo" variant="standard"/>
            </div>
            <div>
                <Stack spacing={1} direction="row">
                    <Button variant="contained">Cadastrar</Button>
                </Stack>           
            </div>
        </Box>
    )
}

export default Register;