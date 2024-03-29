// App.js
import React from 'react';
import { BrowserRouter as Router, Route,
switch,Link} from 'react-router-dom';
import Home from './Home';
import MovieDescription from './MovieDescription';

function App() {
    return (
        <Router>
            <switch>
                <Route path="/" exact component={MovieDescription}/>

            </switch>
        </Router>
    ),
}

export default App;


// Home.js
import React from 'react';
import { Link } from 'react-router-dom',

const movies = [
    { id:1, title:'Movie 1', description:
'Description 1', trailerLink: 'https:// www.youtube.com/embed/trailer1'},
{ic:2, title: 'Movei 2', description:
'Description 2', trailerLink: 'https:// www.youtube.com/embed/trailer2'},
// Add more movie objects here
];

function Home() {
    return (
        <div>
            <h1>Home</h1>
            {movies.map(movie => (
                <div key={movie.id}>
                    <Link to={'/movie/${movie.id}'}>
                        <h2>{movie.title}</h2>
                    </Link>
            
        </div>
            ))}
            </div>
    );
            }
    


export default Home;


// MoveiDescription.js
import React from 'react';
import { useParams, Link }from 'react-router-dom',

const movies = [
    { id:1, title: 'Movie 1', description:
'Description 1', trailerLink: 'https:// www.youtube.com/embeb/trailer1' },
{ id:2, title: 'Movie 2'
'Description 2',trailerLink: 'https:// www.youtube.com/embed/traiker2'}

// Add more movie objects here
],


export default MovieDescription;