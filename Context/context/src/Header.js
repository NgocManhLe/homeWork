import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
const Header = () => {
  const context = useContext(ThemeContext)
  return (
    <div className='header'>
        <h2>MindX</h2>
        <p onClick={context.login}>{context.flag ? context.flag : context.listIndex[0].logo} </p>
    </div>
  )
}
// {context.flag ? context.flag : context.listIndex[0].logo}
export default Header