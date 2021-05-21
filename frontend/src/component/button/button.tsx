import React from 'react';
import './style.css'


interface IButton {
    nome:string;
  }

export const  Button : React.FC<IButton> = (props) => {

    return(
          <div className='botao'>{props.nome}</div>
    )
}