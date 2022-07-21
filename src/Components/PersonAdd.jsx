import React from 'react';
import axios from 'axios';
// import UserData from './UserData';
// import PersonRemove from '../Components/PersonRemove'

// const URL = 'https://jsonplaceholder.typicode.com/users'
const URL = 'http://localhost:3000/users'

export default class PersonAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Number(1),
            name: 'No Data',
            username: 'No Data',
            email: 'No Data',
            phone: 'No Data',
        };

        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId = event => {
        this.setState({
            id: event.target.value,
        })
    };
    handleChangeName = event => {
        this.setState({
            name: event.target.value,
        });
    };
    handleChangeUserName = event => {
        this.setState({
            username: event.target.value,
        });
    };
    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        });
    };
    handleChangePhone = event => {
        this.setState({
            phone: event.target.value
        });
    };


    handleSubmit = event => {
        event.preventDefault();
        event.target.reset();

            axios.post(URL, this.state)
                .then(res => {
                    // console.log('Res',res);
                    // console.log('Res Data',res.data);
                    // this.setState({user: res.data});
                    document.location.reload();
                })
                .catch(e => {
                    console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack)
                })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Data:
                        <input type="text" id="id" onChange={this.handleChangeId} placeholder='Id Number'/>
                        <input type="text" name="name" onChange={this.handleChangeName} placeholder='First Name'/>
                        <input type="text" username="username" onChange={this.handleChangeUserName} placeholder='Last Name'/>
                        <input type="text" email="email" onChange={this.handleChangeEmail} placeholder='Email'/>
                        <input type="text" phone="phone" onChange={this.handleChangePhone} placeholder='Phone'/>
                    </label>
                    <button type="submit">Add User</button>
                </form>
            </div>
        )
    }
}