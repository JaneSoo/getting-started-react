import React, {Component} from 'react';
import {Text, View} from 'react-native';

//axios: make https request to fecth some data
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//functional component
// const AlbumList = () => {
//   return(
//     <Text>AlbumList !!!!</Text>
//   );

// };


//class base component
class AlbumList extends Component {

  state = { albums: [] };
  //replace of the screen or life cycle
  componentWillMount(){
    console.log('componentWillMount in AlbumList');
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // .then(response => console.log(response));
      // debugger;

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data}));

  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // renderArtists() {
  //   return this.state.albums.map(album => <Text>{album.artist}</Text>);
  // }


  render(){
    console.log (this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );

  }

}

export default AlbumList;


