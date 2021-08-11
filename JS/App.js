import React, {Component} from 'react'
import Menu from './menu'
import SwatchList from './swatchList'

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <SwatchList />
            </div>
        )
    }
}