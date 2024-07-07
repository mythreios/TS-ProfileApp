import React from 'react';
import HomePage from './Pages/Home';
import NotFoundPage from './Pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import ProfilePage from './Pages/Profile';


function App() {

  const queryClient = useQueryClient();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
