import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const MemoryImagesCarousel = () => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 99999999,
        top: 'calc(50% - 15px)'
    };


    return (
        <Carousel
            height="100%"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <IconButton type="button" color="primary" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                        <ArrowLeft />
                    </IconButton>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <IconButton type="button" color="primary" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                        <ArrowRight />
                    </IconButton>
                )
            }
            showThumbs={false}
            showIndicators={false}
            statusFormatter={() => null}
        >
            {[1, 2, 3, 4].map(i => <img key={i} src={`https://picsum.photos/id/${i}/1000/500`} alt="Image" />)}
        </Carousel>
    );
};

export default MemoryImagesCarousel;