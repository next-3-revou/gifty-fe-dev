import { Navigate, Route, Routes } from 'react-router-dom';
import FrontPage from '../page/FrontPage';
import Payment from '../page/Payment';
import Avatars from '../page/Avatar';
import SplitBillDetails from '../page/SplitBillDetails';
import Profiles from '../page/Dashboard';
import Wishlist from '../page/Wishlist';
import PersonalWL from '../page/PersonalWL';
import SignIn from '../page/Sign In';
import CollaborationWL from '../page/CollaborationWL';
import DetailWL from '../page/DetailWishlist';
import AddItem from '../page/AddItem';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/getstarted' element={<FrontPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Profiles />} />
          <Route path='/paymethod' element={<Payment />} />
          <Route path='/avatar' element={<Avatars />} />
          <Route path='/wishlist' element={<Wishlist />} />
					<Route path='/wishlist/personal' element={<PersonalWL />} />
					<Route path='/wishlist/collaboration' element={<CollaborationWL />} />
					<Route path='/wishlist/detail/:wishlistId/:wishlistName' element={<DetailWL />} />	
          <Route path='/split' element={<SplitBillDetails />} />    
          <Route path='/addItem/' element={<AddItem/>} />	               
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};