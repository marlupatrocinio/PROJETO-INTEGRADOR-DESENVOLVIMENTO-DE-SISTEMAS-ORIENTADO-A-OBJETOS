import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faVideo, faCircle, faPlay, faPause, faStop, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
export default function Record() {
  return (
    <div className="h-full w-full p-0 sm:p-16 text-white">
      <Head>
        <title>Gravação de Aulas - Projeto Integrador III</title>
      </Head>
      <header className="flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="text-xl font-bold flex items-center  mb-6">
          <Image className="h-auto max-w-full flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

        </div>
        <div className="text-lg flex justify-center items-center">
          <span className="ml-2">FORNECEDOR</span>
          <FontAwesomeIcon icon={faCircleUser} height={50} className='text-custom_yellow ms-6' />

        </div>
      </header>
      <main className="p-4">
        <h1 className="text-center text-2xl font-bold mb-8">GRAVAÇÃO DE AULAS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black flex items-center justify-center p-4 rounded-lg relative">
            <div className="absolute top-2 left-2 flex items-center">
              <FontAwesomeIcon icon={faVideo} height={20} className='text-red-600' />
              <span className="ml-1 text-red-500">REC</span>
            </div>
            <div className="mt-96">

              <div className="flex justify-center space-x-4">

                <FontAwesomeIcon icon={faCircle} height={20} className='text-red-600' />

                <FontAwesomeIcon icon={faPlay} height={20} className='text-white' />

                <FontAwesomeIcon icon={faPause} height={20} className='text-white' />

                <FontAwesomeIcon icon={faStop} height={20} className='text-white' />

              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="aula" className="block mb-1">AULA:</label>
                <select
                  id="aula"
                  className="w-full p-2 rounded border border-gray-600 text-custom_blue"
                >
                  <option value="05">05</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="disciplina" className="block mb-1">DISCIPLINA:</label>
                <select
                  id="disciplina"
                  className="w-full p-2 rounded border border-gray-600 text-custom_blue"
                >
                  <option value="engenharia-de-software">ENGENHARIA DE SOFTWARE</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="tema" className="block mb-1">TEMA:</label>
                <select
                  id="tema"
                  className="w-full p-2 rounded border border-gray-600 text-custom_blue"
                >
                  <option value="requisitos-funcionais">REQUISITOS FUNCIONAIS</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-600"
              >
                ADICIONAR
              </button>
            </form>
          </div>
        </div>
        <Link href="/panel">
          <div className="flex w-full justify-center sm:justify-end p-6">
            <FontAwesomeIcon icon={faRightFromBracket} style={{ height: '30px' }} className='text-custom_yellow' />
          </div>
        </Link>
      </main>
      <footer className="text-center p-4 text-gray-600">
        <p>PROJETO INTEGRADOR III - SENAC 2024</p>
      </footer>
    </div>
  );
}
