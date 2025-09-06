// 🌟 Punto de entrada principal de la aplicación
// 📦 Importación de dependencias
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 🎨 Renderizado de la aplicación con ChakraProvider
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
