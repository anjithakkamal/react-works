import axios from "axios"

const BASE_URL="http://127.0.0.1:8000/api/"

export async function addCustomerApi(data){

    return await axios.post(BASE_URL+"customers/",data)
}

export async function ListCustomerApi(){

    return await axios.get(BASE_URL+"customers/")
}