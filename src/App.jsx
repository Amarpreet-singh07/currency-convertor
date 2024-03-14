import { useState } from 'react' 
import InputBox from './component/InputBox'
import coversionCurrency from './hooks/conversionCurr'
import './App.css'


function App() {
  
  const [amount ,setamount] = useState()
  const [from,setFrom ] = useState('USD')
  const [to,setTo] = useState('INR')
  let [convertCurrency , setConvertCurrency] = useState(0)
  
  const currencyInfo = coversionCurrency(from)
//   console.log(currencyInfo);
  const options = Object.keys(currencyInfo)

//   console.log(options);

  const swap =()=>{
     
     setFrom(to)
     setTo(from)
     setamount(convertCurrency)
     setConvertCurrency(amount)
  }

  const convert = () =>{
    // console.log(currencyInfo[to].value
    setConvertCurrency( (amount*currencyInfo[to].value)/currencyInfo[from].value)
    
    //console.log(convertCurrency);

  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()

                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                             currencyOption = {options}
                             onCurrencyChange={(currency)=>(setFrom(currency))}
                             selectCurrency={from}
                             onAmountChange={(amount) => setamount(amount)}

                        />    
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-500 hover:bg-orange-700 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertCurrency}
                            currencyOption = {options}
                            onCurrencyChange={( currency)=>(setTo(currency))}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
                  }
export default App
