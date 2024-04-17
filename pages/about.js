export default function Home() {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="flex flex-col items-center justify-center w-full h-[50vh]">
                <h1 className="text-6xl font-bold text-center">
                    Welcome to{" "}
                    <a
                        href="https://nextjs.org"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                        My app!
                    </a>
                </h1>
            </header>
        </main>
        </>
    );
}