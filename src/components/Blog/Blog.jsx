import React, { useEffect, useState } from 'react'

const Blog = () => {
  return (
    <div>
       <ul className="hidden nav-menu lg:flex items-center space-x-6 text-sm font-medium text black dark:text-white">
        <li className="hover:text-yellow-400 text-lg cursor-pointer"><Link to=''><i className="bi bi-house-door-fill mr-1">Home</i></Link></li>
        <li className="hover:text-yellow-400 text-lg cursor-pointer"><i className="bi bi-list-ul mr-1">categories</i></li>
       
      </ul>
    </div>
  )
}

export default Blog
