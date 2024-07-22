import axios from "axios";

const BASE_URL="http://127.0.0.1:8000/api/employee/"

export async function employeeListApi(){

    return await axios.get(BASE_URL)
}

export async function employeeDetailApi(id){

    return await axios.get(BASE_URL+`${id}/`)

}

export async function employeeCreateApi(data){

    let headers={'Content-Type':'multipart/form-data'}


    return await axios.post(BASE_URL,data,{headers:headers})

}

export async function employeeUpdateApi(id,data){

    return await axios.put(BASE_URL+`${id}/`,data)

}

export async function employeeDeleteApi(id){

    return await axios.delete(BASE_URL+`${id}/`)

}