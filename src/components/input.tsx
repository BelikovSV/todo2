import React, {ChangeEvent, useState} from 'react';


type propsType = {
    newTitle: string
    SetNewTitle: (newTitle: string)=>void
}

export const Input = (props:propsType) => {

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetNewTitle(e.currentTarget.value)
    }
    return(
        <input value={props.newTitle} onChange={onchangeHandler}/>
    );
};