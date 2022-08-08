import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from './Component/Public/Login';
import Signup from './Component/Public/Signup';
import AddExpenseForm from './Component/Employee/AddExpenseForm';
import UserProfile from './Component/Employee/UserProfile';
import BankAccountForm from './Component/Employee/BankAccountForm';
import ManagerHome from './Component/Manager/Home';
import ProfileDetails from './Component/Manager/ProfileDetails';
import EmpHome from './Component/Employee/Home';
import PrivateRoute from './Component/utils/PrivateRoute';
import PublicHome from './Component/Public/Home';
function App() {
  if(sessionStorage.getItem("token")===null){
    sessionStorage.setItem("token",false)
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<PublicHome />}></Route>
        <Route path="/public/register" element={<Signup/>}></Route>
        <Route path="/public/login" element={<Login/>}></Route>
    
        <Route element={<PrivateRoute />}>
            
            {/* Manager  */}
            <Route exact path="/manager" element={<ManagerHome/>}/>
            <Route exact path="/manager/profile" element={<ProfileDetails/>}/>

            {/* Employee  */}
            <Route exact path="/employee" element={<EmpHome/>}/>
            <Route path="/employee/addexpense" element={<AddExpenseForm/>}></Route>
            <Route path='/employee/profile' element={<UserProfile/>}></Route>
            <Route path='/employee/bankdetails' element={<BankAccountForm/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
