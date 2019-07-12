'use strict'
import htmlTemplate from './index.html'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'


// I figured this out on my own based on how React imports templates -
// let's see it it keeps working but hot damn
// source: https://webpack.js.org/loaders/html-loader/
// source: https://github.com/rails/webpacker/blob/master/docs/typescript.md#html-templates-with-typescript-and-angular
document.body.innerHTML = htmlTemplate

const beerElement = document.body.querySelector('.botd')

const getBeers = async () => {
    const apiResponse = await fetch('https://api.punkapi.com/v2/beers/1')
    const apiResponseBody = await apiResponse.json()
    const beers = apiResponseBody
    console.log(beers)  
}

const displayBeers = beers => {
    beerElement.innerHTML = htmlTemplate.displayBeers({beers})
}

getBeers()


/*
const getBeers = async () => {
    const apiRes = await fetch('https://api.punkapi.com/v2/beers/1')

    const apiResBody = await apiRes.json()

    return apiResBody.hits.hits.map(hit => ({
        id: hit._id,
    }))
}
*/
/*
const listBeers = beers => {
    mainElement.innerHTML = htmlTemplate.listBeers({beers})
} 
*/