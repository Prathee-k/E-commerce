
const prodReducer = (state,action) => {
  switch (action.type) {
    case "SET_LOADING":
        return{
            ...state,
            isLoading:true
        }
        case "SINGLE_LOADING":
        return{
            ...state,
            singleLoading:true
        }

       

        case "MY_DATA":
          const featuredProducts=action.payload.filter((c)=>{return c.featured===true})

            return{
              ...state,
              isLoading:false,
              products: action.payload,
              featureProducts: featuredProducts,

            }
            case "SINGLE_DATA":
              return{
                  ...state,
                  singleLoading:false,
                  singleData:action.payload
              }
            case "API_ERROR":
              return{
                ...state,
                isLoading:false,
                isError:true
              }
              case "SINGLE_ERROR":
                return{
                  ...state,
                  singleLoading:false,
                  isError:true
                }
  
    default:
        return state
  }
  
}

export default prodReducer