import React, {useState} from 'react';
// import { useReducer } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';
import * as yup from 'yup'
import { useEffect } from 'react';
import '../App.css'


const initialState = {
    person: '',
    size: '',
    feta: true,
    olives: true, 
    peppers: true, 
    onions: true, 
    special: ''
    } //I will add back in the feta and things once I get everything else working

const Form = (props) => {



       const [form, setForm] = useState(initialState) 

      
      
       const changes = (e) => {

            console.log(e.target)

            const {name, type, checked} = e.target

            let {value} = e.target 

            value = type === 'checkbox' ? checked: value

            setForm({...form, [name]: value})

       }


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

            <form id='pizza-form'>

                <label>
                    Enter Your Name:
                    <input onChange={changes} type='text' name='person' value={form.person} id='name-input' />
                </label>

                <label>

                    Select Your Size:

                    <select onChange={changes} name='size' id='size-dropdown'>
                        <option value=''>Please Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>

                </label>

                <label>
                    I want Feta!:
                    <input onChange={changes} type='checkbox' name='feta' value={form.feta} />
                    I want olives!:
                    <input onChange={changes} type='checkbox' name='olives' value={form.olives} />
                    I want peppers!:
                    <input onChange={changes} type='checkbox' name='peppers' value={form.peppers} />
                    I want onions!:
                    <input onChange={changes} type='checkbox' name='onions' value={form.onions} />
                </label>

              
            </form>


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