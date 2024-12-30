import React from 'react';
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login/Login.tsx';
import SignupForm from './pages/SignUp/Signup.tsx';
import Contact from './pages/Contact/Contact.tsx';

// Define the type for a route
interface RouteType {
  path: string;
  element: React.JSX.Element; // Updated to React.ReactElement
}

// Define public routes
export const publicRoutes: RouteType[] = [
  { path: '/', element: <Login /> },
  { path: '/signup', element: <SignupForm /> },
  { path: '/home', element: <Home /> },
  { path: '/contact', element: <Contact /> },
];

// Define private routes
export const privateRoutes: RouteType[] = [
  { path: '/home', element: <Home /> },
  // Add more private routes here
];
