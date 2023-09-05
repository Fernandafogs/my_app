import React from 'react';
import Header from '../partials/Header/Header';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

const Page = ({ title, Component }) => {
  return (
    <>
      <Typography variant='h3'>
        {title}
      </Typography>
      <Component />
    </>
  );
}

export default Page;

