import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router';

function PrivetRoute({chlildren}) {

    const {user,loading} = useAuth();

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (!user) {
        <Navigate to={'/login'}></Navigate>
    }
  return  chlildren ;
  
}

export default PrivetRoute