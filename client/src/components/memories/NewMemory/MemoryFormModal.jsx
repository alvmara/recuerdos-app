import { Send } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Modal, TextField } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { createMemory, uploadImages } from '../../../api/memories';
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
    const [memory, setMemory] = React.useState({});

    const updateMemory = (prop, value) => setMemory({ ...memory, [prop]: value });

    useEffect(() => {
        if (acceptedFiles.length === 0) return;

        uploadImages(acceptedFiles).then(imageUrls => {
            setImages(imageUrls || []);
            updateMemory('images', imageUrls);
        });
    }, [acceptedFiles]);

    useEffect(() => console.log(memory), [memory]);

    const persistMemory = () => {
        console.log('persistMemory', memory);
        createMemory(memory);
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
                                value={memory.title}
                                onChange={e => updateMemory('title', e.target.value)}
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
                            value={memory.description}
                            onChange={e => updateMemory('description', e.target.value)}
                        />
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => persistMemory()} endIcon={<Send />} variant="contained" disableElevation>
                            Crear
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Modal >
    )
}

export default MemoryFormModal