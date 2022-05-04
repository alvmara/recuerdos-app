import * as React from 'react';
import Grid from '@mui/material/Grid';

import MemoryCard from '../../components/memories/MemoryCard/MemoryCard';
import WelcomeModal from '../../components/navigation/WelcomeModal';

import { Box } from '@mui/material';
import { listMemories } from '../../api/memories';

import { useSelector, useDispatch } from "react-redux";

export default function BasicGrid({ theme }) {
    const memories = useSelector(({ memories: { memories, searchedMemories } }) =>
        searchedMemories.length > 0 ? searchedMemories : memories
    );

    const dispatch = useDispatch();

    const updateMemory = (id, changes) => {
        const foundMemory = memories.find(memory => memory.id === id);
        const updatedMemory = { ...foundMemory, ...changes };

        const index = memories.findIndex(memory => memory.id === id);

        const updatedMemories = memories.slice();

        updatedMemories.splice(index, 1, updatedMemory);

        dispatch({
            type: 'SET_MEMORIES',
            memories: updatedMemories
        });
    }

    React.useEffect(() => {
        listMemories()
            .then((memories) => dispatch({ type: 'SET_MEMORIES', memories }))
            .catch(console.error);
    }, [dispatch]);

    return (
        <Box sx={{ paddingTop: '20px' }}>
            <Grid container spacing={2}>
                {memories.map((memory) =>
                    <Grid key={memory.id} item xs={12} md={4}>
                        <MemoryCard {...memory} updateMemory={updateMemory} />
                    </Grid>
                )}
            </Grid>

            <WelcomeModal />
        </Box>
    );
}
