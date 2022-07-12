
import React from 'react';

function CompareSpecs(props) {

    return (
        <div className='container mx-auto'>
            <div className='text-center font-pop pb-10 pt-20 text-3xl font-bold  text-black'>
                <span>Especificaciones y Comparativa</span>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div className=' bg-success rounded-xl'>
                    <span>Compare hasta 3 modelos distintos</span>
                </div>
                <div className=' bg-background font-pop text-xl font-bold pb-2 text-center rounded-xl'>
                    <img className='h-48 mx-auto my-5 rounded-md' src={props.product.img} />
                    <span>{props.product.name}</span>
                </div>
                <div className='bg-gray-100  rounded-xl'>
                    <button
                        type="button"
                        className="relative block w-full h-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        <span className="mt-2 block text-sm font-medium text-gray-900">Create a new database</span>
                    </button>
                </div>
                <div className=' bg-success rounded-xl'>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-5 gap-4'>
                <div className='p-10 bg-success rounded-xl'>
                </div>
                <div className='p-10 bg-success rounded-xl'>
                </div>
                <div className='p-10 bg-success rounded-xl'>
                </div>
                <div className='p-10 bg-success rounded-xl'>
                </div>
            </div>

        </div>
    );
};

export default CompareSpecs;