import axios from 'axios';
const url="https://code-manager-project.herokuapp.com/posts";
export const fetchCodes=()=>axios.get(url);
export const createCode=(newCode)=>axios.post(url,newCode);
export const deleteCode=(id)=>axios.delete(`${url}/${id}`);