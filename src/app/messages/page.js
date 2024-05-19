import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
export default function Home() {
  return (
    <div className="w-full h-full max-w-7xl text-white flex-col flex justify-center items-center">
      <Head>
        <title>Recados - Projeto Integrador III</title>
      </Head>
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 w-full h-auto mt-32">
        <div className="text-xl font-bold flex  justify-center items-center mb-4">
          <Image className="h-auto max-w-full flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />
        </div>
        <div className="text-lg flex justify-center items-center">
          <span className="ml-2">ALUNO</span>
          <FontAwesomeIcon icon={faCircleUser} height={50} className='text-custom_yellow ms-6' />
        </div>
      </header>
      <main className="p-4 w-full h-auto ">
        <h1 className="text-center text-2xl font-bold mb-8">RECADOS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-500 p-4 rounded-lg">
            <div className='flex items-start'>
              <FontAwesomeIcon icon={faMessage} height={25} className='me-2'/>
              <h2 className="text-xl font-bold mb-4">MENSAGENS RECEBIDAS</h2>
            </div>

            <ul>
              {[...Array(4)].map((_, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 border-b bg-white rounded my-3"
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCircleUser} height={25} className='text-custom_blue' />
                    <span className="ml-2 text-custom_blue">GRUPO</span>
                  </div>
                  <button className="text-blue-500 hover:underline">VISUALIZAR</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button className="text-custom_blue hover:underline font-bold text-2xl">{'<'}</button>
              <button className=" ms-2 text-custom_blue hover:underline font-bold text-2xl">{'>'}</button>
            </div>
          </div>
          <div className="bg-gray-500 p-4 rounded-lg">
            <div className='flex items-start'>
              <FontAwesomeIcon icon={faPaperPlane} height={25} className='me-2'/>
              <h2 className="text-xl font-bold mb-4">NOVA MENSAGEM</h2>
            </div>
            <form className='text-center'>
              <div className="mb-4">
              <select
                  id="tema"
                  className="w-full p-2 rounded border border-gray-600 text-custom_blue"
                >
                  <option value="requisitos-funcionais" >PARA:</option>
                </select>


              </div>
              <div className="mb-4">
                <textarea
                  rows="5"
                  className="w-full p-2 rounded bg-white border text-custom_blue border-gray-600"
                  placeholder="Escreva sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-1/2 bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-600"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
        
        <Link href="/panel" className="flex w-full justify-center sm:justify-end p-6">
          <div >
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
