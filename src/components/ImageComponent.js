
import React from 'react';
import './ImageComponent.css'; 

const ImageComponent = ({src}) => {
    return (
        <div className="image-container">
            <img 
                src={src} 
                alt="Descriptive Alt Text" 
                className="responsive-image" 
            />
        </div>
    );
};

export default ImageComponent;
