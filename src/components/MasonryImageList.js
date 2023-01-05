import { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageArray } from '../images/ImageArray';

export default function MasonryImageList({ pictures }) {
    const itemsPerPage = 7;
    const [page, setPage] = useState(1);
    const [noOfPages] = useState(
        Math.ceil(pictures.length / itemsPerPage)
    );

    const handleChange = (e, value) => {
        setPage(value);
    };

    return (
        <div className=''>
            <ImageList variant="masonry" cols={3} gap={8}>
                {pictures
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.src}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
            <Box component="span">
                <Pagination
                    sx={{
                        '.MuiPaginationItem-root': {
                            color: 'white',
                            fontFamily: 'nitti',
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '.MuiPagination-ul': {
                            justifyContent: 'center',
                            padding:'2em',
                        },
                    }}
                    count={noOfPages}
                    variant="outlined"
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    color="primary"
                    size="small"
                />
            </Box>
        </div>

    );
}
