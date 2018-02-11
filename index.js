//Import library to help create component
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
//import other component => component nesting
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

//Create a component
  // component is an object to create sth to display

// const App = () =>{
//   return(
//     <Text> Some Text </Text>
//   );

// };


//one component per file
// After refactor
const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

// Render component to the device
AppRegistry.registerComponent('GettingStarted', () => App);



