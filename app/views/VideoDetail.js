import React from 'react';
import { WebView } from 'react-native';

export class VideoDetail extends React.Component {
    static navigationOptions = {
        title: 'Videos'
    };

    render() {

        let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');
        let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;

        return (

            <WebView
                style={{ padding: 10 }}
                javaScriptEnabled={true}
                source={{ uri: tubeUrl }}
            />

        );
    }
}
