
import {Navigate, Outlet} from 'react-router-dom'
const isLogin=()=>{
  const value=sessionStorage.getItem("token");
  //  console.log(sessionStorage.getItem("token"))
  return value==="false"? false: true;
}
// export default function PrivateRoute() {
  export default function PrivateRoute({component:Component,...rest}) {
  return (isLogin() === true) ? <Outlet/> : <Navigate to="/public/login" exact />;
  
}
  
