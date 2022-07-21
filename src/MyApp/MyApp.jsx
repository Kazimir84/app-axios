import axios from "axios";
import React, {useEffect, useState} from 'react';
import UserData from "../Components/UserData";
import LoadingPersonsData from "../Components/LoadingPersonsData";
import PersonAdd from "../Components/PersonAdd";
import PersonRemove from "../Components/PersonRemove"

// const URL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32} || https://jsonplaceholder.typicode.com/users'
const URL = 'http://localhost:3000/users'

function MyApp() {

    const DataLoading =  LoadingPersonsData(UserData);

    const [appState, setAppState] = useState(
        {
            loading: false,
            persons: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        axios.get(URL)
            .then((resp) => {
              const allPersons = resp.data;
                setAppState({
                    loading: false,
                    persons: allPersons
                });
            });
    }, [setAppState]);


    return (
        <div className="app">
            <DataLoading isLoading={appState.loading} persons={appState.persons} />
            <PersonAdd />
        </div>
    );
}

export default MyApp;