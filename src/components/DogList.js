import React, { Component } from "react";

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && "Loading..." }

        {
          dogBreeds &&
          <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}




// OLD DOG LIST

// import React, { Component } from "react";

// export default class DogsList extends Component {

//     state = {
//         dogBreeds: null
//       };
    
    

//     componentDidMount() {
//         fetch("https://dog.ceo/api/breeds/list/all")
//             .then(res => res.json())
//             // .then(data => Object.keys(data.message))
//             // .then(data => console.log("this data, right?", data))
//             .then(data => {
//                 const breeds = Object.keys(data.message)
//                 this.updateBreeds(breeds);
//             })
//             .catch(console.error);
//     }
    
//     updateBreeds(breeds) {
//         this.setState({
//             dogBreeds: breeds
//         })
//     }

//     render() {
//         return (
//             <div className='dogs-list'>
//                 <h1>Dogs List</h1>
//                 {this.state.dogBreeds === null 
//                 ? "Loading..."
//                 : <ul>
//                     {this.state.dogBreeds.map(breed => 
//                     <li key={breed}>{breed}</li>)}
//                 </ul>        
//                 }
//             </div>
//         );
//     }
// }