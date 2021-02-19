import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './style.css';

const themes = [
    'default-theme',
    'black-theme',
    'red-theme',
    'blue-theme'
]

const PracticeUseCallBack = () => {

    const [theme, setTheme] = useState('');

    const getRandomNumber = useCallback(() => {
        return Math.random();
    }, [])

    const randomNumber = useMemo(() => {
        return getRandomNumber();
    }, [getRandomNumber])

    const toggleTheme = useCallback(() => {
        setTheme(themes[Math.ceil(getRandomNumber() * themes.length)]);
    }, [getRandomNumber])

    useEffect(() => {
        toggleTheme();
    }, [toggleTheme])

    console.log("randomNumber", randomNumber)

    return (
        <div className={`practice-callback-main ${theme}`}>
            <div>
                hello from PracticeUseCallBack
            </div>

            <button onClick={toggleTheme}>
                Change Theme
            </button>
        </div>
    )

}

export default PracticeUseCallBack;