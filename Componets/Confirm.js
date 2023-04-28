import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  bottom: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 6,
};

export default function BasicModal(props) {
  const [status, setstatus] = useState("yes")
  let { open, title, closed, body , state } = props

  const handleClose = () => { 
    closed(false)
  }
  const handleYes = () => { 
  state(status)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
          <Button variant='contained' color="success" className='mt-3 ' onClick={()=>{handleClose()
            }} >No</Button>
          <Button variant='contained' color="error" className='mt-3 mx-2' onClick={()=>{
          handleYes()
            }} >Yes</Button>

        </Box>
      </Modal>
    </div>
  );
}