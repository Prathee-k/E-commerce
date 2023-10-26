import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducer/prodReducer'
 
let api="http://localhost:5000/products"

 export let Productcontext=createContext()


    const initialState = {
      isLoading: false,
      isError: false,
      products: [],
      featureProducts: [],
    singleLoading:false,
  singleData:{}
  }
    

 export let Productprovider=({children})=>{


const [state, dispatch] = useReducer(reducer, initialState);


    let display = async (url) => {

       try {
        dispatch({type:"SET_LOADING"})
         let res = await axios.get(url)
         let data = await res.data
        console.log(data);

          dispatch({type:"MY_DATA", payload:data})
       } catch (error) {
        dispatch({type:"API_ERROR"})
       }
      
      }
      //second api call for single page overview

let getSingle=async(url)=>{
  try {
    dispatch({type:"SINGLE_LOADING"})
     let res = await axios.get(url)
     let singleData = await res.data
    console.log(singleData);

      dispatch({type:"SINGLE_DATA", payload:singleData})
   } catch (error) {
    dispatch({type:"SINGLE_ERROR"})
   }
}


    useEffect(() => {
        display(api)
      }, [])
    return (
<Productcontext.Provider value={{...state,getSingle}}>{children}</Productcontext.Provider>
      )    
    
 }

 export let useProduct=()=>{
    return useContext(Productcontext)

  }