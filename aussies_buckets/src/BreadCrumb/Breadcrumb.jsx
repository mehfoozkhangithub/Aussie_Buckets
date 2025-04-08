import React from 'react'
import {Link, useLocation } from 'react-router-dom'

export const Breadcrumb = () => {

  const location = useLocation();
  console.log(location, "this is a location");
  let currentLink = ""

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
    currentLink += `/${crumb}`
    return(
      
      <div className="crumb mt-11 ml-33 " key={crumb} >
        <Link to='/' className='text-[16px]'>Home <i class="fa-solid fa-angle-right ml-2"></i> </Link>
        <Link to={currentLink} className='font-semibold capitalize'>{crumb}</Link>
{/* some */}
      </div>
    
      
    )
  })

  console.log(crumbs, "this is crumbs");
  
  
  return (
    <div>
      {crumbs}
    </div>
  )
}
