import React, {useState} from 'react';
import { useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'
import { useEffect } from 'react';

const initialState = {
    person: '',
    size: '', //gonna be a dropdown
    feta: true, //Need to find out what to put instead of bool maybe true or false? checklist
    olives: true, //Need to find out what to put instead of bool maybe true or false? checklist
    peppers: true, //Need to find out what to put instead of bool maybe true or false? checklist
    onions: true, //Need to find out what to put instead of bool maybe true or false? checklist
    special: '',
    }

const Form = (props) => {

    const formSchema = yup.object().shape({
        person: yup.string().min(2, 'name must be at least 2 characters'),
        size: yup.string(), //gonna be a dropdown
        feta: yup.boolean(), //Need to find out what to put instead of bool maybe true or false? checklist
        olives: yup.boolean(), //Need to find out what to put instead of bool maybe true or false? checklist
        peppers: yup.boolean(),//Need to find out what to put instead of bool maybe true or false? checklist
        onions: yup.boolean(), //Need to find out what to put instead of bool maybe true or false? checklist
        special: yup.string(),
    })

    const {newOrders} = props

    const history = useHistory()

   const {form, setForm} = useState(initialState)

   const [errors, setError]  = useState({
    person: '',
    // size: '', //gonna be a dropdown
    // feta: '', //Need to find out what to put instead of bool maybe true or false? checklist
    // olives: '', //Need to find out what to put instead of bool maybe true or false? checklist
    // peppers: '', //Need to find out what to put instead of bool maybe true or false? checklist
    // onions: '', //Need to find out what to put instead of bool maybe true or false? checklist
    // special: '',
   })

//    const [disabled, setDisabled] = userState(true, false) /*time stamp 2:13:40 on Brians youtube video explains this*/

   const validateChange = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(()=>{
                setError({...errors, [name]: ''})
            })
            .catch((err)=>{
                setError({...errors, [name]: err.errors[0]})
            })
   }

   const changes = (event) =>{
        const {name, type, checked} = event.target
        let {value} = event.target
        value = type === 'checkbox' ? checked : value
        validateChange(name, value)
        setForm({...form, [name]: value})
   }

   const submit = (event) => {
    event.preventDefault()
    // axios.post('https://reqres.in/api/users', form)
    //     .then(res =>{
    //         newOrder(res.data)
         // setForm(initialState)
    //         history.push('/Order')
    //     }) might want to mess with this a bit????
    newOrders(form)
    history.push('/Order')
   }

//    useEffect(() => {
//     formSchema.isValid(form)
//         .then((enabled) => {
//             setDisabled(!enabled)
//         })
//    }, [form]) /*time stamp 2:13:40 on Brians youtube video explains this*/


    return(

        <article> 
            <h2>Pizza Order Form</h2>
            <form onSubmit={submit} id='pizza-form'>
               <label>
                <span>
                {`Enter your name: ${errors.person}`}
                </span>
                <input onChange={changes} type='text' name='person' value={form.person} id='name-input'/>
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
                    <input onChange={changes} type='checkbox' name='onions' value={form.onions}/>{/*I think that it might need to be a 'checklist' instead of a 'checkbox'?*/}
                </label>

                <label>
                Enter your special instructions here:
                <input onChange={changes} type='text' name='special' value={form.special} id='special-text'/>
                </label>

                <button type='submit'>Submit Order</button>
            </form>
           
        </article>
    )

}

export default Form