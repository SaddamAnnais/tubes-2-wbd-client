import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from './providers';
import { Login, Register, Protected, Subscription, RecipeId } from './pages';
import { Layout } from './layouts';
import Collection from './pages/collection/page';
import CollectionId from './pages/collection/[id]/page';
import RecipeAdd from './pages/recipe/add/page';
import Recipe from './pages/recipe/page';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    errorElement: <Provider />, // force enforcement of authprovider
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Protected />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
      {
        path: '/collection/:id',
        element: <CollectionId />,
      },
      {
        path: '/subscription',
        element: <Subscription />,
      },
      {
        path: '/recipe',
        element: <Recipe />,
      },
      {
        path: '/recipe/add',
        element: <RecipeAdd />,
      },
      {
        path: '/recipe/:id',
        element: <RecipeId />,
      },
    ],
  },
]);

export default Router;
