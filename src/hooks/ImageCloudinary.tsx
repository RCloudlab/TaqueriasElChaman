import { AdvancedImage } from '@cloudinary/react'; 
import { fill } from '@cloudinary/url-gen/actions/resize';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { cld } from '../utils/cloudinary'; 

type ImagenCloudinaryProps = {
  publicId: string;
  anchoDeseado: number; 
  altText: string;
  className?: string;
  aspectRatio?: string; // Nueva prop opcional
};

const ImagenCloudinary = ({ 
  publicId, 
  anchoDeseado, 
  altText, 
  className,
  aspectRatio // Prop opcional
}: ImagenCloudinaryProps) => {
    
  // Crear transformación base
  const resizeAction = fill().width(anchoDeseado);
  
  // Si hay aspect ratio, convertirlo y aplicarlo
  if (aspectRatio) {
    if (aspectRatio.includes(':')) {
      const [ancho, alto] = aspectRatio.split(':').map(Number);
      resizeAction.aspectRatio(ancho / alto);
    } else {
      resizeAction.aspectRatio(parseFloat(aspectRatio));
    }
  }

  const imagenOptimizada = cld.image(publicId)
    .resize(resizeAction)
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
        display: 'block',
        width: `${anchoDeseado}px` // Añadido para mejor control
      }} 
    />
  );
};

export default ImagenCloudinary;