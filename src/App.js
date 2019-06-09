import React, { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Loading } from "./ui-components";
import themeObj from "./defaultTheme";

const Search = lazy(() => import('./scenes/Search/Search'));
const List = lazy(() => import('./scenes/List/List'));
const Detail = lazy(() => import('./scenes/Detail/Detail'));
const Page500 = lazy(() => import('./scenes/500/Page500'));
const Page404 = lazy(() => import('./scenes/404/Page404'));


export default function App() {

  return (
    <ThemeProvider theme={themeObj}>
      <Router>
        <Suspense fallback={Loading()}>
          <Page500>
            <Switch>
              <Route exact path="/" name="Home page" component={Search} />
              <Route exact path="/list" name="List Page" component={List} />
              <Route exact path="/detail" name="Detail Page" component={Detail} />
              <Route name="Page 404" component={Page404} />
            </Switch>
          </Page500>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}