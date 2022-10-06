import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import Main from './Main/Main';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/products',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element: <Products></Products> },
        { path: '/friends', element: <Friends></Friends> },
        {path: '/product/:productId',
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.productId}`)
        }, element: <ProductDetails></ProductDetails>} 
      ]
    },
    { path: '/about', element: <About></About> },
    {path: '*', element: <div>Page Not Found</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
