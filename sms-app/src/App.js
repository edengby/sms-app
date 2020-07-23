import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [response, setResponse] = useState('');

    useEffect( () => {
        console.log('sending request');
        axios.get('/eden')
            .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            if(response.status === 200) {
                setResponse(response.data.res);
            }
            else {
                setResponse('Error: '+response)
            }
        })
            .catch(error => {console.log('error: ' + error)});
    }, []);
  return (
    <div className="App">
        {(response) ? response : 'Error' }
    </div>
  );
}

export default App;
