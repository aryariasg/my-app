import React, { useState } from 'react';


export default function ItemCount ({ initial = 0, stock = 10, onAdd = () => {} }){
  const [ userSelected, setUserSelected] = useState (initial)

  const increment = () => {
    if (userSelected < stock) setUserSelected (userSelected +1)
  }

  const decrement = () => {
    if (userSelected > 1) setUserSelected (userSelected -1)
  }



return(
  <div className = 'count-conntainer' >
    <div className='count_container_counter'>
        <button className='count-container__button' onClick = {() => decrement()}>-</button>
        <div className='count_container_initial'>{userSelected}</div>
        <button className='count-container__button' onClick = {() => increment()}>+</button>
    </div>
        <div className = 'add' >
          <button onClick = {onAdd}> Argregar al carrito</button>
        </div>
  </div>

)}