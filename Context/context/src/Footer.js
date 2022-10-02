import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'


const Footer = () => {
  const changeLanguage = useContext(ThemeContext)
  return (
    <div className='footer'>
        <select onChange={changeLanguage.convertLanguage}>
          <option value='vietNam'>Vi</option>
          <option value='America'>America</option>
          <option value='한국인'>한국인</option>
        </select>
    </div>
  )
}

export default Footer