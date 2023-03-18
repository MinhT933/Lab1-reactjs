import React from 'react';

import { useRoutes } from 'react-router-dom';
import Login from '../app/containers/LoginPage/login';



export default function Router() {
    return useRoutes(
       [{
        path:'/',
        element:<Login/>
       },]
    );
}

