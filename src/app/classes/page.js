import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
export default function Home() {
  return (
    <div className="h-full text-white flex flex-col items-center p-6 sm:px-20 mt-24">
      <header className="w-full flex sm:flex-row flex-col justify-between items-center py-4">
      <div className="flex items-center space-x-2 mb-4">
          <Image className="h-auto max-w-full flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />
        </div>
        <div className="flex justify-center items-center">
          <span className="font-bold text-lg">ALUNO</span>
          <FontAwesomeIcon icon={faCircleUser} height={50} className='text-custom_yellow ms-6' />
        </div>
      </header>
      <main className="w-full flex flex-col">
        <h1 className="text-2xl font-bold mb-6">MINHAS AULAS</h1>
        <div className="w-full flex md:flex-row flex-col items-center text-start md:space-x-4 mb-6">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <label className="block text-sm font-bold mb-2" htmlFor="course">
              SELECIONE O CURSO:
            </label>
            <select id="course" className="w-full p-2  rounded border border-gray-600 text-custom_blue">
              <option>Análise e Desenvolvimento</option>
            </select>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-sm font-bold mb-2" htmlFor="discipline">
              SELECIONE A DISCIPLINA:
            </label>
            <select id="discipline" className="w-full p-2 rounded border border-gray-600 text-custom_blue">
              <option>Engenharia de Software</option>
            </select>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 1, title: 'ENGENHARIA DE REQUISITOS', status: 'CONCLUÍDO', progressColor: 'custom_blue' },
            { id: 2, title: 'QUALIDADE DE SOFTWARE', status: 'EM PROGRESSO', progressColor: 'custom_blue' },
            { id: 3, title: 'SEGURANÇA DE SOFTWARE', status: 'NÃO INICIADO', progressColor: 'custom_blue' },
            { id: 4, title: 'DESENVOLVIMENTO ÁGIL', status: 'NÃO INICIADO', progressColor: 'custom_blue' }
          ].map((lesson) => (
            <div key={lesson.id} className="bg-white p-4 flex flex-col items-center">
             
              <img src={`/${lesson.id}.jpg`} alt={lesson.title} className="w-full h-full object-cover rounded mb-4" />
              <div className="text-lg font-bold mb-2 text-custom_blue">{lesson.title}</div>
              <div className="flex items-center space-x-2">
                <span className={`text-${lesson.progressColor} font-bold`}>
                  {lesson.status}
                </span>
                <span className="text-gray-500">|</span>
                <FontAwesomeIcon icon={faCloudArrowDown} height={20} className='text-custom_blue' />
                <span className="text-custom_blue font-bold">PDF</span>
              </div>
            </div>
          ))}
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
  )
}
