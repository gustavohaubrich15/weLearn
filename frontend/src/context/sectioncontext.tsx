import React, { createContext, Fragment, useState } from 'react'

interface ISectionContext{
    section:string,
    setSection:(value:string)=>void
}

export const SectionContext = createContext<ISectionContext>({} as ISectionContext)

export const  SectionProvider : React.FC = (props) => {

    const [section,setSection] = useState('')

    return(
        <Fragment>
            <SectionContext.Provider value={{section,setSection}}>
                {props.children}
            </SectionContext.Provider>
        </Fragment>
    )

}