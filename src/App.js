import React from "react";
import {Link, Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
         <Link to='/'>HomePage</Link>
         <Link to='/'>Form</Link> {/*Need to add the 'Form' ref  instaead of just the /*/}
         <Link to='/'>Pizza</Link> {/*Need to add the 'Pizza' ref instead of just the / */}

      </header>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <main>

        <Switch>
          <Route path='/'>
          <>
            <h2> Welcome Please seleect a pizza!</h2>
          </>
          </Route>
        </Switch>

      </main>
      <footer>
        <p>
        &copy copwwright 2022 Bloomtech Eats Inc or something
        </p>
      </footer>

    </>
  );
};
export default App;
