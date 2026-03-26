"use client"
export default function errorPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    500 - Internal Server Error
                </h1>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"> 
                    Something went wrong on our end. Please try refreshing the page or come back later.
                </p>
            </main>
        </div>
    )   
}