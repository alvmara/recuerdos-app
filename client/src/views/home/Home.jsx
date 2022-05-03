import * as React from 'react';
import Grid from '@mui/material/Grid';

import MemoryCard from '../../components/memories/MemoryCard/MemoryCard';
import WelcomeModal from '../../components/navigation/WelcomeModal';

import { Box } from '@mui/material';

export default function BasicGrid({ theme }) {
    return (
        <Box sx={{ paddingTop: '20px' }}>
            <Grid container spacing={2}>
                {Array.from({ length: 50 }).map((_, i) => <Grid item xs={12} md={4}><MemoryCard /></Grid>)}
            </Grid>

            <WelcomeModal />
        </Box>
    );
}
