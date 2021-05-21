import {api} from '../../services'
import { toast } from 'react-toastify';


export const  LoginService = async(username:string, senha:string) =>  {
        
    try 
        {
            const response = await api.post('/autenticacao/login', {username,senha})
            toast.success(`Bem-vindo ${username}`)
            localStorage.setItem('token',response.data.token)
            return {autorizado:true}
        } catch(error){
            toast.error(error.response.data.mensagem)
            return {autorizado:false}
    }
}