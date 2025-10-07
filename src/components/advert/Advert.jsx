import React from 'react'

const Advert = () => {
    return (
        <>
        <div className="px-[8%] lg:px-[12%] explore topic py-10 flex flex-col justify-center items-center">
                <h2 className="text-sm uppercase text-center tracking-widest mb-6 font-bold text-black  ">Explore Trending Topics</h2>

                <div className="flex flex-wrap justify-center gap-4 w[100%] lg:w-[80%]">
                    {/* Each topic items */}
                    <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                        
                        <span className="font-medium text-xl">Technology</span>
                    </div>
                    <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                        
                        <span className="font-medium text-xl">Travel</span>
                    </div>
                    <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                        
                        <span className="font-medium text-xl">Sport</span>
                    </div> <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                        
                        <span className="font-medium text-xl">business</span>
                    </div>
                     <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                    
                        <span className="font-medium text-xl">Management</span>
                    </div> 
                    <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                
                        <span className="font-medium text-xl">Trends</span>
                    </div>
                     <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                        
                        <span className="font-medium text-xl">Startups</span>
                    </div>
                     <div className="topic-box flex items-center gap-2 px-6 py-2 bg-blue-900 border border-gray-700 bg-gray-50-10 hover:bg-black rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
                        <span className="font-medium text-xl">News</span>
                    </div>

                </div>


            </div>


        </>
    )






}; 
export default Advert
