

import React, { useState } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Toasty = ({ open, text, severity }) => {
  const [toastyOpen, setToastyOpen] = useState(open);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastyOpen(false); // Feche o Snackbar definindo o estado local como falso.
  };

  return (
    <Snackbar
      open={toastyOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    
      message={
        <MuiAlert elevation={6} variant="filled" severity={severity}>
          {text}
        </MuiAlert>
      }
    />
  );
}

export default Toasty;
