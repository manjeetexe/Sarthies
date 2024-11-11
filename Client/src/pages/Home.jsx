import React from 'react'

const Home = () => {
  return (
    <>
        <section className='flex flex-col gap-3 items-center mt-24 px-5 overflow-hidden'>
            <div className='flex justify-between w-full  items-center'>
                <h1 className='text-2xl font-semibold'>Question Banks</h1>
                <a className='text-blue-600 text-lg font-semibold' href="#">View all</a>
            </div>
            <div className="flex flex-col gap-3  justify-center p-3 w-full overflow-x-auto border border-black border-dashed rounded-xl">
                <div className="flex space-x-4 w-max">
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                </div>
                <div className="flex space-x-4 w-max">
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                </div>
                <div className="flex space-x-4 w-max">
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                    <div className="h-20 w-28 bg-red-400 rounded-md"></div>
                </div>
            </div>

            <div className='h-24 w-[90vw] mt-5 rounded-xl border-2 border-black bg-red-500'>
            </div>

            <div className='h-24 w-[90vw] mt-2 mb-5 rounded-xl border-2 border-black bg-red-500'>
            </div>

            
            <div className='w-full'>
                <div className='flex justify-between w-full px-2'>
                    <h1 className='text-2xl font-semibold'>Formula Cards</h1>
                    <h1 className='text-xl text-blue-500 font-semibold'>view all</h1>
                </div>
                <div className='px-2 mt-3'>
                    <div className='flex space-x-6  text-xl font-medium'>
                        <h1 className='border-b-2 border-red-400'>Physics</h1>
                        <h1>chemistry</h1>
                        <h1>Maths</h1>
                    </div>
                    <div className='overflow-x-auto py-2 mt-2 px-1'>
                        <div className='flex space-x-4  w-max'>
                            <div className='h-40 w-28 bg-blue-500 rounded-xl'></div>
                            <div className='h-40 w-28 bg-blue-500 rounded-xl'></div>
                            <div className='h-40 w-28 bg-blue-500 rounded-xl'></div>
                            <div className='h-40 w-28 bg-blue-500 rounded-xl'></div>
                            <div className='h-40 w-28 bg-blue-500 rounded-xl'></div>
                            <div className='h-40 w-28 bg-blue-500 rounded-xl'></div>
                            


                        </div>
                    </div>

                </div>
            </div>
            <div className='border-t-2 border-gray-300 w-full mt-5 pt-3'>
                <h1 className='text-xl font-medium text-gray-800'>Social Support</h1>
                <p className='text-gray-600 mt-1'>Need help? Connect with others for support and collaboration.</p>
            </div>


            <div className='h-20'></div>
        </section>

    </>
  )
}

export default Home