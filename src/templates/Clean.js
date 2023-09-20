import React from 'react';
import Container from '@mui/material/Container';

const Clean = ({ Component }) => {
  return (
    <>
      <Container sx={{ padding: '15px 0' }}>
        <Component />
      </Container>
    </>
  );
}

export default Clean;