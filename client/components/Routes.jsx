const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory();

Routes = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={App} path="/">
        <Router component={Map} path="map" />
        <Router component={Login} path="login" />
        </Route>
      </Router>
    );
  }
});
