import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RouteGuard({ children }) {
   const loggedIn = useSelector(state => state.loggedIn);
   if (loggedIn) return children
   else return <Navigate to="/login" replace />
}
