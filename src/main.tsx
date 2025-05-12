import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//import App from './App.tsx'

import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavigate from './auth/Auth0ProvideWithNavigate'
import {QueryClient, QueryClientProvider} from 'react-query'
import { Toaster } from './components/ui/sonner'


//cada vez que el usuario cambia de pestana hace que no se pierda la informacion
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,

    }
  }
})

//CALLS OUR BACKEND QUERYCLIENT
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
      <AppRoutes/>
      <Toaster visibleToasts={1} position='top-right' richColors/>
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
