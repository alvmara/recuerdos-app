import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import AuthPanel from '../auth/AuthPanel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max(80vw, 300px)',
    height: 'max(80vh, 300px)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color="primary" variant="h2" component="h1">
                        Recuerdos App
                    </Typography>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Tu red social para inmortalizar recuerdos de tus viajes y compartilo con el mundo
                    </Typography>

                    <AuthPanel />
                </Box>
            </Modal>
        </div>
    );
}
