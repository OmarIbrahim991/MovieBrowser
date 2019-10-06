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

    default_img = 'https://m.media-amazon.com/images/M/MV5BMTkyMTQzMzY1MF5BMl5BanBnXkFtZTcwMTc4NzkyMQ@@._V1_SX300.jpg'

    render() {
        return (
            <ScrollView>
                <Image source={{uri: this.props.navigation.getParam('Poster',this.default_img)}}
                style={styles.poster} />
                <Text style={styles.row}>Title: {this.props.navigation.getParam('Title', 'N/A')}</Text>
                <Text style={styles.row}>Year: {this.props.navigation.getParam('Year', 'N/A')}</Text>
                <Text style={styles.row}>Type: {this.props.navigation.getParam('Type', 'N/A')}</Text>
                <Text style={styles.row}>imdbID: {this.props.navigation.getParam('imdbID', 'N/A')}</Text>
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
    },
    row: {
        margin: 5,
        color: '#228',
    },
})