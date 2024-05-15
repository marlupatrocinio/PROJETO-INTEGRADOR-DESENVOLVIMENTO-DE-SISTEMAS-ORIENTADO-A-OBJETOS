import * as React from 'react';

import Image from "next/image";
import Link from 'next/link';

const index = () => {
  return (
    <main>
      <form action="#">

        <div className='h-full h-full flex flex-col lg:flex-row justify-around items-center'>

          <Image className="h-auto max-w-full flex lg:hidden" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />



          <div className='w-full h-1/2 flex flex-col justify-center items-center m-12'>

            <Image className="h-auto w-full hidden lg:flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

            <div className='h-full w-full space-y-4 flex flex-col mt-6 items-start'>
              <label className="block text-white md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Senha Atual
              </label>
              <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" required />

              <label className="block text-white md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Nova Senha
              </label>
              <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" required />

              <label className="block text-white md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Confirmar Senha
              </label>
              <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" required />

            </div>

          </div>

          <div className="w-full h-full hidden lg:flex justify-end items-end">
            <Image className="h-full max-w-full pt-36" src={'/Triangles.png'} width={250} height={250} alt="triangles" />
          </div>


        </div>
        <div className=" flex justify-center items-start sm:ms-12 flex-wrap">
          <Link href="/" ><button type="submit" className="bg-green-600 text-white rounded-full p-4 ps-12 pe-12 mb-4 mx-4 focus:ring-2 focus:outline-none focus:ring-white">
            Salvar
          </button>
          </Link>
          <Link href="/" className="bg-red-600 text-white rounded-full p-4 ps-12 pe-12 mx-4 focus:ring-2 focus:outline-none focus:ring-white">
            Cancelar
          </Link>
        </div>

      </form>
    </main>
  )
}

export default index