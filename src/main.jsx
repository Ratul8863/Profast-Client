import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';


import { RouterProvider } from "react-router";
import { router } from './Router/Router.jsx';


import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import AuthProvider from './Context/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
// ..
Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='font-urbanist max-w-7xl mx-auto'>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </AuthProvider>
 
   </div>
  </StrictMode>,
)
