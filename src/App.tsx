import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './route.tsx';
import Login from './pages/Login/Login.tsx';
import  {AppProvider} from "./hooks/AppContext.tsx";
const App: React.FC = () => {

  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          {publicRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={Element} />
          ))}

          {/* Private Routes */}
          {/* {privateRoutes.map(({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={<Login />}
            />
          ))} */}
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;

