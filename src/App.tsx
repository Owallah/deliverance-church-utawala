import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
