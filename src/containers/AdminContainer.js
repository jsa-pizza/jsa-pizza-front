import React, { useCallback, useEffect } from 'react';
import { AdminDashboard } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AdminNav from '../components/AdminNav';
import AdminPageContainer from './AdminPageContainer'


export default function AdminContainer(){
    return (
    <BrowserRouter>
        <AdminNav />
        <AdminPageContainer />
    </BrowserRouter>
    )
}