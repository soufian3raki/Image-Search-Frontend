// 📝 Componente de búsquedas recientes
// �� Importación de hooks y componentes necesarios
import { useEffect, useState } from 'react';
import { Tag, TagLabel, Wrap, Text } from '@chakra-ui/react';

// 📋 Interfaz para las props del componente
interface RecentSearchesProps {
  onSelect: (query: string) => void;
}

// 🎯 Componente RecentSearches
const RecentSearches = ({ onSelect }: RecentSearchesProps) => {
  // 🔄 Estado para las búsquedas recientes
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // 🔄 Efecto para cargar las búsquedas recientes
  useEffect(() => {
    const fetchRecentSearches = async () => {
      try {
        const response = await fetch('https://image-search-abstraction-layer-free-dun.vercel.app/api/recent');
        const data = await response.json();
        if (data.status === 'success') {
          setRecentSearches(data.data.map((item: any) => item.query));
        }
      } catch (error) {
        console.error('Error fetching recent searches:', error);
      }
    };

    fetchRecentSearches();
  }, []);

  // Si no hay búsquedas recientes, no mostramos nada
  if (recentSearches.length === 0) {
    return null;
  }

  // 🎨 Renderizado del componente
  return (
    <Wrap spacing={2}>
      <Text fontWeight='bold' mr={2}>
        Búsquedas recientes:
      </Text>
      {recentSearches.map((query, index) => (
        <Tag
          key={index}
          size='md'
          variant='subtle'
          colorScheme='blue'
          cursor='pointer'
          onClick={() => onSelect(query)}
        >
          <TagLabel>{query}</TagLabel>
        </Tag>
      ))}
    </Wrap>
  );
};

export default RecentSearches;
