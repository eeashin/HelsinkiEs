import React from 'react';
import { StyleSheet, View, Button, Alert, Dimensions } from 'react-native';
import { MapView } from 'expo';
import Geocoder from 'react-native-geocoding';


Geocoder.setApiKey('AIzaSyC17oKKhMLx2hFNDhBWpDsSiTIqleJN_fE');
//required google geocoder Api key, obtained from google

var width = Dimensions.get('window').width;
export default class Maps extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };
  constructor(props) {
    super(props);

    this.state = {
      myAddress: 'Ratapihantie 13',
      latitude: 60.200692,
      longitude: 24.934302,
      latitudeDelta: 0.0322,
      longitudeDelta: 0.0221,
    }
  }


  findMyAddress = () => {
    Geocoder.setApiKey('AIzaSyC17oKKhMLx2hFNDhBWpDsSiTIqleJN_fE');
    Geocoder.getFromLocation(this.state.myAddress)
      .then((responseData) => {
        var location = responseData.results[0].geometry.location;
        this.setState({
          longitude: location.lng,
          latitude: location.lat
        })
      },
        error => {
          Alert.alert(error);
        }
      );
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            title={this.state.myAddress}
          />
        </MapView>
        <View style={styles.wrapperInput}>
          <Button onPress={this.findMyAddress} title="HelsinkiEs, Ratapihantie 13, Pasila, Helsinki" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 80,
  },
  wrapperInput: {
    flex: 20,
  },
  inputSearch: {
    height: 36,
    padding: 10,
    margin: 18,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'rgba(0,0,0,0)',
  }
});



