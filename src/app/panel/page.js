import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faCamera, faCirclePlus, faLock, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {

    const account_name = "Júlio Roberto"
    const matricula_number = "*******";

    return (

        <main className='h-auto space-y-8 flex flex-col justify-around items-center p-0 sm:p-6 lg:p-44'>

            <div className='w-full h-auto space-y-8 flex flex-col sm:flex-row justify-center items-center'>

                <div className='w-full h-full flex flex-col space-y-8 justify-start items-start'>

                    <Image className="h-auto max-w-full flex mb-0" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

                    <div className='w-full h-auto flex justify-center items-center'>

                        <div className='h-full justify-center items-center flex flex-col'>
                            <FontAwesomeIcon icon={faCircleUser} className='text-custom_yellow h-5/6 w-5/6' />
                            <FontAwesomeIcon icon={faCamera} className='text-white h-1/3 w-1/3 mt-4' />
                        </div>
                        <div className='h-full w-full justify-start ms-12 mt-12 items-start flex flex-col'>
                            <p className='text-white text-2xl font-bold'>{account_name} -  Professor</p>
                            <p className='text-white text-md font-medium'>Matrícula: {matricula_number}</p>
                        </div>
                    </div>

                    <div className='h-auto w-full justify-center sm:justify-start items-center sm:p-0 flex'>
                        <FontAwesomeIcon icon={faCirclePlus} style={{ height: '50px', color: 'gray' }} />
                        <p className='text-white text-md font-medium ms-4'>Adicionar disciplina</p>
                    </div>
                </div>

                <div className='flex flex-col space-y-4 w-full p-0 sm:p-24'>
                    <button class="bg-custom_yellow hover:bg-blue-700 text-custom_blue font-bold py-2 px-4 rounded">
                        DISCIPLINAS / ALUNOS
                    </button>
                    <button class="bg-custom_yellow hover:bg-blue-700 text-custom_blue font-bold py-2 px-4 rounded">
                        SOLICITAÇÕES
                    </button>
                    <button class="bg-custom_yellow hover:bg-blue-700 text-custom_blue font-bold py-2 px-4 rounded">
                        FINANCEIRO
                    </button>
                    <button class="bg-custom_yellow hover:bg-blue-700 text-custom_blue font-bold py-2 px-4 rounded">
                        AGENDA
                    </button>
                </div>




            </div>

            <div className="flex space-x-20 justify-center items-center">
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faPenToSquare}  style={{height: '30px'}} className='text-custom_yellow'/>
                    <p className='text-white text-md text-center'>Editar Perfil</p>
                </div>
                <Link href="/change_password">
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faLock} style={{height: '30px'}} className='text-custom_yellow'/>
                    <p className='text-white text-md text-center'>Alterar Senha</p>
                </div>
                </Link>
                <Link href="/">
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{height: '30px'}} className='text-custom_yellow'/>
                    <p className='text-white text-md text-center'>Sair</p>
                </div>
                </Link>

            </div>




        </main>


    )
}

export default page