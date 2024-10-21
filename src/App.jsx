import React from 'react';
import ImageGallery from './components/ImageGallery'; // Verifique o caminho do arquivo

function App() {
  const imageUrls = [
    'https://th.bing.com/th/id/OIP.H5Jbx2bBWU68piFELXZjXQHaER?rs=1&pid=ImgDetMain',
    
    'https://th.bing.com/th/id/R.ea9091df95fba2a4b9ea169e617dcfde?rik=o13exS3%2fuY%2fUow&riu=http%3a%2f%2fs.glbimg.com%2fes%2fge%2ff%2foriginal%2f2012%2f12%2f16%2fcorinthians-taca-rib10-2.jpg&ehk=5XUPTldwCl2ColVRxn6GED0BWsEzegLyFoPs6xC9ufA%3d&risl=&pid=ImgRaw&r=0',
    '',
    'https://th.bing.com/th/id/R.bbf87ef8e4f2808fbbc797134951abb4?rik=ssuxuk1AjH%2fuvQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HZ74OooLNHg%2fT_hrlo7audI%2fAAAAAAAAA_E%2fP7Uik1D2bPo%2fs1600%2ft_60795_o-capitao-alessandro-ergueu-a-taca-inedita-na-historia-do-corinthians-apos-a-vitoria-por-2-a-0-sobre-o-boca%2b(1).jpg&ehk=EkBaAMV0t%2bVIlqRF7p1v4Ca4t%2f7PTo%2fYpAxHuXl5dvQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    null,
    'https://th.bing.com/th/id/R.2b5d9a802f5ad07352b81a5f2d85c1cb?rik=0u6HXXY4wB3DNA&riu=http%3a%2f%2fs.glbimg.com%2fes%2fge%2ff%2foriginal%2f2015%2f11%2f22%2frib6284.jpg&ehk=8mDJO8jY3IPNXqoU1Hhnhb1M6F6z5Gf5cx4JYPVVCVU%3d&risl=&pid=ImgRaw&r=0'
  ];

  return (
    <div>
      <h1>Exemplo de Galeria de Imagens</h1>
      <ImageGallery imageUrls={imageUrls} />
    </div>
  );
}

export default App;
