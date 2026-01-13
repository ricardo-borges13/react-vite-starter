import { GlobalStyle } from './assets/style/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
