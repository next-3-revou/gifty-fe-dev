import { Navigate, Route, Routes } from 'react-router-dom';
import FrontPage from '../page/FrontPage';
import Payment from '../page/Payment';
import Avatars from '../page/Avatar';
import SplitBillDetails from '../page/SplitBillDetails';
import Profiles from '../page/Dashboard';
import Wishlist from '../page/Wishlist';
import PersonalWL from '../page/PersonalWL';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/paymethod' element={<Payment />} />
          <Route path='/avatar' element={<Avatars />} />
          <Route path='/profile' element={<Profiles />} />
          <Route path='/wishlist' element={<Wishlist />} />
					<Route path='/wishlist/personal' element={<PersonalWL />} />					
          <Route path='/split' element={<SplitBillDetails />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
      <Routes>
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};