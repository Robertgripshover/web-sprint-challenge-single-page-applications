import React, {useState} from 'react';
// import { useReducer } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';
import * as yup from 'yup'
import { useEffect } from 'react';
import '../App.css'


const initialState = {
    name: '',
    size: '', //gonna be a dropdown
    // feta: true, //Need to find out what to put instead of bool maybe true or false? checklist
    // olives: true, //Need to find out what to put instead of bool maybe true or false? checklist
    // peppers: true, //Need to find out what to put instead of bool maybe true or false? checklist
    // onions: true, //Need to find out what to put instead of bool maybe true or false? checklist
    special: ''
    }

const Form = (props) => {

       const [form, setForm] = useState({
            name: '',
            size: '', 
            special: ''
        }) //Need to add all the others soon! Just gonna get these few working first, I will need to be adding the feta or not



//     const formSchema = yup.object().shape({
//         name: yup.string().min(2, 'name must be at least 2 characters'),
//         size: yup.string(), //gonna be a dropdown
//         feta: yup.boolean(), //Need to find out what to put instead of bool maybe true or false? checklist
//         olives: yup.boolean(), //Need to find out what to put instead of bool maybe true or false? checklist
//         peppers: yup.boolean(),//Need to find out what to put instead of bool maybe true or false? checklist
//         onions: yup.boolean(), //Need to find out what to put instead of bool maybe true or false? checklist
//         special: yup.string(),
//     })

//    const [errors, setError]  = useState({
//     person: ''
//     // size: '', //gonna be a dropdown
//     // feta: '', //Need to find out what to put instead of bool maybe true or false? checklist
//     // olives: '', //Need to find out what to put instead of bool maybe true or false? checklist
//     // peppers: '', //Need to find out what to put instead of bool maybe true or false? checklist
//     // onions: '', //Need to find out what to put instead of bool maybe true or false? checklist
//     // special: '',
//    })



    return(

        <article data-style='order-form'> 
            <h2>Pizza Order Form</h2>

           <img src={`../Assets/Pizza.jpg`} alt='A fresh baked pizza' />  {/*Can't seem to get this image to work */}




           {/* <form onSubmit={submit} id='pizza-form'>
               <label>
                <span>
                {`Enter your name: ${errors.name}`}
                </span>
                <input onChange={changes} type='text' name= 'name' value={form.name} id='name-input'/>
                </label> 

                <label>
                Select your size: 
                    <select onChange={changes} name='size' id='size-dropdown'>
                        <option value=''>Please Select</option>
                        <option value='Large'>Large</option>
                        <option value='Medium'>Medium</option>
                        <option value='Small'>Small</option>
                     </select>
                </label>
                    
                <label>
                    <input onChange={changes} type='checkbox' name='feta' value={form.feta}/>
                    <input onChange={changes} type='checkbox' name='olives' value={form.olives}/>
                    <input onChange={changes} type='checkbox' name='peppers' value={form.peppers}/>
                    <input onChange={changes} type='checkbox' name='onions' value={form.onions}/>
                </label>

                <label>
                Enter your special instructions here:
                <input onChange={changes} type='text' name='special' value={form.special} id='special-text'/>
                </label>

                <button type='submit'>Submit Order</button>
            </form> */}
           
        </article>
    )

}

export default Form