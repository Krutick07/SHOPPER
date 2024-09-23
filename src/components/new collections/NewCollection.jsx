import React from 'react'
import './NewCollection.css'
import  I from '../items/I.jsx'
import New_collection from '../Assets/NewCollection'

export const NewCollection = () => {
  return (
    <div className='NewCollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {New_collection.map((item,i)=>{
          return <I key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
