import * as React from 'react';

import Image from "next/image";
import Link from 'next/link';

const index = () => {
  return (
    <main>
      <form action="#">

        <div className='h-full h-full flex flex-col justify-center items-center'>

          <Image className="h-auto max-w-full flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />



          <div className='w-full h-1/2 flex flex-col justify-center items-center m-12 space-y-10'>

            <h1 className='text-white text-3xl'>Esqueceu a senha?</h1>

            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
              Informe o seu e-mail de cadastro:
            </label>
            <input className=" text-2xl bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="****@email.com" />

            <p className='text-white'>Enviaremos a sua senha atual para o seu e-mail.<br/>Em seguida, para maior segurança, orientamos que você acesse<br/>seu perfil e redefina sua senha.</p>

          </div>



        </div>
        <div className=" flex justify-center items-start flex-wrap">
          <Link href="/change_password" ><button type="submit" className="bg-custom_yellow text-custom_blue rounded-full p-2 ps-12 pe-12 mb-4 mx-4 focus:ring-2 focus:outline-none focus:ring-white">
            ENVIAR
          </button>
          </Link>
        </div>

      </form>
    </main>
  )
}

export default index