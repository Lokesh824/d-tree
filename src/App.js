import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

export default function App(props) {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
