import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DataProvider } from './provider';
import { AppProvider } from './context';
import './index.css';

const List = React.lazy(() => import('list/Discover'));
const Details = React.lazy(() => import('details/Details'));

const App = () => {
  return (
    <AppProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='*'
              element={
                <Suspense fallback={<div>Loading List...</div>}>
                  <List />
                </Suspense>
              }
            />
            <Route
              path='/movie/:movieid'
              element={
                <Suspense fallback={<div>Loading Details...</div>}>
                  <Details />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AppProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
