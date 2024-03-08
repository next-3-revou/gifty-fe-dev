import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {PrivateRoutes, PublicRoutes} from './route'
import './App.css'

function App() {
  const tokenizer = useSelector(state => state.tokens.tokenizer);
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('accessToken'));
    if(items) {
      setStatus(true) 
    }
  }, [tokenizer])

  return (
    <Routes>
    {
      status
           ? <Route path="/*" element={<PrivateRoutes />} />
           : <Route path="/*" element={<PublicRoutes />} />
    }

      {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
    </Routes>
  )
}

export default App
