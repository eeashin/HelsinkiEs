import React from 'react';
import {
    StyleSheet,
    Alert,
    AsyncStorage
} from 'react-native';
import * as firebase from 'firebase';
import { firebaseApp } from '../views/firebaseconfig';
import { Text, Input, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class Subscribe extends React.Component {

    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);
        this.itemsRef = firebaseApp.database().ref('subcribers');
        this.state = {
            name: '',
            address: '',
            postcode: ''
        };
    };

    cancelRegister = () => {
        this.itemsRef.push({ cancelName: this.state.name, CancelAddress: this.state.address, cancelPostcode: this.state.postcode });
        Alert.alert('Subscription cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    registerAccount = () => {
        if (!this.state.name) {
            Alert.alert('Please enter your name')
        }
        else if (this.state.address == "") {
            Alert.alert('Must enter postal address')
        }
        else {
            AsyncStorage.getItem(this.state.name, (err, result) => {

                if (result !== null) {
                    Alert.alert(`${this.state.name} already exists`);
                }
                else {
                    this.itemsRef.push({ name: this.state.name, address: this.state.address, postcode: this.state.postcode });
                    Alert.alert(`${this.state.name} Subscribed!`);
                    AsyncStorage.setItem(this.state.name, this.state.address, this.state.postcode, (err, result) => {
                        this.props.navigation.navigate('HomeRT');
                    });

                }

            });
        }

    }

    render() {

        return (

            <Card containerStyle={{ padding: 10 }} >
                <Text> </Text>
                <Text> </Text>
                <Text h4 >      Subscribe News Letter</Text>
                <Text> </Text>
                <Text> </Text>

                <Input
                    placeholder='   Enter Name'
                    leftIcon={<Icon name='user' size={24} />}
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />

                <Input
                    placeholder='   Enter Address'
                    leftIcon={<Icon name='home' size={24} />}
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ address: text })}
                    value={this.state.address}
                />


                <Input
                    placeholder='    Postcode'
                    leftIcon={<Icon name='info' size={24} />}
                    style={styles.inputs}
                    keyboardType='numeric'
                    onChangeText={(text) => this.setState({ postcode: text })}
                    value={this.state.postcode}

                />

                <Text> </Text>
                <Text> </Text>


                <Button icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#000000'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='SUBSCRIBE'
                    onPress={this.registerAccount} underlayColor='#000000'
                />

                <Text style={styles.buttons}></Text>

                <Button type="outline"
                    backgroundColor='#000000'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='UNSUBSCRIBE'
                    onPress={this.cancelRegister} underlayColor='#000000'
                />
            </Card>

        )
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    labels: {
        paddingBottom: 10
    }
});