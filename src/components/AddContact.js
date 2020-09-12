// component that will serve as button to route to the /contacts/new
import React from 'react';
import { Link } from 'react-router-dom'

const AddContact = () => (
    <div>
        <Link to='/contacts/new'><button>Add Contact</button></Link>
    </div>
)

export default AddContact