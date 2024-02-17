
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layouts/Header';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPasssword from './pages/Auth/ForgotPasssword';
import { ToastContainer, toast } from 'react-toastify';


import AddReview from './pages/user/AddReview';
import AddDonationEvent from './pages/user/AddDonationEvent';
import Transactions from './pages/user/Transactions';
import AllDonation from './pages/AllDonation';
import AdminDashboard from './pages/user/AdminDashboard';
import MakeDonationForm from './components/Form/MakeDonationForm';
import AdminProfile from './pages/user/AdminProfile';









function App() {



  return (
    <div >
      <BrowserRouter>
        <ToastContainer position="bottom-left" />
        <Header />
        <Routes >



          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPasssword />} />

          {/* //user  */}

          <Route path='/add-donation-event' element={<AddDonationEvent />} />
          <Route path='/add-review' element={<AddReview />} />
          <Route path='/donate' element={<AllDonation />} />
          <Route path='/transactions' element={<Transactions />} />

          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/admin-profile' element={<AdminProfile />} />
          <Route path='/donation-form' element={<MakeDonationForm />} />


        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
