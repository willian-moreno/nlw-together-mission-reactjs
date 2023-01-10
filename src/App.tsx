import { AuthContextProvider } from '@/contexts/AuthContext';
import { Home } from '@/pages/home';
import { NewRoom } from '@/pages/new-room';
import { Room } from '@/pages/room';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/rooms/new"
              exact
              component={NewRoom}
            />
            <Route
              path="/rooms/:id"
              component={Room}
            />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
