import './App.css';
import axios from 'axios';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/tasks';

function getAPIData() {
    return axios.get(API_URL).then(res => res.data);
}

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAPIData().then(data => {
            console.log(data);
            if (mounted) {
                setTasks(data);
            }
        });
        return () => mounted = false;
    }, []);

    return (
        <div className="App">
            <Tasks tasks={tasks} />
        </div>
    );
}

export default App;
