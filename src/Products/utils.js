const baseURL=process.env.REACT_APP_BASE_URL;
export const getProduct= async() => {
    try{
       const response= await fetch(`${baseURL}/products`)
       return response.json()
    }
    catch(error){
        throw new Error(error.message)
    }
}