import React from 'react'
const defaultOption = ["Mountain","Beaches","Birds","Food"];
const DefaultOption = ({setValue}) => {
    const onClickHandler = (value) => setValue(value); 
  return (
    <div className='btn-conatainer'>
      {
        defaultOption.map( option => <button key={option} onClick={onClickHandler.bind(this,option)} className='btn'>{option}</button>)
      }
      
    </div>
  )
}

export default DefaultOption
