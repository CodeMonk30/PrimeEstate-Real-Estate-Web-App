import './layout.scss';
import NavBar from '../../components/navbar/Navbar';
import {Navigate, Outlet} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <Outlet />
            </div>  
            
        </div>
    );
}

function RequireAuth() { //every logged in user restricted page will be only accessed if it passes this function which checks fr user
    const {currentUser} = useContext(AuthContext)
    // if(!user){ 
    //     return <Navigate to='/login'/>
    // }
    return (
        !currentUser ? (<Navigate to="/login" />) :
        <div className="layout">
            <div className="navbar">
                <NavBar /> 
            </div>
            <div className="content">
                <Outlet />
            </div>  
            
        </div>
    );
}
export  {Layout, RequireAuth};
