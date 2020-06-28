import React, { useEffect,useState } from 'react';
import AdminTopping from '../components/AdminTopping'
import * as api from 'lib/api';

export default function AdminToppingContainer(){
    

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            api.topping().then((res) => {
              console.log(res);
             
            });
          } catch (e) {}
        };
        fetchUsers();
      }, []);
    
    return(
     <AdminTopping
     
     ></AdminTopping>
    )
}