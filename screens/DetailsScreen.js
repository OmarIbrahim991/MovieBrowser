import React from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('Title', 'Details'),
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <Image source={{uri: this.props.navigation.getParam('Poster', require('../assets/default.png'))}}
                style={styles.poster}
                defaultSource={require('../assets/default.png')}
                />
                <Text style={styles.row}>Title: {this.props.navigation.getParam('Title', 'N/A')}</Text>
                <Text style={styles.row}>Year: {this.props.navigation.getParam('Year', 'N/A')}</Text>
                <Text style={styles.row}>Type: {this.props.navigation.getParam('Type', 'N/A')}</Text>
                <Text style={styles.row}>Language: {this.props.navigation.getParam('Language', 'N/A')}</Text>
                <Text style={styles.row}>Country: {this.props.navigation.getParam('Country', 'N/A')}</Text>
                <Text style={styles.row}>imdbID: {this.props.navigation.getParam('imdbID', 'N/A')}</Text>
                <Text style={styles.row}>Released: {this.props.navigation.getParam('Released', 'N/A')}</Text>
                <Text style={styles.row}>Duration: {this.props.navigation.getParam('Runtime', 'N/A')}</Text>
                <Text style={styles.row}>Genre: {this.props.navigation.getParam('Genre', 'N/A')}</Text>
                <Text style={styles.row}>Actors: {this.props.navigation.getParam('Actors', 'N/A')}</Text>
                <Text style={styles.row}>Director: {this.props.navigation.getParam('Director', 'N/A')}</Text>
                <Text style={styles.row}>Writer: {this.props.navigation.getParam('Writer', 'N/A')}</Text>
                <Text style={styles.row}>Production: {this.props.navigation.getParam('Production', 'N/A')}</Text>
                <Text style={styles.row}>Website: {this.props.navigation.getParam('Website', 'N/A')}</Text>
                <Text style={styles.row}>BoxOffice: {this.props.navigation.getParam('BoxOffice', 'N/A')}</Text>
                <Text style={styles.row}>Plot: {this.props.navigation.getParam('Plot', 'N/A')}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    poster: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        margin: 10,
        borderWidth: 1,
        resizeMode: 'contain',
    },
    row: {
        margin: 5,
        color: '#228',
    },
})