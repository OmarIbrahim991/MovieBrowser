import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native'
import { getResults } from '../api/API'
import ResultContainer from '../components/ResultContainer'

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Movie Browser',
    }
    constructor(props) {
        super(props)
            this.state = { value: '', movies: null, error: null }
    }

    handleChange = text => {
        this.setState({value: text})
    }

    fetchMovies = async () => {
        const results = await getResults(this.state.value)
        if(results.Response === 'True') {
            this.setState({movies: results, error: null})
        } else {
            this.setState({movies: null,error: results.Error})
        }
    }
  
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput value={this.state.value} onChangeText={this.handleChange}
                style={styles.searchInput} placeholder='Search for movies!'/>
                <Button onPress={this.fetchMovies} title='Search' />
            </View>

            {this.state.error ? <Text style={styles.error}>{this.state.error}</Text> : null}

            <ResultContainer navigation={this.props.navigation} movies={this.state.movies} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
    searchContainer: {
        flexDirection: 'row',
    },
    searchInput: {
        flexGrow: 1,
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#eff',
    },
    error: {
        color: 'red',
        margin: 5,
    },
})