import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import Form from './component/Form';


const App = () => {
  return (
    <>
      <header>
         <Link to='/'>HomePage</Link>
         <Link to='/Form'>Form</Link> {/*Need to add the 'Form' ref  instaead of just the /*/}
         <Link to='/'>Pizza</Link> {/*Need to add the 'Pizza' ref instead of just the / */}

      </header>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <main>

        <Switch>
          <Route exact path='/'>
          <>
            <h2> Welcome Please seleect a pizza!</h2>
          </>
          </Route>

          <Route exact path='/Form'>
            <Form /> {/*Rendering the Form*/}
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
