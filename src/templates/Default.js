import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Header from "../partials/Header/Header";


const CustomContainer = styled(Container)(({ theme }) => ({
  padding: '15px 0',
  backgroundColor: 'red',
}));

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <CustomContainer>
        {children}
      </CustomContainer>
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


