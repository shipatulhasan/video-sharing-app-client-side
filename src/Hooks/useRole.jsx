import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useRole = (email) => {
    const [admin,setIsAdmin] = useState(false)
    const [isAdminLoading,setIsAdminLoading] = useState(true)
    useEffect(()=>{

        if(email){
            axios.get(`/user/${email}`)
            .then(res=>{
              // console.log(res?.data)
              if(res?.data.isAdmin){
                setIsAdmin(true)
            }
            setIsAdminLoading(false)
            })
            .catch(err=>{})
        }
       
      },[email])
    
    return {admin,isAdminLoading}
};

export default useRole;