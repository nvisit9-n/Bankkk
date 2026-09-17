import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Dashboard } from './components/Dashboard';

function AdminRouteHandler() {
  const { setIsAdminPinModalOpen } = useApp();

  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (
        path === '/admin' || 
        hash === '#admin' ||
        search.includes('admin=true')
      ) {
        setIsAdminPinModalOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);
    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, [setIsAdminPinModalOpen]);

  return null;
}

export function App() {
  return (
    <AppProvider>
      <AdminRouteHandler />
      <Dashboard />
    </AppProvider>
  );
}

export default App;
