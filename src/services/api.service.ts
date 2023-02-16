import axios from 'axios'
import { FAKE_API } from '../constants'
axios.defaults.baseURL = FAKE_API

export const post = async (query: string, body: any) =>
    await axios.post(query, body)
export const get = async (query: string) => await axios.get(query)
