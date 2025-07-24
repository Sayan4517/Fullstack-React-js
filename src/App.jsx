import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import "./App.css"
import React from 'react'
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/Landing";
import Onboarding from "./pages/onboarding";
import Jobs from "./pages/jobs";
import PostJob from "./pages/postJob";
import MyJobs from "./pages/myJobs";
import JobListing from "./pages/jobListing";
import SaveJobs from "./pages/saveJobs";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtecdRoute from "./components/ui/protected-route";


const router=createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        
        element:
     
          <LandingPage/>
        
        
      },
      {
        path: "/onboarding",
        element:
        <ProtecdRoute>
           <Onboarding />
        </ProtecdRoute>


     
      },
       {
        path: "/joblisting",
        element:
         <ProtecdRoute>
          
              <JobListing />
        </ProtecdRoute>

      

     
      },
       {
        path: "/jobs",
        element:
         <ProtecdRoute>

         
             <Jobs/>
        </ProtecdRoute>




     
      },
       {
        path: "/MyJobs",
        element:
         <ProtecdRoute>

        
              < MyJobs/>
        </ProtecdRoute>


     
      },
       {
        path: "/postJob",
        element:
         <ProtecdRoute>

  
             <PostJob />
        </ProtecdRoute>


     
      },
       {
        path: "/saveJobs",
        element:
         <ProtecdRoute>

            <SaveJobs/>
        </ProtecdRoute>


     
      },

    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
  
}
