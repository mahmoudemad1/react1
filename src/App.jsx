 
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout'; 
 import Notfound from './Component/Notfound/Notfound';
import About from './Component/About/About';

import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
       children: [
        { path: "home", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About/>},
        { path: "portfolio", element: <Portfolio /> },
        { path: "*", element: <Notfound /> }
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
