import {api} from '../../services'
import { toast } from 'react-toastify';

export const  TokenService = async() =>  {

        try 
        {
            const token = localStorage.getItem('token')
            const response =await api.get('/autenticacao/token', { headers: { 'auth-token': token }})
            return {autorizado:true, username:response.data.username}
        } catch(error){
            toast.error(error.response.data.mensagem)
            return {autorizado:false, username:''}
        }
}