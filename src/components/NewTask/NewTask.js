import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

// function getNameById () {
//     return axios.get('https://api.lyrics.ovh/v1/metallica/orion')
//         .then(response => {
//           this.response = response.data
//           return this.response[0].name
//         })
// };

const NewTask = () => {
    const [artist, setArtist] = useState('');
    const [ranking, setRanking] = useState(null);
    const [isDone] = useState(false);
    const [lyrics, setLyrics] = useState(null);
    const [songtittle, setTittle] = useState(null);
    

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const createTask = () => {
        if( ranking >= 0 
            && ranking < 6
            // && lyrics > 0
            // && ranking >= 0
            && songtittle.length > 0
            && artist.length > 0) {
            const body = {
                artist,
                ranking,
                isDone,
                // lyrics,
                songtittle,
                
            }
            axios.get('https://api.lyrics.ovh/v1/metallica/orion')
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.data == "Instrumental"){
                    alert(response);
                    console.log(response);
                }
            });
            axios.get('https://api.lyrics.ovh/v1/metallica/orion')
            .then(response => {
                this.response = response.data;
                console.log(this.response[0].name);
            });


            axios.post('https://lyrics-test-jrab66.firebaseio.com//task.json', body)
            .then(({ data }) => {
                alert('Tarea Creada');
                history.push("/");
            })
            .catch(()=> {
                setLoading(false);
                setError('Error')
            });
        } else {
            setLoading(false);
                setError('Error')
        }
    };

    const handleArtist = (event) => {
        setArtist(event.target.value);
    };
    // const handleRanking = 0;
    const handleRanking = (event) => {
        setRanking(0);
    };
    // const handleLyrics = (event) => {
    //     setLyrics(event.target.value);
    // };
    const handleTittle = (event) => {
        setTittle(event.target.value);
    };




    const FindLyrics = () => {
        axios.get('https://api.lyrics.ovh/v1/metallica/orion')
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.data == "Instrumental"){
                    alert(response);
                    console.log(response);
                }
            });
        // getNameById()
        //   .then(data => {
        //     console.log(name);
        //   });
        // axios.get('https://api.lyrics.ovh/v1/metallica/orion')
        //     .then(response => {
        //         this.response = response.data;
        //         console.log(this.response[0].name);
        //     });

        // if( ranking >= 0 
        //     && ranking < 6
        //     // && lyrics > 0
        //     // && ranking >= 0
        //     && songtittle.length > 0
        //     && artist.length > 0) {
        //     const body = {
        //         artist,
        //         ranking,
        //         isDone,
        //         // lyrics,
        //         songtittle,
                
        //     }
            
        //     axios.post('https://lyrics-test-jrab66.firebaseio.com//task.json', body)
        //     .then(({ data }) => {
        //         alert('Tarea Creada');
        //         history.push("/");
        //     })
        //     .catch(()=> {
        //         setLoading(false);
        //         setError('Error')
        //     });
        // } else {
        //     setLoading(false);
        //         setError('Error')
        // }
    }

    // const handleArtist = (event) => {
    //     setArtist(event.target.value);
    // };
    // // const handleRanking = 0;
    // const handleRanking = (event) => {
    //     setRanking(0);
    // };
    // // const handleLyrics = (event) => {
    // //     setLyrics(event.target.value);
    // // };
    // const handleTittle = (event) => {
    //     setTittle(event.target.value);
    // };
    
    return(
    <div className="card">
        <h4>Crea una nueva tarea</h4>
        <div class="form-group">
            <label htmlFor="title">Ingrese nombre de artista:</label>
            <input type="text" value={artist} class="form-control" onChange={handleArtist} id="title"/>
           </div>
        <div class="form-group">
            <label for="ranking">Ranking:</label>
            <input type="number" value={ranking} class="form-control"
            max="5" min="1" 
            onChange={handleRanking} id="ranking"/>
        </div>
        <div class="form-group">
            <label for="tiempo">titulo cancion:</label>
            <input type="text" value={lyrics} class="form-control" onChange={handleTittle} id="title"/>
        </div>
        <button type="button" onClick={()=>{createTask()}} class="btn btn-primary">Crear</button>
        <button type="button" onClick={()=>{FindLyrics()}} class="btn btn-primary">test</button>
        <button type="button" onClick={()=>{history.push("/")}} class="btn btn-secondary">Regresar</button>

    { error ? <h1 class="text-danger">{error}</h1>: ''}
    </div>)
};

export default NewTask;