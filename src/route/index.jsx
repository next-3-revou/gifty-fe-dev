import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../page/Dashboard'
import FrontPage from '../page/FrontPage';
import Payment from '../page/Payment';
import Avatars from '../page/Avatar';
import SplitBillDetails from '../page/SplitBillDetails';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/paymethod' element={<Payment />} />
          <Route path='/avatar' element={<Avatars />} />
          <Route path='/split' element={<SplitBillDetails />} />
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