import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../page/Dashboard'
import FrontPage from '../page/FrontPage';
import SignUp from '../page/SignUp';
import Payment from '../page/Payment';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/paymethod' element={<Payment />} />          
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};