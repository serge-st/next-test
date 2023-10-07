'use client'

import { useEffect, useState, useRef, ReactNode } from "react";

export const Timer = (props: {children?: ReactNode}) => {
    const [count, setCount] = useState(0);
    const [buttonName, setButtonName] = useState<'Start' | 'Stop'>('Start');

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleNameChange = () => {
        setButtonName(name => name === 'Start' ? 'Stop' : 'Start')
    }

    const resetTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCount(0)
        setButtonName('Start')
    }

    const toggleTimer = () => {
        handleNameChange();
        if (buttonName === 'Start') {
            intervalRef.current = setInterval(() => {
                setCount(prev => prev + 1);
            }, 100);
        } else {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            intervalRef.current = null;
        }
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, []);


    return (
        <>
            <h1 className="text-6xl">{props.children}</h1>
            <h2 className="text-4xl">Countdown: <span>{count}</span></h2>
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={() => {
                        toggleTimer();
                    }}
                >{buttonName}</button>
                <button
                    type="button"
                    onClick={resetTimer}
                >Reset</button>
            </div>
        </>
    );
};

