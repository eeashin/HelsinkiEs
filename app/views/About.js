import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { Text, Card, Button, Image } from 'react-native-elements';

const aboutEs = `Helsinki Entrepreneurship Society is a community of entrepreneurially minded people in Helsinki region.
The Global Startup Ecosystem report ranks Helsinki startup scene as #1 in the world in local connectedness and Finnish startups attract the most venture capital in Europe.`

const whatEs = `Helsinkies corner provides a coworking and event space for entrepreneurial-minded people. 
All members are welcome to use the coworking space during Haaga-Helia opening hours. 
We have a dedicated community manager taking care of your basic requirements.`
const address = `Address: Ratapihantie 13, Helsinki 00250`

export class About extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (


            <ScrollView>

                <Image style={styles.pics} source={require('../sections/img/!IMG_8908.jpg')} />
                <Card>
                    <Text h4>Who We Are</Text>

                    <Text style={styles.aboutText}>{aboutEs}</Text>
                </Card>
                <Image style={styles.pics} source={require('../sections/img/IMG_8614.jpg')} />
                <Card>
                    <Text h4>What We Do</Text>
                    <Text style={styles.aboutText}>{whatEs}</Text>
                </Card>
                <Card>
                    <Text style={styles.aboutText}>{address}</Text>

                    <Button
                        type="outline"
                        backgroundColor='#000000'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='HOME'
                        onPress={() => this.props.navigation.goBack()}
                    />
                </Card>

            </ScrollView>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        padding: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20,
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});

