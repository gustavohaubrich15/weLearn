import {api} from '../../services'
import { toast } from 'react-toastify';

export const  SignUpService = async(username:string, senha:string) =>  {

        try 
        {
            const response = await api.post('/autenticacao/cadastrar', {username,senha})
            toast.success(response.data.mensagem)
        } catch(error){
            toast.error(error.response.data.mensagem)
        }
}