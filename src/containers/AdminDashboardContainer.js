import React, { useEffect,useState } from 'react';
import AdminDashboard from '../components/AdminDashboard'
import * as api from 'lib/api';

export default function AdminDashboardContainer(){
    const [users, setUsers] =  useState('')
    const [comments, setComments] =  useState([])

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            api.dashboard().then((res) => {
              console.log(res);
              setUsers(res.data);
              setComments(res.data.comments);
            });
          } catch (e) {}
        };
        fetchUsers();
      }, []);
    
    return(
     <AdminDashboard
     users={users}
     comments={comments}
     ></AdminDashboard>
    )
}