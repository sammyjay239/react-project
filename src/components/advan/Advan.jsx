import React from 'react'
import image1 from '../../assets/samdev2.png';

const Advan = () => {
    return (
        <div>
            <div className="newsletter py-20 flex items-center justify-center flex-col">
                <h2 className='text-5xl mb-3 font-bricolage text-blue-900'>
                    subscribe to our Newsletter
                </h2>
                <p className="text-center mb-6 text-blue-500">
                    subscibe to our email newsletter to get the latest post delivered
                </p>
                <form className="w-[80%] md:-[45%] flex items-center bg-blue-900 rounded-xl p-2 shadow-inner">
                    <input
                        type="email" placeholder='enter your email' className='flex-1 bg-transparent text-black placeholder:bg-white px-4 py-2 outline-none ' />
                    <button type='submit' className='font-semibold text-white bg-blue-900 hover:bg-blue-300 transition rounded py-3 px-4'>
                        subscribe
                    </button>
                </form>
            </div>
            <div className="footer pt-[50px] border-t border-blue-900">
                <div className="px-[8%] lg:px-[12%] py-10">
                    <div className="flex flex-wrap pb-7">
                        <div className="w-full lg:w-2/3">
                            <div className="flex items-center space-x-2 ">
                                
                               <img src={image1} alt="" className='w-20 rounded-full'/>
                            </div>
                            <p className="mt-4 mb-5 text-black">welcome to ultimate source for search for fresh perspectives! Explore <br />curated to enlighten, entertain and engage global <br />readers</p>
                            <div className="social-icons flex gap-4 md:mb-10 text-black">
                                <i className="bi bi-twitter  hover:text-blue-400 cursor-pointer transition text-xl="></i>
                                <i className="bi bi-instagram hover:text-red-400 cursor-pointer transition text-xl="></i>
                                <i className="bi bi-facebook hover:text-blue-400 cursor-pointer transition text-xl="></i>
                                <i className="bi bi-linkedin  hover:text-orange-400 cursor-pointer transition text-xl="></i>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 grid grid-cols-1 md:grid-cols-3 mt-5 lg:mt-0 lg:grid-col-3 gap-6 text-black">
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-3">Recent Post</h4>

                                <ul className="space-y-2">
                                    <li><a href="#" className='hover:text-blue-600 transition'>Blog setup</a></li>
                                    <li><a href="#" className='hover:text-blue-600 transition'>contenet plan</a></li>
                                    <li><a href="#" className='hover:text-blue-600 transition'>writing Tips</a></li>
                                    <li><a href="#" className='hover:text-blue-600 transition'>Feature posts</a></li>
                                    <li><a href="#" className='hover:text-blue-600 transition'>Blog design</a></li>
                                </ul>
                            </div> 
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-3">Categories</h4>

                                <ul className="space-y-2">
                                    <li><a href="#" className='hover:text-green-600 transition'>Technology</a></li>
                                    <li><a href="#" className='hover:text-green-600 transition'>Travel</a></li>
                                    <li><a href="#" className='hover:text-green-600 transition'>Sport</a></li>
                                    <li><a href="#" className='hover:text-green-600 transition'>Business</a></li>
                                </ul>
                            </div> <div>
                                <h4 className="text-lg font-bold uppercase mb-3">Quick Link</h4>

                                <ul className="space-y-2">
                                    <li><a href="#" className='hover:text-pink-800 transition'>About</a></li>
                                    <li><a href="#" className='hover:text-pink-800 transition'>Blogs</a></li>
                                    <li><a href="#" className='hover:text-pink-800 transition'>Details</a></li>
                                    <li><a href="#" className='hover:text-pink-800 transition'>History</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="text-center border-t border-[gray] p-5 text-black">&copy; copyright 2025. All Right Reserved by <a href="" className='text-blue-600 font-bold'>Samdev</a></p>
                </div>
            </div>
        </div>

    )
}

export default Advan
