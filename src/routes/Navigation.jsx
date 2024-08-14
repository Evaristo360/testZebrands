import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { routes } from './routes';
import { Error404 } from '../views/Error404';

export const Navigation = () => {

  return (
    <Router>
      <Routes>
        <Route
          key={`home-route`}
          path={"/"}
          exact={true}
          element={<Navigate to="/Usuarios" />}
        />
        {routes.map((route, index) => (
          <Route
            key={`route-${index}`}
            path={route.path}
            exact={true}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}