import * as React from 'react';
import Grid from '@mui/material/Grid';

import MemoryCard from '../../components/memories/MemoryCard/MemoryCard';
import WelcomeModal from '../../components/navigation/WelcomeModal';

import { Box } from '@mui/material';
import { listMemories } from '../../api/memories';

export default function BasicGrid({ theme }) {
    const [memories, setMemories] = React.useState([]);

    React.useEffect(() => {
        listMemories()
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
