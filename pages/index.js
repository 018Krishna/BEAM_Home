
import Image from "next/image";
import { Inter } from "next/font/google";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default  function Home() {
  const { data: session } = useSession()
  if(session) {
   
  
    return <>
    {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<header className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {session.user.name}</h1>

        <p className="mt-1.5 text-md text-gray-500 max-w-lg">View the stastic of Your Business and Add product 🎉</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <Link
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          href={'/products'}
        >
          <span className="text-md font-medium"> View Product </span>
   
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>

        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> View Product </span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

        </button>
      </div>
    </div>
  </div>
</header>


<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>
</>
  }


  return <>
  <div className="flex flex-col min-h-screen justify-center items-center max-w-4xl m-auto">
    <h1 className="text-4xl font-bold max-w-lg text-center">𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐓𝐡𝐞 𝐀𝐝𝐦𝐢𝐧 𝐖𝐞𝐛𝐬𝐢𝐭𝐞</h1>
    <p className="font-medium my-4">An Account Is neded For THis Page</p>

    <button
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  onClick={() => signIn('google')}
  
>
Ｓｉｇｎ Ｉｎ Ｗｉｔｈ Ｇｏｏｇｌｅ
</button>
  
  </div>
  
  </>
    
}



 
    

