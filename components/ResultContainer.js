import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {movies: null}
    }

    getDetails = (m) => {
        query = this.props.movies.Search.filter((movie) => movie.Title === m)[0]
        this.props.navigation.push('Details', query)
    }

    getUniqueTitles = (titles) => {
        let unique = [...new Set(titles)]
        return unique.map(movie =>
        <Text onPress={() => this.getDetails(movie)}
        style={styles.row} key={movie}>{movie}</Text>
        )
    }

    shouldComponentUpdate = (prevProps) => {
        if(prevProps.movies === this.props.movies) {
            return false
        }
        return true
    }

    render() {
        if(this.props.movies) {
            return (
                <ScrollView style={styles.container}>
                    {this.getUniqueTitles(this.props.movies.Search.map(movie => movie.Title), this.props.movies.Search)}
                </ScrollView>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#23d',
    },
    row: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#eff',
        backgroundColor: '#228',
        padding: 5,
        margin: 2,
    },
})