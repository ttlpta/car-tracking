import React, { Suspense, lazy, Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Loading } from "./components";

import initStore from "./store";

import Normalize from "./Normalize";
import NotificationPopup from "./components/NotificationPopup/NotificationPopup";
import themeLight from "./themes/defaultTheme";

const Search = lazy(() => import("./scenes/Search/Search"));
const List = lazy(() => import("./scenes/List/List"));
const Detail = lazy(() => import("./scenes/Detail/Detail"));
const Page500 = lazy(() => import("./scenes/500/Page500"));
const Page404 = lazy(() => import("./scenes/404/Page404"));

initStore();

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <NotificationPopup />
      <ThemeProvider theme={themeLight}>
        <Router>
          <Suspense fallback={Loading()}>
            <Page500>
              <Switch>
                <Route exact path="/" name="Home page" component={Search} />
                <Route exact path="/list" name="List Page" component={List} />
                <Route
                  exact
                  path="/detail"
                  name="Detail Page"
                  component={Detail}
                />
                <Route name="Page 404" component={Page404} />
              </Switch>
            </Page500>
          </Suspense>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}
