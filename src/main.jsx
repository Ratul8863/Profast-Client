import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router";
import { router } from './Router/Router.jsx';


import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
// ..
Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='font-urbanist max-w-7xl mx-auto'>
 <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
