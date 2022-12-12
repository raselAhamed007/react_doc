import React from 'react';

class Form extends React.Component {
    
    state = {
        'firstName': '',
        'lastName': '',
        'email': '',
        'phone': '',
        'message': '',
        'library': 'react'
    };

    handleChange = (e) =>{
        if(e.target.type === 'text' && e.target.id === 'firstName'){
            this.setState({
                firstName: e.target.value,
            });
        }else if(e.target.type === 'text' && e.target.id === 'lastName'){
            this.setState({
                lastName: e.target.value
            });
        }else if(e.target.type === 'email'){
            this.setState({
                email: e.target.value
            });
        }else if(e.target.type === 'number'){
            this.setState({
                phone: e.target.value
            });
        }else if(e.target.type === 'textarea'){
            this.setState({
                message: e.target.value
            });
        }else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value
            });
        }
        
    }

    render() {
        const {firstName, lastName, email, phone, message, library} = this.state;
        return (
            <div>
                <input id="firstName" type="text" placeholder='Enter first name' 
                value={firstName} onChange={this.handleChange}/>
                <br/><br/>
                <input id="lastName" type="text" placeholder='Enter last name' 
                value={lastName} onChange={this.handleChange}/>
                <br/><br/>
                <input type="email" placeholder='Enter email' 
                value={email} onChange={this.handleChange}/>
                <br/><br/>
                <input type="number" placeholder='Enter phone' 
                value={phone} onChange={this.handleChange}/>
                <br/><br/>
                <textarea name="text" value={message} placeholder='Enter message' onChange={this.handleChange}></textarea>
                <br/><br/>
                <select value={library} onChange={this.handleChange}>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </select>

                <div>
                    <p>Name : {firstName} {lastName}</p>
                    <p>Email : {email}</p>
                    <p>Phone : {phone}</p>
                    <p>Message : {message}</p>
                    <p>Library : {library}</p>
                </div>
            </div>
        );
    }
}

export default Form;