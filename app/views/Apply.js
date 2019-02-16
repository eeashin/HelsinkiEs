import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header } from '../sections/Header.js';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { firebaseApp } from '../views/firebaseconfig';
import { Text, Input, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


//const firebaseApp = firebaseApp;
export class Apply extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props);
        this.itemsRef = firebaseApp.database().ref('applications');
        this.state = {
            msg: '',
            name: '',
            email: ''
        }
    }

    clearFields = () => this.setState({ name: '', msg: '', email: '' });

    sendMessage = () => {
        this.itemsRef.push({ name: this.state.name, msg: this.state.msg, email: this.state.email });
        this.props.navigation.goBack();
        Alert.alert(`Application Submitted! `);
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Card containerStyle={{ padding: 0 }} >
                <Header navigate={navigate} message='Press to Login' />
                <Text> </Text>
                <Text> </Text>
                <Text h4>     Be a Member</Text>
                <Text> </Text>
                <Text> </Text>

                <Input
                    placeholder='     Enter Name'
                    leftIcon={<Icon name='user' size={24} />}
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />

                <Input
                    placeholder='     Motivation Message'
                    leftIcon={<Icon name='save' size={24} />}
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />

                <Input
                    placeholder='     Email or Address'
                    leftIcon={<Icon name='link' size={24} />}
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />
                <Text> </Text>
                <Text> </Text>

                <Button
                    icon={
                        <Icon name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title="  APPLY"
                    onPress={this.sendMessage} underlayColor='#31e981'>
                </Button>

                <Text> </Text>
                <Text> </Text>
                <Button title="Reset Form" type="outline"
                    onPress={this.clearFields} underlayColor='#31e981'
                />
            </Card>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
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
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});



