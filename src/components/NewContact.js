// component that is accessed by click on add contacts, takes us to a form with
// the route /contacts/new , once submit button is clicked should rerout back to /contacts
// with that new contact appearing 

// adds a new contact component that will have input fields for a new contact to be added to our contact list on 
// home page
import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../CSS/NewContact.css'

class NewContact extends React.Component {
    constructor (){
        super()

        this.state = {
            id: '',
          name: '',
          image_url: '',
          email: '',
          phone_number: ''
        }

        this.handleSubmitContactClick=this.handleSubmitContactClick.bind(this)
    }
    //function that when submit is clicked generates a new contact based on the filled out form
    handleSubmitContactClick () {
        const newContact = {
            id: Math.round(Math.random() * 10000000),
          name: this.state.name,
          image_url: this.state.image_url,
          email: this.state.email,
          phone_number: this.state.phone_number
        }
        if (this.state.name === '' || this.state.email === '' || this.state.phone_number === '') {
            alert('You must include a name, email, and phone number')
        }
        else {
            this.props.addContact(newContact)
        }
        
    }

    render (){
        return (
            <div className='row'>
                <div className='form col-md-6 offset-3'>
                
                    <form>
                    <label className='label'>Name</label>
                    <input type='text' className='form-control'onChange={event =>
                        this.setState({ name: event.target.value})}/>

                    <br/>

                    <label className='label'>Image URL</label>
                    <input type='text' className='form-control'onChange={event =>
                        this.setState({ image_url: event.target.value})}/>

                    <br/>

                    <label className='label'>Phone #</label>
                    <input type='text' className='form-control'onChange={event =>
                        this.setState({ phone_number: event.target.value})}/>

                    <br/>

                    <label className='label'>Email</label>
                    <input type='text' className='form-control'onChange={event =>
                        this.setState({ email: event.target.value})}/>

                    <Link to='/contacts'><button className='btn btn-info btn-lg'type="button" onClick={this.handleSubmitContactClick}>Submit</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}
// declare prop types
NewContact.propTypes = {
   addContact: PropTypes.func.isRequired

}


export default NewContact;
