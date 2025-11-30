import { AdvancedImage } from '@cloudinary/react'; 
import { fill } from '@cloudinary/url-gen/actions/resize';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { cld } from '../utils/cloudinary'; 

type ImagenCloudinaryProps = {
  publicId: string;
  anchoDeseado: number; 
  altText: string;
  className?: string;
};

const ImagenCloudinary = ({ 
  publicId, 
  anchoDeseado, 
  altText, 
  className 
}: ImagenCloudinaryProps) => {
    
  const imagenOptimizada = cld.image(publicId)
    .resize(fill().width(anchoDeseado))
    .delivery(format('auto'))
    .delivery(quality('auto'))
    .setVersion('1'); 

  return (
    <AdvancedImage 
      cldImg={imagenOptimizada} 
      alt={altText}
      loading="lazy" 
      className={className} 
      style={{ 
        maxWidth: '100%', 
        height: 'auto', 
        display: 'block' 
      }} 
    />
  );
};

export default ImagenCloudinary;