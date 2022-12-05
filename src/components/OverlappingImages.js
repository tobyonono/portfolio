import SingleOverlappingImage from './SingleOverlappingImage';
import { ImageArray } from './ImageArray';
import { useState } from 'react';


const OverlappingImages = () => {
  const [zIndex, setzIndex] = useState(0)
  const eventHandler = (e) => {
    setzIndex((state) => state + 1);
    e.currentTarget.style.zIndex = zIndex;
  }

  const imageList = ImageArray.map((singleImage) => <SingleOverlappingImage image={singleImage.image} eventHandler={eventHandler} x={singleImage.x} y={singleImage.y} />)
  
  return (
    <div className=' w-full h-full align-middle justify-center'>
      {imageList} 
    </div>

  );
}

export default OverlappingImages;
