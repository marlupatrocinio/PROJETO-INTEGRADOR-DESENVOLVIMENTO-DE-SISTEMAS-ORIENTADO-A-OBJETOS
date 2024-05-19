import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
export default function Home() {
  return (
    <div className="w-full h-full text-white flex flex-col items-center p-6 sm:p-24">
      <header className="w-full flex sm:flex-row flex-col justify-between items-center py-4">
        <div className="flex items-center space-x-2 mb-4">
          <Image className="h-auto max-w-full flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />
        </div>
        <div className="flex justify-center items-center">
          <span className="font-bold text-lg">ALUNO</span>
          <FontAwesomeIcon icon={faCircleUser} height={50} className='text-custom_yellow ms-6' />
        </div>
      </header>
      <main className="w-full max-w-7xl flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">FATURAS</h1>
        <div className="w-full flex sm:flex-row flex-col sm:space-x-4 space-y-4 mb-6 items-center sm:items-end">
          <div className="w-full sm:w-1/3">
            <label className="block text-sm font-bold mb-2" htmlFor="start-date">
              DE:
            </label>
            <input type="date" id="start-date" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div className="w-full sm:w-1/3">
            <label className="block text-sm font-bold mb-2" htmlFor="end-date">
              A:
            </label>
            <input type="date" id="end-date" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-2 space-y-4 sm:space-y-0 w-full sm:w-auto items-center">
            <button className="bg-yellow-500 p-2 rounded text-black w-full sm:w-auto">
              🔍
            </button>
            <button className="bg-yellow-500 p-2 rounded text-black w-full sm:w-auto">
              ⬇️
            </button>
          </div>
        </div>
        <div>
        {[
          { id: 1, fatura: 'FAT_MAI_24_XXXXX', vencimento: '20/05/2024', pagamento: '05/05/2024', bruto: 'XXX,XX', descontos: '0,00', correcoes: '0,00', pago: 'XXX,XX' },
          { id: 2, fatura: 'FAT_JUN_24_XXXXX', vencimento: '20/06/2024', pagamento: '05/06/2024', bruto: 'XXX,XX', descontos: '0,00', correcoes: '0,00', pago: 'XXX,XX' },
          { id: 3, fatura: 'FAT_JUL_24_XXXXX', vencimento: '20/07/2024', pagamento: '05/07/2024', bruto: 'XXX,XX', descontos: '0,00', correcoes: '0,00', pago: 'XXX,XX' },
        ].map(({ fatura, vencimento, pagamento, bruto, descontos, correcoes, pago }) => (
          <div key={'s'} className="bg-gray-700 rounded-lg p-2 flex flex-wrap m-2">
            <div className="w-full md:w-1/6 p-2"><strong>FATURA:</strong> {fatura}</div>
            <div className="w-full md:w-1/6 p-2"><strong>DATA DE VENCIMENTO:</strong> {vencimento}</div>
            <div className="w-full md:w-1/6 p-2"><strong>DATA DE PAGAMENTO:</strong> {pagamento}</div>
            <div className="w-full md:w-1/6 p-2"><strong>VALOR BRUTO:</strong> {bruto}</div>
            <div className="w-full md:w-1/6 p-2"><strong>DESCONTOS:</strong> {descontos}</div>
            <div className="w-full md:w-1/6 p-2"><strong>CORREÇÕES:</strong> {correcoes}</div>
            <div className="w-full md:w-1/6 p-2"><strong>VALOR PAGO:</strong> {pago}</div>
          </div>
        ))}
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
  )
}

