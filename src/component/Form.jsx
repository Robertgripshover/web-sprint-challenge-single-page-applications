import React, {useState} from 'react'
import { useReducer } from 'react'
import { useParams } from 'react-router-dom'

const initialState = {
    person: 'This is a person',
    size: '', //gonna be a dropdown
    topping1: true, //Need to find out what to put instead of bool maybe true or false? checklist
    topping2: true, //Need to find out what to put instead of bool maybe true or false? checklist
    topping3: true, //Need to find out what to put instead of bool maybe true or false? checklist
    topping4: true, //Need to find out what to put instead of bool maybe true or false? checklist
    special: '',
    }

const Form = (props) => {
    console.log(props)

   const {form, setForm} = useState(initialState)

   const changes = (event) =>{
        const {name, type, checked} = event.target
        let {value} = event.target
        value = type === 'checkbox' ? checked : value
        setForm({...form, [name]: value})
   }

    return(

        <article data-style='pizza-form'> 
            <h2>Pizza Order Form</h2>
            <form>
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
                    <input onChange={changes} type='checkbox' name='accepted' value={form.accepted}/>{/*I think that it might need to be a 'checklist' instead of a 'checkbox'?*/}
                <label>

                </label>

                <label>
                Enter your special instructions here:
                <input onChange={changes} type='text' name='special' value={form.special} id='special-text'/>
                </label>
            </form>
           
        </article>
    )

}

export default Form