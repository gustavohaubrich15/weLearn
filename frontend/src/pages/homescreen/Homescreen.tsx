import React, {Fragment, useEffect, useState} from 'react';
import  {TokenService} from '../../services/'
import { Redirect } from 'react-router';
import {RoutesHome} from '../../routes/routeshome'
import {SideBar,Container} from '../../component/index'
import {SectionProvider} from '../../context/sectioncontext'
import './style.css'

export const  HomeScreen : React.FC = () => {

    const [logado,setLogado] = useState(true)
    const [username,setUsername] = useState('')
    
    useEffect(()=>{
        autenticar()
    },[])
    async function autenticar(){
        const  autenticado = await TokenService()
        setLogado(autenticado.autorizado)
        setUsername(autenticado.username)
     }

    return (
        <Fragment>
            {!logado && <Redirect to='/'></Redirect>}
            <Container page={'home'}>
                <SectionProvider>
                    <SideBar username={username}/>
                    <RoutesHome/>
                </SectionProvider>
            </Container>
        </Fragment>
    )
  
    }