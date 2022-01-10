import {
  BrowserRouter as Router,
  useRoutes,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/Error';

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    { path: '/404', element: <NotFound /> },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ];
  const elements = useRoutes(routes);

  return elements;
};

const App = () => {
  console.log('Hello from react woohoo !!');
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
