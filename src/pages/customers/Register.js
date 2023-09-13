import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'; 

import {
    TextField,
    Box,
    Stack,
    Button,
} from '@mui/material';

import Toasty from '../../components/Toasty';  

const Register = () => {

    const [form, setForm] = useState({
        name: {
            value:'',
            error: false,
        },
        job: {
            value:'',
            error: false,
        }

    })

    const [openToasty, setOpenToasty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {  
        const { name , value } = e.target;
        setForm({
            ...form,
            [name]: {
                value,
            },
        })  
    }

    const handleRegisterButton = () => {
        setIsLoading (true);

        let hasError = false;

        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true;
        
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo nome corretamente',
            }  

        }

        if (!form.job.value) {
            hasError = true;

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o campo cargo corretamente',
            }   
        }

        if (hasError) {
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then(response => {
            setOpenToasty(true);
            setIsLoading(false);
        })
        
    }

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
                <TextField 
                error={form.name.error} 
                helperText={form.name.error ? form.name.helperText : ''}
                label="Digite o seu nome" 
                variant="standard" 
                name="name" 
                value={form.name.value} 
                onChange={handleInputChange} />
            </div>  
            <div>
                <TextField
                error={form.job.error} 
                helperText={form.job.error ? form.job.helperText : ''}
                label="Digite o seu cargo" 
                variant="standard" 
                name="job" 
                value={form.job.value} 
                onChange={handleInputChange} />
            </div>
            <div>
                <Stack 
                spacing={2} 
                direction="row">
                    <Button variant="contained" color="primary" onClick={handleRegisterButton} disable={isLoading}>
                        {
                            isLoading ? 'Carregando...' : 'Cadastrar'}
                    </Button>
                </Stack>           
            </div>
            <Toasty 
                open={openToasty} 
                severity="success" 
                text="Cadastro realizado com sucesso!" 
                onClose={() => setOpenToasty(false)} />
        </Box>
    )
}

export default Register;