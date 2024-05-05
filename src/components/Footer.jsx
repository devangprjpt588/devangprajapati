import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full h-20 p-4 bg-gradient-to-t from-white from-50%'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center h-16'>
                <div className='border-t border-sky-600 w-full pt-1'>
                    <div className='flex flex-row justify-between'>
                        <div>
                            Email: <a href='mailto:devangprjpt@gmail.com' className='cursor-pointer'>devangprjpt@gmail.com</a>
                        </div>
                        <div>
                            Mobile: <a href='tel:+918390122902' className='cursor-pointer'>+91 8390122902</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer