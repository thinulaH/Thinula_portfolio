
import { Outlet } from 'react-router-dom'
import './App.css'
import { Toaster } from '@/components/ui/toaster'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <>
    <ScrollToTop/>
    <Outlet />
    <Toaster />
    </>
  )
}

export default App
