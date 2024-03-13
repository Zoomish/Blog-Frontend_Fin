import { useSelector } from 'react-redux'

export default function ThemeProvider({ children }) {
    const theme = useSelector(state => state.theme)
    return (
        <div className={theme}>
            <div className='bg-white dark:bg-[rgb(17, 24, 39)] text-gary-700 dark:text-gray-200'>
                {children}
            </div>
        </div>
    )
}
