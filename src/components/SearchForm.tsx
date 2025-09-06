// 🔍 Componente de formulario de búsqueda
// 📦 Importación de dependencias necesarias
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Input, Button, HStack, FormControl } from '@chakra-ui/react';

// 📋 Interfaz para las props del componente
interface SearchFormProps {
  onSearch: (query: string, page: number) => void;
  isLoading: boolean;
}

// 🎯 Componente SearchForm
const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  // 🔄 Estado para el término de búsqueda
  const [query, setQuery] = useState('');

  // 📝 Manejador del envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), 1);
    }
  };

  // 🎨 Renderizado del componente
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <HStack>
        <FormControl>
          <Input
            placeholder='Buscar imágenes...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme='blue'
          type='submit'
          isLoading={isLoading}
        >
          Buscar
        </Button>
      </HStack>
    </form>
  );
};

export default SearchForm;
