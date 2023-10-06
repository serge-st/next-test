'use client'

import { useState } from 'react'

export default function Page({ params }: { params: { value: string } }) {
    const [count, setCount] = useState(parseInt(params.value))
    const clickHandler = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl'>Counter</h1>
            <h2 className='text-2xl flex justify-center items-center gap-2'>Current Count: <span className='text-red-600 text-3xl'>{count}</span></h2>
            <button type="button" 
                className='text-2xl border px-4 py-2 border-red-600 rounded opacity-80 hover:opacity-100 transition-all'
                onClick={clickHandler}
            >
                Increment
            </button>
        </div>
    )
}