import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from './providers';
import {
  Login,
  Register,
  Subscription,
  RecipeId,
  Collection,
  CollectionId,
  RecipeAdd,
  Recipe,
  RecipeEdit,
  Root,
} from './pages';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    errorElement: <Provider />,
    children: [
      {
        path: '/',
        element: <Root />,
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
      {
        path: '/recipe/edit/:id',
        element: <RecipeEdit />,
      },
      {
        path: '/recipe/edit/:id',
        element: <RecipeEdit />,
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default Router;
