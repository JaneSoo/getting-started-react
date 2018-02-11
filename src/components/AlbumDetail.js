import React from ' react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ( props ) => {

  // const { title, artist, thumnail_image } = album;
  return (
    <Card>
      <CardSection>

       {/* <View>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumnail_image}}
          />
        </View>*/}

        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>

      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
  // },
  // thumbnailStyle: {
  //   height: 50,
  //   width: 50

  // }
};

export default AlbumDetail;
