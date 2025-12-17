export const ProductFetch= async()=>{


    try {
     const data = await fetch ('https://api.escuelajs.co/api/v1/products')
     const response = await data.json()
console.log(response,'apidata')
return response;
    }
    catch (error){
        console.log(error,'api error')
        throw error
    }
    return (
        <div>
        
        </div>
    )
}