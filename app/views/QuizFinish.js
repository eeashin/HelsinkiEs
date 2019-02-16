import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';

export class Finish extends React.Component {
    static navigationOptions = {
        header: null
    };

    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT');
    }

    render() {

        let userScore = this.props.navigation.getParam('score', 'Error - No score returned');
        let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions');
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions returned');

        return (
            <View style={styles.container}>
                <Card containerStyle={{ padding: 0 }} >
                    <Text h4>Your quiz score was {userScore}</Text>
                    <Text h4>You missed on {questionsMissed} out of {totalQuestions} questions</Text>
                </Card>
                <Button
                    title="Finish Quiz" type="outline"
                    type="outline"
                    onPress={this.exitQuiz} underlayColor='#31e981'
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});
