import React, {useState} from 'react';

function CompareSpecs(props) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    return (
        <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='text-center font-pop pb-10 pt-20 text-3xl font-bold text-black'>
                <span>Especificaciones y Comparativa</span>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div className=' bg-background rounded-xl'>
                    <span>Compare hasta 3 modelos distintos</span>
                </div>
                <div className=' bg-background font-pop text-xl font-bold pb-2 text-center rounded-xl'>
                    <img className=' mx-auto h-40 my-5 rounded-md' alt={props.product.name} src={props.product.img} />
                    <span>{props.product.name}</span>
                </div>
                <div className='bg-gray-100 content-center rounded-xl'>
                    <button
                        type="button"
                        className="relative block w-full h-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <p className="flex items-center justify-around">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="block text-sm font-medium text-gray-900">Añadir modelo</span>
                        </p>

                    </button>
                </div>
                <div className=' bg-gray-100 rounded-xl'>
                    <button
                        onClick={openModal}
                        type="button"
                        className="relative block w-full h-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="mt-2 block text-sm font-medium text-gray-900">Añadir modelo</span>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-2 gap-4'>
                <div className='py-2 px-5 bg-background rounded-xl'>
                    {
                        props.product.dataSheet.map((item, index) => (
                            <div key={index} className="rounded my-1 border-b pb-2">
                                <p className="font-pop font-bold text-black text-lg">{item.title}</p>
                            </div>
                        ))
                    }

                </div>
                <div className='py-2 px-5 bg-background  rounded-xl'>
                    {
                        props.product.dataSheet.map((item, index) => (
                            <div key={index} className="rounded my-1 border-b pb-2">
                                <p className="font-pop  text-black text-lg">{item.value}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='p-10 bg-background rounded-xl'>
                    {

                    }
                </div>
                <div className='p-10 bg-background rounded-xl'>
                </div>
            </div>

        </div>
        </div>
    );
};




export default CompareSpecs;