import {useState} from 'react'
import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import Form from './component/Form';
import Order from './component/Order';
import './App.css'


const App = () => {

  const [orders, setOrders] = useState([])

  const newOrder  = (order) => {
    setOrders([order, ...orders])
  }

  return (
    <>
      <header>
         <Link to='/'>HomePage</Link>
         <Link to='/Form'>Form</Link> {/*Need to add the 'Form' ref  instaead of just the /*/}
         <Link to='/Order'>Finished Order</Link> {/*Need to add the 'Pizza' ref instead of just the / */}

      </header>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <main>

        <Switch>
          <Route exact path='/'>
          <>
            <h2> Welcome Please seleect a pizza!</h2>
            <p>{orders.length} served</p>
            {/* <img src='/Assets/Pizza' alt='A fresh margaita style pizza fresh out of the oven' /> */}
          </>
          </Route>

          <Route exact path='/Form'>
            <Form newOrder={newOrder} /> {/*Rendering the Form*/}
          </Route>

          <Route exact path='/Order'>
            <Order /> {/*Rendering the Pizza confirmation*/}
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
