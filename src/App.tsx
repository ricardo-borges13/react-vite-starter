import { GlobalStyle } from '@/assets/style/global';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Suspense } from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<div>Carregando...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}
export default App;
