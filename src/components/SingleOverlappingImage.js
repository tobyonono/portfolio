import Draggable from "react-draggable";

const SingleOverlappingImage = ({image, eventHandler, x, y}) => (    
        <Draggable className='' bounds={`.imageContainer`} onStart={eventHandler} defaultPosition={{x:x, y:y}}  >
          <div className={`w-1/6 relative`} style={{zIndex: '0'}}>
            <img src={image} draggable={false}/>
          </div>
        </Draggable>
)

export default SingleOverlappingImage;