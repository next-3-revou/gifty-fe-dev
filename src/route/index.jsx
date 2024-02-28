import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../page/Dashboard'
import FrontPage from '../page/FrontPage';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<FrontPage />} />
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