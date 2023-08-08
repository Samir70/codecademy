import { BrowserRouter as Router, Route, Link, NavLink, useParams, Switch } from 'react-router-dom';
/**
 * If your router includes a Route with no path prop, 
 * then that route will always match and render. 
 * You can leverage this fact to make your application render components 
 * that you want your user to see regardless of the current route, 
 * such as sidebars and navigation bars.
 * 
 * what’s the difference between a Link and a NavLink? 
 * When the URL path matches a NavLink component’s to prop, 
 * the link will automatically have an 'active' class applied to it. 
 * This can be quite useful for building navigation menus, 
 * as we can define CSS styles for the .active class name 
 * to differentiate between active and inactive links, 
 * enabling a user to quickly see which content they are viewing.
 * see also: Redirect component
 * 
 * When wrapped around a collection of routes, 
 * Switch will render the first of its child routes 
 * whose path prop matches the current URL.
 */

export default function Article() {
  let { title } = useParams();

  // The title will be rendered in the <h1>
  return (
    <article>
      <h1>{title}</h1>
      // ...
    </article>
  );
}

export default function App() {
  return (
    <Router>
      /* Application views are rendered here */
      <Route exact path='/'>
        {/* use exact other this route is always rendered */}
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Switch>
        <div>
          <Route path='/articles/new'>
            <NewArticle />
          </Route>
          <Route path='/articles/:title'>
            {/* title is an optional parameter and will be passed to article */}
            <Article />
          </Route>
          <Route path='/articles'>
            <Articles />
          </Route>
        </div>
      </Switch>
      <Route>
        <Link to="/about">About</Link>
        <NavLink to="/about">About</NavLink>
        <Sidebar />
      </Route>
    </Router>
  );
}


import { useHistory } from `react-router-dom`

export const ExampleForm = () => {

  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form elements */}
    </form>
  )
}

import { useLocation } from 'react-router-dom'

// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const order = queryParams.get('order');
  console.log(order); // Prints 'DESC'
};