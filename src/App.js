import './App.css';
import {Route, Switch, useHistory} from "react-router-dom";
import {Library} from "./pages/library";
import {Wishlist} from "./pages/wishlist";

function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path={'/library'} component={Library} />
      <Route exact path={'/wishlist'} component={Wishlist} />
      {
        history.push('/library')
      }
    </Switch>
  );
}

export default App;
