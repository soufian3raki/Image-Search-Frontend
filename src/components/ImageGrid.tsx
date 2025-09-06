// 🖼️ Componente de cuadrícula de imágenes
// 📦 Importación de componentes de Chakra UI
import { SimpleGrid, Image, Link, Skeleton } from '@chakra-ui/react';

// 📋 Interfaces para los tipos de datos
interface ImageProps {
  id: string;
  description: string | null;
  urls: {
    regular: string;
  };
  links: {
    html: string;
  };
}

interface ImageGridProps {
  images: ImageProps[];
  isLoading: boolean;
}

// 🎯 Componente ImageGrid
const ImageGrid = ({ images, isLoading }: ImageGridProps) => {
  // 🔄 Renderizado del estado de carga
  if (isLoading) {
    return (
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} height='200px' />
        ))}
      </SimpleGrid>
    );
  }

  // 🎨 Renderizado de la cuadrícula de imágenes
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {images.map((image) => (
        <Link key={image.id} href={image.links.html} isExternal>
          <Image
            src={image.urls.regular}
            alt={image.description || 'Imagen de Unsplash'}
            borderRadius='lg'
            objectFit='cover'
            height='200px'
            width='100%'
          />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ImageGrid;
