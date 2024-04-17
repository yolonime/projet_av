import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <header className="flex flex-col items-center justify-center w-full h-[50vh]">
        <h1 className="text-6xl font-bold text-center">
          Welcome to{" "}
          <a
            href="/about"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            My app!
          </a>
        </h1>

        <p className="mt-3 text-2xl text-center text-gray-500 dark:text-gray-400">
          made by{" "}
          <code className="p-2 font-mono text-lg bg-gray-100 dark:bg-gray-800 rounded-lg">
            yolonime
          </code>
        </p>
      </header>
    </main>
  );
}
