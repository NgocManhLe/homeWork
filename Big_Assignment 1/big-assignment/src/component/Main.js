import React from 'react'

const Main = () => {
  return (
    <div className='box'>
      <div className='filterYear'>
        <p>Filter by year</p>
        <select>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select> 
        
      </div>

      <div className='month'>
        <ul className='month-list'>
          <li><div className='ratio'><span>Jan</span></div></li>
          <li><div className='ratio'><span>Feb</span></div></li>
          <li><div className='ratio'><span>Mar</span></div></li>
          <li><div className='ratio'><span>Apr</span></div></li>
          <li><div className='ratio'><span>May</span></div></li>
          <li><div className='ratio'><span>Jun</span></div></li>
          <li><div className='ratio'><span>Jul</span></div></li>
          <li><div className='ratio'><span>Aug</span></div></li>
          <li><div className='ratio'><span>Sep</span></div></li>
          <li><div className='ratio'><span>Oct</span></div></li>
          <li><div className='ratio'><span>Nov</span></div></li>
          <li><div className='ratio'><span>Dec</span></div></li>
        </ul>
      </div>

      <div className='list'>
        <div className='date'>
          <p>January</p>
          <p>2022</p>
          <p>16</p>
        </div>
        <div className='info'>
          <h1>Some Book</h1>
          <h1>$50</h1>
        </div>
      </div>
    </div>
  )
}

export default Main