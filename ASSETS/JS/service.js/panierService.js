import axios from "axios";


const API_URL = "http://localhost:3001/panier"



export async function PanierService(panierId) {
    return await axios.post(API_URL,{
        
    })
    
}