import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
export default function Page() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>

      <div className="flex flex-col h-full mt-16">

        <Image className="h-auto max-w-full mb-8" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

        <div className="bg-custom_blue flex items-center justify-center">

          <div className="text-center">
            <div className="flex flex-col justify-around sm:flex-row sm:justify-between items-center sm:items-end">
              <h1 className="text-3xl text-white mb-8">PROVAS</h1>
              <FontAwesomeIcon icon={faCircleUser} className='text-custom_yellow md:h-1/12 md:w-1/12 h-1/6 w-1/6 pb-6' />
            </div>

            <div className="flex flex-wrap justify-center items-center">
              <div className="bg-custom_card rounded-lg p-8 flex-1 m-6">
                <img src="/agendamento.jpg" alt="Agendamento" className="mx-auto mb-4" />
                <h2 className="text-xl text-white">AGENDAMENTO</h2>
              </div>
              <div className="bg-custom_card rounded-lg p-8 flex-1 m-6">
                <img src="realizar_prova.jpg" alt="Realizar Prova" className="mx-auto mb-4" />
                <h2 className="text-xl text-white">REALIZAR PROVA</h2>
              </div>
            </div>

            <Link href="/panel">
          <div className="flex w-full justify-center sm:justify-end p-6">
            <FontAwesomeIcon icon={faRightFromBracket} style={{ height: '30px' }} className='text-custom_yellow' />
          </div>
        </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
