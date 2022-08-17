import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'
import '../App.css'

const initialState = {
    person: '',
    size: '',
    feta: true,
    olives: true, 
    peppers: true, 
    onions: true, 
    special: ''
} 

const Form = (props) => {

    const formSchema = yup.object().shape({
        person: yup.string().min(2, 'name must be at least 2 characters')
    })

    const {newOrder} = props

    const history = useHistory()

    const [form, setForm] = useState(initialState)

    const [error, setError] = useState({
        person: ""
    })

    const validateChange = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(() => {
                setError({...error, [name]: ''})
            })
            .catch((err)=> {
                setError({...error, [name]: err.errors[0]})
            })
        }  
    
    const changes = (e) => {

        const {name, type, checked} = e.target

        let {value} = e.target 

        value = type === 'checkbox' ? checked: value

        validateChange(name, value)

        setForm({...form, [name]: value})

    } 
    
   const submit = (e) => {

        e.preventDefault()

        axios.post('https://reqres.in/api/orders', form)
            .then(res =>{
                newOrder(res.data)
                setForm(initialState)
                history.push('/Order') 
            })

    }

    return(

        <article data-style='order-form'> 

            <h2>Pizza Order Form</h2>

           <img src={`../Assets/Pizza.jpg`} alt='A fresh baked pizza' />  {/*Can't seem to get this image to work */}

            <form onSubmit={submit} id='pizza-form'>

                <label>
                   Enter Your Name: <span>{`${error.person}`}</span> 
                    <input onChange={changes} data-test-id='order-name' type='text' name='person' value={form.person} id='name-input' />
                </label>

                <label>

                    Select Your Size:

                    <select onChange={changes} data-test-id='order-size' name='size' id='size-dropdown'>
                        <option value=''>Please Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>

                </label>

                <label>
                    I want Feta!:
                    <input onChange={changes} data-test-id='order-feta' type='checkbox' name='feta' value={form.feta} />
                    I want olives!:
                    <input onChange={changes} data-test-id='order-olives' type='checkbox' name='olives' value={form.olives} />
                    I want peppers!:
                    <input onChange={changes} data-test-id='order-peppers' type='checkbox' name='peppers' value={form.peppers} />
                    I want onions!:
                    <input onChange={changes} data-test-id='order-onions' type='checkbox' name='onions' value={form.onions} />
                </label>

                <label>
                    Enter Your Special Instructions:
                    <input onChange={changes} type='text' name='special' value={form.special} id='special-text' />
                </label>

                <button data-test-id='order-submit' type='submit' id='order-button'>Submit</button>
              
            </form>
          
        </article>

    )

}

export default Form