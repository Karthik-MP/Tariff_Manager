import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from './Component/Public/Login';
import Signup from './Component/Public/Signup';
import Userhome from './Component/Employee/Userhome';
import AddExpenseForm from './Component/Employee/AddExpenseForm';
import UserProfile from './Component/Employee/UserProfile';
import BankAccountForm from './Component/Employee/BankAccountForm';
import Home from './Component/Manager/Home';
import Profile from './Component/Manager/Profile';
import Navbar from './Component/Manager/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/public/register" element={<Signup/>}></Route>
        <Route path="/public/login" element={<Login/>}></Route>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>

        {/* Employee  */}
        <Route path="/userheader" element={<Userhome/>}></Route>
        <Route path="/employee/addexpense" element={<AddExpenseForm/>}></Route>
          <Route path='/employee/profile' element={<UserProfile/>}></Route>
          <Route path='/bankdetails' element={<BankAccountForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
