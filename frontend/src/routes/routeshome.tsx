import React, { Fragment, useContext, useEffect } from 'react';
import { SectionContext } from '../context/sectioncontext';
import {InicioScreen, TrilhasScreen} from '../pages/index'
import {PaginasHome} from '../listpaginashome/paginashome'


export const  RoutesHome : React.FC = () => {

    const {section,setSection} = useContext(SectionContext)

    useEffect(()=>{
        setSection(PaginasHome[0].nome)
    },[])


return (
    <Fragment>
        {section === PaginasHome[0].nome && <InicioScreen/>}
        {section === PaginasHome[1].nome && <TrilhasScreen/>}
    </Fragment>
)}