import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Button, TextField } from '@mui/material';

import CommentsList from './CommentsList';
import MemoryImagesCarousel from './MemoryImagesCarousel';

// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
// }

export default function RecipeReviewCard({
    id,
    title,
    description,
    ownerName,
    ownerId,
    images,
    date,
    comments
}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {ownerName.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={title}
                subheader={date.toLocaleString()}
            />

            <Box>
                <MemoryImagesCarousel images={images} />
            </Box>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Button onClick={() => handleExpandClick()}>
                    Ver comentarios
                </Button>
            </CardActions>


            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <CommentsList comments={comments} />
                </CardContent>
            </Collapse>

            <Box sx={{ paddingInline: '20px', paddingBottom: '8px' }}>
                <TextField id="standard-basic" label="Escribe tu comentario" variant="standard" sx={{ width: '100%' }} />
            </Box>
        </Card>
    );
}