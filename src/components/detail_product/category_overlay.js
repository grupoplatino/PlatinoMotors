import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
function ProductsByCategoryOverlay() {
    let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    return ( <>
    
    </> );
}

export default ProductsByCategoryOverlay;