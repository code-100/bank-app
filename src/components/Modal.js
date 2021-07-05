import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// Transition type: sliding up for the dialog box-------------------------------------------------------------------------------

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// Modal-------------------------------------------------------------------------------
function Modal(props) {

  const [, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(props.close);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Bank Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
          <p><b>Bank:</b> {props.modalData.bank_name}</p>
          <p><b>Branch:</b> {props.modalData.branch}</p>
          <p><b>Bank ID:</b> {props.modalData.bank_id}</p>
          <p><b>IFSC:</b> {props.modalData.ifsc}</p>
          <p><b>Address:</b> {props.modalData.address}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;