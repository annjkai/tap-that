'use strict'
import htmlTemplate from './index.html'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/bootstrap/dist/css/custom.css'


// I figured this out on my own based on how React imports templates -
// let's see it it keeps working but hot damn
// source: https://webpack.js.org/loaders/html-loader/
// source: https://github.com/rails/webpacker/blob/master/docs/typescript.md#html-templates-with-typescript-and-angular
document.body.innerHTML = htmlTemplate

const beerNameElement = document.body.querySelector('.botd-name')
const beerTaglineElement = document.body.querySelector('.botd-tagline')
const beerDescriptionElement = document.body.querySelector('.botd-description')

const getBeers = async () => {
    const apiResponse = await fetch('https://api.punkapi.com/v2/beers/')
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

            const randomBeer = allBeers[Math.floor(Math.random() * allBeers.length)]
            console.log(randomBeer)

            const beerName = randomBeer[0]
            const beerTagline = randomBeer[1]
            const beerDescription = randomBeer[2]

            beerNameElement.innerHTML = beerName
            beerTaglineElement.innerHTML = "'" + beerTagline + "'"
            beerDescriptionElement.innerHTML = beerDescription
        })
}

getBeers()