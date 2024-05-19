import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faCamera, faCirclePlus, faLock, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {

    const account_name = "Júlio Roberto"
    const matricula_number = "*******";

    const items = [
        { src: "/gold.png", label: "Notas", link: '/results' },
        { src: "/mail.png", label: "Recados", link: '/messages' },
        { src: "/coin.png", label: "Faturas", link: '/invoice' },
        { src: "/book.png", label: "Minhas aulas", link: '/classes' },
        { src: "/arrow.png", label: "Provas", link: '/school_test' },
        { src: "/plus.png", label: "Adicionar cursos", link: '/record' },
    ];

    return (

        <main className='h-full w-full space-y-8 flex flex-col justify-around items-center p-0 sm:p-6 lg:p-44'>

            <div className='w-full h-auto space-y-8 flex flex-col sm:flex-row justify-center items-center'>

                <div className='w-full h-full flex flex-col space-y-8 justify-center items-center'>

                    <div className='w-full h-auto flex md:flex-row flex-col justify-between items-center'>

                        <Image className="h-auto max-w-full flex mb-0 p-6" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

                        <div className='h-auto justify-start items-center flex flex-col sm:flex-row'>
                            <div className='h-auto w-auto justify-center items-end flex flex-col m-4'>
                                <p className='text-white text-2xl font-bold'>{account_name} -  Aluno</p>
                                <p className='text-white text-md font-medium'>Matrícula: {matricula_number}</p>
                            </div>
                            <FontAwesomeIcon icon={faCircleUser} height={100} className='text-custom_yellow' />
                            <FontAwesomeIcon icon={faCamera} height={50} className='text-white m-4' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mb-8">
                        {items.map(({ src, label, link }) => (
                            <Link key={label} href={link}>
                                <div  className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
                                    <img src={src} alt={label} className="h-16 mb-4" />
                                    <p className='text-white font-bold'>{label}</p>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>

            </div>

            <div className="flex space-x-20 justify-center items-center">
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ height: '30px' }} className='text-custom_yellow' />
                    <p className='text-white text-md text-center'>Editar Perfil</p>
                </div>
                <Link href="/change_password">
                    <div className='flex flex-col'>
                        <FontAwesomeIcon icon={faLock} style={{ height: '30px' }} className='text-custom_yellow' />
                        <p className='text-white text-md text-center'>Alterar Senha</p>
                    </div>
                </Link>
                <Link href="/">
                    <div className='flex flex-col'>
                        <FontAwesomeIcon icon={faRightFromBracket} style={{ height: '30px' }} className='text-custom_yellow' />
                        <p className='text-white text-md text-center'>Sair</p>
                    </div>
                </Link>

            </div>




        </main>


    )
}

export default page