import React, { Fragment, useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { SectionContext } from '../../context/sectioncontext';
import './style.css'

interface ISelection{
  logo:string,
  nome:string
}

export const  Selection : React.FC<ISelection> = (props) => {

  const {setSection}= useContext(SectionContext)

  function alterarSecao(){
    setSection(props.nome)
  }

    return(
      <Fragment>
          <div className="selection" onClick={alterarSecao}>
              <ReactSVG src={props.logo} className="logo"/>
              <div>{props.nome}</div>
          </div>
      </Fragment>
    )
}

