import { useSelector } from 'react-redux'

export default function ThemeProvider() {
    const theme = useSelector(state => state.theme)
    return (
        <div>ThemeProvider</div>
    )
}
