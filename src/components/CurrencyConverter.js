import React, { Component } from 'react'

class Currency extends Component {
    constructor() {
        super()

        this.state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        }
        this.handleAmountDecrease = this.handleAmountDecrease.bind(this)
        this.handleAmountIncrease = this.handleAmountIncrease.bind(this)
        this.handleOptionSelect = this.handleOptionSelect.bind(this)
    }

    handleAmountIncrease() {
        this.setState({
            amount: this.state.amount + 1
        })
    }

    handleAmountDecrease() {
        this.setState({
            amount: this.state.amount - 1
        })
    }

    handleOptionSelect(event) {
        let userValue = event.target.value
        this.setState({
            selectedCurrency: userValue,
            currencyChosen: userValue === 'Select Currency' ? false : true
        })
    }

    render() {
        let currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]

        let mapCurrencyOptions = currencyData.map((currency, index) => {
            return (
                <option value={index} key={index}>{currency.name}</option>
            )
        })

        return (
            <div>
                <select onChange={this.handleOptionSelect}>
                    <option>{this.state.selectedCurrency}</option>
                    {mapCurrencyOptions}
                </select>
                <div>
                    <button onClick={() => this.handleAmountIncrease()}>+</button>
                    <button onClick={() => this.handleAmountDecrease()}>-</button>
                </div>
                {this.state.currencyChosen ? (
                    this.props.render(
                        currencyData[this.state.selectedCurrency],
                        this.state.amount
                    )
                ) : (
                    <p>Please Select Currency</p>
                )}
            </div>
        )
    }
}

export default Currency