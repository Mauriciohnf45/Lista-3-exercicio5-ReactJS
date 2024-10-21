import React from 'react';

const ImageGallery = ({ imageUrls }) => {
  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageUrls.map((url, index) => (
          url ? (
            <img 
              key={index} 
              src={url} 
              alt={`Imagem ${index + 1}`} 
              style={{ margin: '10px', width: '200px', height: 'auto' }} 
            />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
