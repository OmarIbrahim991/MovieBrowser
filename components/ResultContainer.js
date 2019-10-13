import React from 'react'
import { ScrollView, Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { fetchDetails } from '../api/API'

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    getDetails = async (key) => {
        details = await fetchDetails(key)
        this.props.navigation.push('Details', details)
    }

    getMovies = (movies) => {
        var imdbids = []
        results = movies.map(movie => {
            if(imdbids.indexOf(movie.imdbID) === -1)
            {
                imdbids.push(movie.imdbID)
                return (
                    <TouchableOpacity key={movie.imdbID} style={styles.movieContainer} onPress={() => this.getDetails(movie.imdbID)}>
                        <Image defaultSource={require('../assets/default.png')} source={{uri: movie.Poster}} style={styles.moviePoster} />
                        <View style={styles.movieData}> 
                            <Text style={styles.row}>Title: {movie.Title ? movie.Title : 'N/A'}</Text>
                            <Text style={styles.row}>Year: {movie.Year ? movie.Year : 'N/A'}</Text>
                            <Text style={styles.row}>Type: {movie.Type ? movie.Type : 'N/A'}</Text>
                            <Text style={styles.row}>imdbID: {movie.imdbID ? movie.imdbID : 'N/A'}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        })
        return results
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
                    {this.getMovies(this.props.movies.Search.map(movie => movie))}
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
    movieContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#228',
        borderWidth: 1,
        padding: 2,
        alignItems: 'center',
    },
    moviePoster: {
        width: 140,
        height: 120,
        borderWidth: 1,
        resizeMode: 'center',
    },
    movieData: {
        flexShrink: 1,
        flexDirection: 'column',
        padding: 5,
    },
    row: {
        fontSize: 14,
        margin: 2,
    },
})