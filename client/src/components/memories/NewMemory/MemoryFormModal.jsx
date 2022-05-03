import { Send } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Modal, TextField } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { uploadImages } from '../../../api/memories';
import MemoryImagesCarousel from '../MemoryCard/MemoryImagesCarousel';
import { style, styleDropzone } from './styles';


function MemoryFormModal({ open, onClose }) {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: { 'image/*': [] } });

    const [images, setImages] = React.useState([]);

    useEffect(() => {
        if (acceptedFiles.length === 0) return;

        uploadImages(acceptedFiles).then(imageUrls => {
            console.log(imageUrls);
            setImages(imageUrls || []);
        });
    }, [acceptedFiles]);


    const createMemory = () => {
        // TODO
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                component="form"
                sx={{ ...style, gap: '20px', display: 'flex', flexDirection: 'column', margin: '0px', padding: '0px' }}
                noValidate
                autoComplete="off"
            >

                <Card sx={{ maxWidth: 'max(30vw, 300px)', overflowY: 'scroll', padding: '8px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {'TODOOOOO'.charAt(0).toUpperCase()}
                            </Avatar>
                        }
                        title={
                            <TextField
                                required
                                id="new-memory-title"
                                label="Title"
                                fullWidth
                                variant="standard"
                            />
                        }
                        subheader={new Date().toLocaleString()}
                    />

                    <Box>
                        <div {...getRootProps({ style: styleDropzone({ isDragAccept, isDragReject, isFocused }) })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>

                        </div>
                    </Box>

                    <Box>
                        <MemoryImagesCarousel images={images} />
                    </Box>

                    <CardContent>
                        <TextField
                            id="new-memory-description"
                            label="Description"
                            multiline
                            fullWidth
                            rows={4}
                            variant="standard"
                        />
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => createMemory()} endIcon={<Send />} variant="contained" disableElevation>
                            Crear
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Modal >
    )
}

export default MemoryFormModal