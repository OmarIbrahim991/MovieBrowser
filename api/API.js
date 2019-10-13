export const getResults = async (value) => {
    try{
        let resp = await fetch(`http://www.omdbapi.com/?apikey=c71a195b&s=${value}`)
        let result = await resp.json()
        return result
    }
    catch (err) {
        throw(new Error(err.message))
    }
}

export const fetchDetails = async (id) => {
    try{
        let resp = await fetch(`http://www.omdbapi.com/?apikey=c71a195b&i=${id}`)
        let result = await resp.json()
        return result
    }
    catch (err) {
        throw(new Error(err.message))
    }
}