export default function ErrorPage() {
    if (Math.random() > 0.5) {
      throw new Error('oooops')
    }

    return(
      <div className="flex flex-col w-screen h-full justify-center items-center">
        <h1>Welcome to error page</h1>
        <p>No error yet, but you can get one 😵</p>
      </div>
    )
}