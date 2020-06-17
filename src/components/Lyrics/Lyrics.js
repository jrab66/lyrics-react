import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  // componentDidMount() {
  //   axios.get(`https://api.lyrics.ovh/v1/metallica/master_of_puppets`)
  //     .then(res => {
  //       const posts = res.data.results.map(obj => ({lyrics: obj.lyrics}));
  //       this.setState({ posts });
  //     });
  // }

//   render() {
//     return (
//       <div>
//         <h1>Movie API data</h1>
//         <ul>
//           {this.state.posts.map(post =>
//               <li key={post.toString()}>{post.title}</li>
//             )}
//         </ul>
//       </div>
//     );
//   }
// }

  render() {
    return (
      <ul>
        {this.state.posts.map(function(post){
          return (
              <div>
                <h1>{post.lyrics}</h1>
              </div>
            )
          }
        )}
      </ul>
    );

  }

}