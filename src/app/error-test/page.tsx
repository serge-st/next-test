'use client'

export default function ErrorPage() {
    const handleClick = () => {
        throw new Error('now were\'re talking')
    }

    return(
      <div className="flex flex-col w-screen h-full justify-center items-center">
        <h1>Welcome to error page</h1>
        <p>No error yet, but you can</p>
        <button 
            className="border border-solid rounded px-6 py-3"
            type="button"
            onClick={handleClick}
        >
            Throw an <span className="text-red-500 font-bold">error</span>
        </button>
      </div>
    )
}