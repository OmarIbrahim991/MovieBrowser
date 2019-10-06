export const getResults = async (value) => {
    //url = `${process.env.APIURL}/?apikey=${process.env.APIKEY}&s=${value}`
    resp = await fetch(`http://www.omdbapi.com/?apikey=c71a195b&s=${value}`)
    result = await resp.json()
    if(!resp.ok) {
        throw(new Error('Error in the request'))
    }
    return result
}