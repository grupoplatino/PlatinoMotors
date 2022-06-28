import { EmailBlackIcon, WhatsappBlackIcon, FacebookBlackIcon, InstagramBlackIcon, LinkedinBlackIcon } from '../../assets/index'
function ContactUs() {
    return (
        <div className="bg-otherLight-50 ">
            <div className="container mx-auto px-2 sm:px-0 py-5 md:py-16">
                <div className="flex justify-center sm:justify-start">
                    <div>
                        <p className="text-3xl text-black font-bold font-pop mb-2 md:mb-5">Contáctanos</p>
                    </div>
                </div>
                <form>
                    <div className="grid grid-cols-1 gap-1 md:gap-5 mb-0 sm:grid-cols-2">
                        <div className="wrap  mb-0">
                            <input type='text' className=" border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="Nombres"></input></div>
                        <div className="wrap mb-1 sm:mb-0"><input type='text' className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block w-full pl-2 p-2.5 " placeholder="Apellidos"></input></div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:gap-5 sm:grid-cols-2">
                        <div className="wrap  mb-1 sm:mb-0">
                            <input type='text' className="  border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop  " placeholder="Correo Electrónico"></input>
                        </div>
                        <div className="wrap mb-1 sm:mb-0">
                            <input type='number' className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block w-full pl-2 p-2.5 " placeholder="Telefono"></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="wrap  mb-1 sm:mb-0">
                            <input type='text' className=" border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="Escribe tu mensaje aqui"></input>

                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-2 md:mt-5">
                        <button className="text-white font-pop text-xs bg-gradient-to-r rounded-3xl pr-6 pl-6 py-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium px-5  text-center mr-2 mb-2">Enviar Mensaje</button>
                    </div>
                </form>
                <div className="flex mt-2 md:mt-5 flex-wrap justify-center md:justify-start">
                    <div className="mr-2 mt-1">
                        <p className="font-pop text-sm font-semibold text-black ">o puedes contactarnos por</p>
                    </div>
                    <div className='grid grid-cols-5 gap-2'>
                        <div className='border border-secondary rounded-full w-7 p-1'>
                            <a href='mailto:havila@platino.hn' target="_blank"  rel="noreferrer" >
                                <img className='h-4' src={EmailBlackIcon} alt="correo" /> </a>
                        </div>
                        <div className='border border-secondary  rounded-full p-1'>
                            <a href='https://google.com' target="_blank"  rel="noreferrer" >
                                <img className='h-4' src={WhatsappBlackIcon} alt="whatsapp" /> </a>
                        </div>
                        <div className='border border-secondary rounded-full p-1'>
                            <a href='https://www.facebook.com/platinomotors/' target="_blank"  rel="noreferrer" >
                                <img className='h-4' src={FacebookBlackIcon} alt="facebook" /> </a>
                        </div>
                        <div className='border border-secondary rounded-full p-1'>
                            <a href='https://www.instagram.com/platinomotors/?hl=es' target="_blank"  rel="noreferrer" >
                                <img className='h-4' src={InstagramBlackIcon} alt="instagram" /> </a>
                        </div>
                        <div className='border border-secondary rounded-full p-1 '>
                            <a href='https://hn.linkedin.com/company/grupo-empresarial-platino-hn' target="_blank"  rel="noreferrer" >
                                <img className='h-4' src={LinkedinBlackIcon} alt="linkedin" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default ContactUs;