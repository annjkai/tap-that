'use strict'
import htmlTemplate from './index.html'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/bootstrap/dist/css/bootstrap.custom.css'

// source: https://webpack.js.org/loaders/html-loader/
// source: https://github.com/rails/webpacker/blob/master/docs/typescript.md#html-templates-with-typescript-and-angular
document.body.innerHTML = htmlTemplate

const beerNameElement = document.body.querySelector('.botd-name')
const beerTaglineElement = document.body.querySelector('.botd-tagline')
const beerDescriptionElement = document.body.querySelector('.botd-description')

const getBeers = async () => {
    const apiResponse = await fetch('https://api.punkapi.com/v2/beers?per_page=80')
        .then(res => {
            return res.json()
        })
        .then(beers => {
            // console.log(beers)
            const allBeers = beers.map(beer => {
                const singleBeer = []
                const beerName = beer.name
                const beerTagline = beer.tagline
                const beerDescription = beer.description
                return singleBeer.concat(beerName, beerTagline, beerDescription)
            })           

            const currentDay = Math.floor((Date.now() / 86400000) % 80) // 60000
          
            const randomBeer = allBeers[currentDay]
            // console.log(randomBeer)
            const beerName = randomBeer[0]
            const beerTagline = randomBeer[1]
            const beerDescription = randomBeer[2]

            beerNameElement.innerHTML = beerName
            beerTaglineElement.innerHTML = "'" + beerTagline + "'"
            beerDescriptionElement.innerHTML = beerDescription
        })
}

getBeers()


