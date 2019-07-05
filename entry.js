'use strict'
//import 'file-loader?name=[name].[ext]!./index.html'
//require('html-loader!./index.html')
import htmlTemplate from './index.html'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'


// I figured this out on my own based on how React imports templates -
// let's see it it keeps working but hot damn
// source: https://webpack.js.org/loaders/html-loader/
// source: https://github.com/rails/webpacker/blob/master/docs/typescript.md#html-templates-with-typescript-and-angular
document.body.innerHTML = htmlTemplate

/*
document.body.innerHTML = `
    <div>yo beer</div>
`*/