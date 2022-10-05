import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import Main from './Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/products',
        loader: async () => {
          return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        },
        element: <Products></Products> },
        { path: '/friends', element: <Friends></Friends> },
      ]
    },
    { path: '/about', element: <About></About> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
