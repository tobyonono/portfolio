import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageArray } from '../images/ImageArray';

export default function MasonryImageList( {pictures}) {
  return (
      <ImageList variant="masonry" cols={3} gap={8}>
        {pictures.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.src}?w=248&fit=crop&auto=format`}
              srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}
