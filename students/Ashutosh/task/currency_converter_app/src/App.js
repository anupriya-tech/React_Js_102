import React from 'react';

import data from './data/Data'
import SelectCurrency from './components/SelectCurrency'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    }

    this.onSelectCurrency = this.onSelectCurrency.bind(this);

  }

  onSelectCurrency(code){
    //console.log('selecting currency: '+code);
    const {currencies, currencyAval} = this.state;
    const currency = currencies.filter(currency => currency.code === code);
    this.setState({
      currencyB: currency[0], // this is an array with one item
      currencyBval: currencyAval * currency[0].sellRate
    })
  }

  onChangeHandler(e, currency){

    const {currencyA, currencyB} = this.state;

    if(currency === 'A'){
      
      const newValueA = e.target.value;
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate
      })

    } else if(currency === 'B'){
      
      const newValueB = e.target.value;
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
        currencyBval: newValueB
      })

    }

  }

  render(){
    const {currencies, currencyA, currencyB, currencyAval, currencyBval} = this.state;
    return (
      <div>
        <header>
         
          <h1>Currency Converter</h1>
        </header>
        <div >
          <div >
            <div >
              <h2>Select Currency</h2>
              <p>
                {
                  //Select currency
                }
                <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency} />
              </p>
            </div>
          </div>
          
          <div >
            <div >
              <h3 className={`currency-flag ${currencyA.code}`}>{currencyA.name}</h3>
              {
                  //Currency A input
              }
              <div >
                <span >{currencyA.sign}</span>
                <input type="number" value={currencyAval}  aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}" onChange={(e) => {
                  this.onChangeHandler(e, 'A');
                }} />
                <span id="basic-addon2">{currencyA.code}</span>
              </div>

            </div>
            <div >
              <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3>
              {
                  //Currency B input
              }
              <div >
                <span >{currencyB.sign}</span>
                <input type="number" value={currencyBval} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  onChange={(e) => {
                  this.onChangeHandler(e, 'B');
                }}/>
                <span >{currencyB.code}</span>
              </div>

            </div>
          </div>
          <div >
            <div >
              {
                  //Update to currently selected currency
              }
              <p>
                Exchange Rate {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`} = {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;