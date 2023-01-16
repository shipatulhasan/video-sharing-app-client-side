import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../component/Loader';
import useRole from '../Hooks/useRole';

const AdminRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    const {admin,isAdminLoading} = useRole(user?.email)
    let location = useLocation()
    if(isLoading || isAdminLoading){
        return <Loader />
    }
    if(user && admin){
        return children
    }
    else{

        return <Navigate to = '/' />
    }
  
};

export default AdminRoute;