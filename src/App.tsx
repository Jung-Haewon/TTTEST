import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './layout/Layout';
import MyRoutes from './routes/Routes';
import RouteType from './types/RouteType';
import store from './store/Store';
import '@/App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {MyRoutes.map((route: RouteType) => (
                <Route key={route.path} path={route.path} element={<route.component title={route.meta.title} />} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster containerStyle={{ zIndex: 99999 }} />
      </Provider>
    </>
  );
}

export default App;
