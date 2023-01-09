import { StrictMode } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from '@/pages/home/Home';
import { NewRoom } from '@/pages/new-room/NewRoom';
import { AuthContextProvider } from '@/contexts/AuthContext';

export function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/rooms/new"
            component={NewRoom}
          />
        </AuthContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
