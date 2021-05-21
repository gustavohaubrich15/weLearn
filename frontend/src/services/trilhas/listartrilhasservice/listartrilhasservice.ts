import {api} from '../../services'

export const  ListarTrilhasService = async() =>  {

        try 
        {
            const token = localStorage.getItem('token')
            const response =await api.get('/trilhas/listar', { headers: { 'auth-token': token }})
            console.log(response)
        } catch(error){
            console.log('falhou')
        }
}