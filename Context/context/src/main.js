import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
const Main = () => {
const theme = useContext(ThemeContext)
    return (
        <div>
        <div className={`body ${theme.flag !== 'Login' ? 'disable' : 'Login'}`} >
           <div> {theme.listIndex[0].logo} </div>
        <div>
            <input type='text' placeholder= {theme.listIndex[0].placeholder} onChange={theme.userLogin} />
            <button onClick={theme.main}>{theme.listIndex[0].logo}</button>
        </div>

        </div>
            <div className={`body ${theme.flag === 'Login' ? 'disable' : 'Login'}`} >
                <div>{theme.listIndex[0].content} </div>
            <div>
        </div>
     </div>

        </div>
    )
}

export default Main