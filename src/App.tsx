// 🎨 Componente principal de la aplicación
import { Container, VStack } from '@chakra-ui/react';
import SearchForm from './components/SearchForm';
import ImageGrid from './components/ImageGrid';
import RecentSearches from './components/RecentSearches';
import { useState } from 'react';

interface Image {
  id: string;
  description: string | null;
  urls: {
    regular: string;
  };
  links: {
    html: string;
  };
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string, page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://image-search-abstraction-layer-free-dun.vercel.app/api/search?query=${query}&page=${page}`);
      const data = await response.json();
      
      if (data.status === 'success') {
        setImages(data.data);
      } else {
        throw new Error(data.error);
      }
    } catch (e) {
      setError('No se pudieron cargar las imágenes');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW='container.xl' py={8}>
      <VStack gap={8}>
        <SearchForm onSearch={handleSearch} isLoading={loading} />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <RecentSearches onSelect={(query) => handleSearch(query, 1)} />
        <ImageGrid images={images} isLoading={loading} />
      </VStack>
    </Container>
  );
}

export default App;
