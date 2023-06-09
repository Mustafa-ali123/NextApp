import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  let { open, title, closed, body } = props

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  // setOpen(opened)
  // };
  const handleClose = () => {
    closed(false)
  }

  return (
    <div>
      {/* <Button onClick={open}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="text-center" id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography className="text-center" id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
          <Button variant='contained' className='mt-3 mx-5  px-5' onClick={handleClose}>Close Alert</Button>

        </Box>
      </Modal>
    </div>
  );
}