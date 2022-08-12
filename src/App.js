import {useState} from 'react'
import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import Form from './component/Form';
import Order from './component/Order';
// import Order from './component/Order';
import './App.css'


const App = () => {

  const [orderInStuff, setOrders] = useState([])

  const newOrder  = (order) => {
    setOrders([order, ...orderInStuff])
  }

  return (
    <>
      <header>
         <Link to='/' data-test-id='gohome' >HomePage</Link>
         <Link to='/Form' data-test-id='goform' >Form</Link> 
         <Link to='/Order' data-test-id='goorder' >All Orders</Link>
         {/* <Link to='/Order'>Finished Order</Link>  */}

      </header>
      <h1>Lambda Eats</h1>
      
      <main>

        <Switch>
          <Route exact path='/'>
          <>
            <h2> Welcome, please customize a pizza!</h2>
            <p>{orderInStuff.length} delicious pizzas served!</p>
                      
          </>
          </Route>

          <Route exact path='/Form'>

            <Form newOrder={newOrder}/>
           
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
