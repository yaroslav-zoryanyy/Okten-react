import axios from "axios";
import {IUser} from "../Components/Models/IUser";

const axiosInstance  = axios.create({
    baseURL: "https://dummyjson.com",
    headers:{}
});

export const getUsers = async () =>{
    let axiosResponse:IUser = await axiosInstance.get('/users')
    console.log(axiosResponse)
}

