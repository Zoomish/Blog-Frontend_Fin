import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function ThemeProvider({ children }) {
    const theme = useSelector(state => state.theme.theme);

    return (
        <div className={theme}>
            <div className="bg-white dark:bg-[#11172b] text-gray-700 dark:text-gray-200">
                {children}
            </div>
        </div>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};