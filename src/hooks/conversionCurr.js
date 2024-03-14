import { useEffect , useState } from "react";

const useConversionCurrency = function(currency){
    const [data,setData] = useState({}) // initiating with empty object so that in case if fetch not happens then our website doestnt crash
    useEffect(()=>{
        
        fetch(` https://api.currencyapi.com/v3/latest?apikey=cur_live_MFBJwj4dzUDXo922TwMsvZddZqhI4460rOzn9Y9p`)
        .then((res)=>res.json()) // data come in string so to convert in JSON
        .then((res)=>setData(res.data)) // we are only interested in currency key of the data for which we have conversion

    },[currency]) // useEffect come in act everytime when currency changes 
    return data
}

export default useConversionCurrency;