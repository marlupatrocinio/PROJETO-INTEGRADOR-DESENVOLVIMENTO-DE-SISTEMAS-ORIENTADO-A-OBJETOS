
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Grades() {
  const courses = [
    "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    // Add more options as needed
  ]

  const grades = [
    { disciplina: "ARQUITETURA DE SOFTWARE", prova: "8,0", pti: "10,0", quiz: "10,0", media: "8,8", resultado: "APR" },
    { disciplina: "ANÁLISE DE SISTEMAS", prova: "8,0", pti: "10,0", quiz: "10,0", media: "8,8", resultado: "APR" },
    { disciplina: "BANCO DE DADOS", prova: "8,0", pti: "10,0", quiz: "10,0", media: "8,8", resultado: "APR" },
    { disciplina: "ENGENHARIA DE SOFTWARE", prova: "8,0", pti: "10,0", quiz: "10,0", media: "8,8", resultado: "APR" },
    { disciplina: "SISTEMAS DISTRIBUÍDOS", prova: "8,0", pti: "10,0", quiz: "10,0", media: "8,8", resultado: "APR" },
    { disciplina: "LINGUAGEM DE SERVIDOR", prova: "8,0", pti: "10,0", quiz: "10,0", media: "8,8", resultado: "APR" },
  ]

  return (
    <div className="bg-custom_blue h-full w-auto p-8 text-white">
      <div className="flex sm:flex-row flex-col justify-between items-center mb-6">
        <div className="flex items-center mb-6">
          <img src="/Logo.webp" alt="ICTA Logo" className="h-auto" />
        </div>
        <div className="flex items-center ps-6">
          <div className="text-right">
            <p className="text-lg font-bold">ALUNO</p>
          </div>
          <FontAwesomeIcon icon={faCircleUser} height={50} className='text-custom_yellow ms-6' />
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">NOTAS</h2>
      </div>

      <div className="mb-8">
        <label htmlFor="course" className="block text-lg mb-2">SELECIONE O CURSO:</label>
        <select id="course" className="bg-gray-700 p-2 rounded-lg text-white w-full max-w-md">
          {courses.map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>
      </div>

      <div>
        {grades.map(({ disciplina, prova, pti, quiz, media, resultado }) => (
          <div key={disciplina} className="bg-gray-700 rounded-lg p-2 flex flex-wrap m-2">
            <div className="w-full md:w-1/6 p-2"><strong>DISCIPLINAS:</strong> {disciplina}</div>
            <div className="w-full md:w-1/6 p-2"><strong>PROVA:</strong> {prova}</div>
            <div className="w-full md:w-1/6 p-2"><strong>DISCIPLINAS:</strong> {disciplina}</div>
            <div className="w-full md:w-1/6 p-2"><strong>PROVA:</strong> {prova}</div>
            <div className="w-full md:w-1/6 p-2"><strong>PTI:</strong> {pti}</div>
            <div className="w-full md:w-1/6 p-2"><strong>QUIZ:</strong> {quiz}</div>
            <div className="w-full md:w-1/6 p-2"><strong>MÉDIA:</strong> {media}</div>
            <div className="w-full md:w-1/6 p-2"><strong>RESULTADO FINAL:</strong> {resultado}</div>
            {/* Add other grade details here */}
          </div>
        ))}
      </div>

      <Link href="/panel" className="flex w-full justify-center sm:justify-end p-6">
        <FontAwesomeIcon icon={faRightFromBracket} style={{ height: '30px' }} className='text-custom_yellow' />
      </Link>
    </div>
  )
}