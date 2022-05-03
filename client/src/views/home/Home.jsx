import * as React from 'react';
import Grid from '@mui/material/Grid';

import MemoryCard from '../../components/memories/MemoryCard/MemoryCard';
import WelcomeModal from '../../components/navigation/WelcomeModal';

import { Box } from '@mui/material';

const getComment = () => ({
    id: Math.random() * 1000000 | 0,
    userName: 'Ali conors',
    userPhoto: 'https://images.medicaldaily.com/sites/medicaldaily.com/files/2014/02/04/face.jpg',
    comment: 'I will be in your neighborhood doing errands this Saturday.',
    date: new Date(),
});

const getMemory = () => ({
    id: Math.random() * 1000000 | 0,
    title: 'Memory Title',
    description: 'Memory Description',
    ownerName: 'Ali Connors',
    ownerId: Math.random() * 1000000 | 0,
    images: Array.from({ length: 3 }, (v, k) => `https://picsum.photos/id/${k}/200/200`),
    date: new Date(),
    comments: Array.from({ length: 3 }, (k, v) => getComment())
});

const getMemories = () => Promise.resolve(Array.from({ length: 50 }, (v, k) => getMemory()));

export default function BasicGrid({ theme }) {
    const [memories, setMemories] = React.useState([]);

    React.useEffect(() => {
        getMemories()
            .then(setMemories)
            .catch(console.error);
    }, []);

    return (
        <Box sx={{ paddingTop: '20px' }}>
            <Grid container spacing={2}>
                {memories.map((memory) =>
                    <Grid key={memory.id} item xs={12} md={4}>
                        <MemoryCard {...memory} />
                    </Grid>
                )}
            </Grid>

            <WelcomeModal />
        </Box>
    );
}
