import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/bootstrap-custom.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PosterDetails from './screens/PosterDetailsScreen';
import AdminScreen from './screens/AdminScreen';
import AddEventScreen from './screens/AddEventScreen'; 
import EditEventScreen from './screens/EditEventScreen';
import ListEventsScreen from './screens/ListEventsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomeScreen />} />
      <Route path="/admin" element={<AdminScreen />}>
        <Route index element={<ListEventsScreen />} />   
        <Route path="event" element={<ListEventsScreen />} />
        <Route path="addevent" element={<AddEventScreen />} /> 
        <Route path="event/:id/edit" element={<EditEventScreen />} />
      </Route>
      <Route path="/:id" element={<PosterDetails />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
