import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const interval = 5
    const [ timer, setTimer ] = useState(interval)
    const [bg, setBg] = useState('steelblue')

    useEffect(() => {
        const countdown = () => {
            setTimer(t => {
                if (t === 0) {
                    changeBackground()
                    return interval
                } else {
                    return t - 1
                }
            })
        };

        const changeBackground = () => {
            if (bg === 'steelblue') {
                setBg('coral')
            } else {
                setBg('steelblue')
            }
        }

        /* Creating an interval that calls the countdown function every 1 second (1000ms)*/
        const int = setInterval(countdown, 1000);

        /* Return the function you want trigger on clean up.
        In this case, I need to clear the interval */
        return () => clearInterval(int);
    }, [bg]);
    return <p style={{'background-color': bg, color: 'white'}}>{timer}</p>
}

export default Countdown
