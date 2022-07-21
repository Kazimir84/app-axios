import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:3000/users'

export default class PersonRemove extends React.Component {
    state = {
        id: null,
        users: []
    }

    handleChange = event => {
        let id = Number(event.nativeEvent.path[2].children[0].textContent);
        this.setState({id: id});
        event.nativeEvent.path[2].remove();
        axios.delete(`${URL}/${id}`)
            .then(res => {
                axios.get(URL)
                    .then(response => {
                        this.setState({users: response});
                    })
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChange}>Delete user</button>
            </div>
        )
    }
}