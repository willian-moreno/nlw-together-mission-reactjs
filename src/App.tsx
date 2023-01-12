import { AuthContextProvider } from '@/contexts/AuthContext';
import { Home } from '@/pages/Home';
import { NewRoom } from '@/pages/NewRoom';
import { Room } from '@/pages/Room';
import { AdminRoom } from '@/pages/AdminRoom';
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
            <Route
              path="/admin/rooms/:id"
              component={AdminRoom}
            />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
