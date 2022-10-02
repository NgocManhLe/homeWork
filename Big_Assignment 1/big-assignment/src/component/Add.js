import React from 'react'
import { useState } from 'react'
var active = false
console.log(active)

const Add = () => {
  const [flag, setFlag] = useState(false)
  let onClick = () => {
   setFlag(true)
  }

    return (
    <div>
      <div className='addItem'>
        <button className={`btnAdd ${flag ? 'true' : 'false'}`} onClick={onClick} >ADD NEW EXPENSE</button>
        <form className={`formInput ${flag ? 'true' : 'false  '}`}>
          <div className='formInput-item'>
            <span>Name</span>
            <input type='text' placeholder='Enter name here...'/>
          </div>
          <div className='formInput-item'>
            <span>Amount</span>
            <input type='text' placeholder='Enter amount here...'/>
          </div>
          <div className='formInput-item'>
            <span>Date</span>
            <input type='text' placeholder='dd/mm/yyyy'/>
          </div>
          <div className='btnAdd-item'>
            <button>ADD</button>
            <button>CANCEL</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Add