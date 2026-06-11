import axios from "https://esm.sh/axios";
import urls from "./urls.js";

import {validator} from "./validator";

const axiosObject = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', headers: {'Content-Type': 'application/json'},
})

export async function getUsers() {
    return await axiosObject.get(urls.users)
}
export async function getUser(id) {
    return await axiosObject.get(urls.users + '/'+ id)
}
export async function getPosts() {
    return await axiosObject.get(urls.posts)
}
export async function getPost(id) {
    return await axiosObject.get(urls.posts + '/'+ id)
}
export async function getComments() {
    return await axiosObject.get(urls.comments)
}
export async function getComment(id) {
    return await axiosObject.get(urls.comments + '/'+ id)
}
