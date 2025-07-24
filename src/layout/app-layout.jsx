import App from '@/App'
import Header from '@/components/ui/Header'
import { Divide } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen container'>
        <Header/>
         <Outlet />
      </main>
      <div className='"p-10 text-center bg-gray-800 mt-10'>
        Made with 💗 by SayanKundu
      </div>
        
    </div>
  )
}

export default AppLayout