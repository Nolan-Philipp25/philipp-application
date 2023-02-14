import axios from "axios";

export const post = async (query:string,body:any) => await axios.post(query, body);