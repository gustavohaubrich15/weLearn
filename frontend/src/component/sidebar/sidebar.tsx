import React, { Fragment} from 'react';
import { ReactSVG } from 'react-svg';
import {Selection} from '../index'
import {PaginasHome} from '../../listpaginashome/paginashome'
import origami from '../../images/origami.svg'
import fotoinicial from '../../images/fotoinicial.jpg'
import './style.css'

interface ISideBar{
  username:string
}

export const  SideBar : React.FC<ISideBar> = (props) => {

    return(
      <Fragment>
          <div className="sidebar">
            <ReactSVG src={origami} className="mini-origami" />
            <div className ="first-info"> 
              <div className="foto">
                  <img src={fotoinicial} alt='foto-perfil'></img>
              </div>
              <div className="usuario">{props.username}</div>
            </div>
            <div className="choose">
              {PaginasHome.map((section)=>{
                return <Selection key ={section.id} logo={section.logo} nome={section.nome} />
              })}
            </div>
          </div>
      </Fragment>
    )
}