import React from 'react';
import Header from '../partials/Header/Header';
import Container from '@mui/material/Container';

import useAuth from '../state/auth'

const Default = ({ children }) => {
  const { user } = useAuth()

  return (
    <>
      <Header user={user} />
      <Container sx={{ padding: '15px 0' }}>
        {children}
      </Container>
    </>
  );
}

export default Default;

//JSS - javascript styling system

//Na versão atual não há necessidade de fazer o className conforme abaixo. Apenas as informações do sx diretamente na linha do código já é suficiente. 
/* Versão antiga
const useStyles = styled(() => ({  
    container: {
       padding: '15px 0',
       backgroundColor: red,
    
    },
})) 
const Default = ({children}) => { 
    const classes = useStyles();

    return (
        <>  
            <Header />
            <Container className={classes.container}  sx={{padding: '15px 0', backgroundColor: 'red'}}>
                {children}
            </Container>
        </>
    );
}

export default Default;
*/
//código na versão atualizada



