import {useState} from 'react'
import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import Form from './component/Form';
import Order from './component/Orders';
// import Order from './component/Order';
import './App.css'


const App = () => {

  // const [orders, setOrders] = useState([])

  // const newOrder  = (order) => {
  //   setOrders([order, ...orders])
  // }

  return (
    <>
      <header>
         <Link to='/'>HomePage</Link>
         <Link to='/Form'>Form</Link> 
         <Link to='/Order'>All Orders</Link>
         {/* <Link to='/Order'>Finished Order</Link>  */}

      </header>
      <h1>Lambda Eats</h1>
      
      <main>

        <Switch>
          <Route exact path='/'>
          <>
            <h2> Welcome, please customize a pizza!</h2>
                      
          </>
          </Route>

          <Route exact path='/Form'>

            <Form />
           
          </Route>

          <Route exact path='/Order'>
            <Order />
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
