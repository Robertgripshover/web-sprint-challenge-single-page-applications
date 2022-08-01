import React, {useState} from 'react'
import { useReducer } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const initialState = {
    person: 'This is a person',
    size: '', //gonna be a dropdown
    feta: true, //Need to find out what to put instead of bool maybe true or false? checklist
    olives: true, //Need to find out what to put instead of bool maybe true or false? checklist
    peppers: true, //Need to find out what to put instead of bool maybe true or false? checklist
    onions: true, //Need to find out what to put instead of bool maybe true or false? checklist
    special: '',
    }

const Form = (props) => {

    const history = useHistory()

    console.log(history)
  
   const {form, setForm} = useState(initialState)

   const changes = (event) =>{
        const {name, type, checked} = event.target
        let {value} = event.target
        value = type === 'checkbox' ? checked : value
        setForm({...form, [name]: value})
   }

   const submit = (event) => {
    event.preventDefault()
    history.push('/Order')
   }

    return(

        <article> 
            <h2>Pizza Order Form</h2>
            <form onSubmit={submit} id='pizza-form'>
               <label>
                Enter your name:
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
                    <input onChange={changes} type='checkbox' name='feta' value={form.feta}/>
                    <input onChange={changes} type='checkbox' name='olives' value={form.olives}/>
                    <input onChange={changes} type='checkbox' name='peppers' value={form.peppers}/>
                    <input onChange={changes} type='checkbox' name='onions' value={form.onions}/>{/*I think that it might need to be a 'checklist' instead of a 'checkbox'?*/}
                <label>

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