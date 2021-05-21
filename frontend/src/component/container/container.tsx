import React, { Fragment } from 'react';
import './style.css'

interface IContainer{
  page: string
}

export const  Container : React.FC<IContainer> = (props) => {

    return(
      <Fragment>
        <div className={props.page}>
          {props.children}
          </div>
      </Fragment>
    )
}