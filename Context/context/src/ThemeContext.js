import { useState, createContext } from 'react'

const ThemeContext = createContext()

 function ThemeProvider({children}) {
// ẩn hiện form đăng nhâp
    const [flag, setFlag] = useState('')
// lây ra giá trị nhập vào tại ô input
    const [values, setValues] = useState()
    const userLogin = (e) => {
        setValues(e.target.value)
    }
// login tai khoản
    const main = () => {
        setFlag(values) 
    }
// đăng xuất tàii khoản
    const login = () => {
        setFlag('Login')
    }

       const inittalLanguage = [
		{
			language: 'vietNam',
			logo: 'Đăng nhập',
			placeholder: 'Tên đăng nhập ...',
			content: 'Chào mừng bạn đến với trang chủ của MindX!',
		},
		{
			language: 'America',
			logo: 'Login',
			placeholder: 'Username ...',
			content: `Welcome to MindX's homepage!`,
		},
		{
			language: '한국인',
			logo: '로그인',
			placeholder: '사용자 이름 ...',
			content: 'MindX 홈페이지에 오신 것을 환영합니다!',
		}
	]


// convert ngôn ngữ
    const [languages, setLanguages] = useState('vietNam')
    const convertLanguage = (e) => {
        setLanguages(e.target.value)
    }

// lọc qua list language
const listIndex = inittalLanguage.filter(item  => 
    item.language === languages
)
console.log(listIndex[0].logo)
    const value = {
        flag,
        main,
        userLogin,
        login,
        inittalLanguage,
        convertLanguage,
        languages,
        listIndex
    }

    return (
    <ThemeContext.Provider value = {value}>
        {children}
    </ThemeContext.Provider>
    )
 }


 export { ThemeContext, ThemeProvider }