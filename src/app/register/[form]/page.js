import React from 'react'

import Link from 'next/link';

export default function Page({ params }) {
  const { form } = params;
  return <div className='flex flex-col justify-center items-center'>

    <div className="px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
            {form == "personal" ? 'NOME' : 'NOME DA EMPRESA'}
          </label>
          <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
        </div>
        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
          {form == "personal" ? 'CPF' : 'CNPJ'}
          </label>
          <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 py-3 px-4" id="grid-last-name" type="text" placeholder="*******" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
          {'E-MAIL'}
          </label>
          <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 py-3 px-4 mb-3" id="grid-password" type="password" placeholder="@email.com" />
        </div>
        <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
          {'TELEFONE'}
          </label>
          <input className="bg-gray-700 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 py-3 px-4" id="grid-city" type="text" placeholder="99999-9999" />
        </div>
      </div>
      
      <div className="-mx-3 md:flex mb-2">

        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
            PERFIL
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-custom_blue py-3 px-4 pr-8 rounded" id="grid-state">
              {form == "personal" ? <> <option>Aluno</option> <option>Professor</option> </> : <option>Fornecedor</option>}
            </select>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
         
        </div>
      </div>
    </div>

    <button type="submit" className="bg-green-600 text-white rounded-full p-4 ps-12 pe-12 mb-4 mx-4 focus:ring-2 focus:outline-none focus:ring-white">
           <Link href="/">Cadastrar</Link> 
          </button>

  </div>;
}