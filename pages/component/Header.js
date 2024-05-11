import { useSession } from 'next-auth/react';
import React from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const { data: session } = useSession()
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const active = 'text-green-600 transition hover:text-green-500/75 p-3 rounded-md bg-gray-200'
  const inActive = 'text-gray-500 transition hover:text-gray-500/75 p-3'
  if(session) {
    console.log(session);
    return (
      
      <>
   
         <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">Admin</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Dashboard</a>
          </li>
          <li className="navbar-item">
            <a href="/Product" className="navbar-link">Products</a>
          </li>
          <li className="navbar-item">
            <a href="/pages/api/categories" className="navbar-link">Categories</a>
          </li>
          <li>
                    <Link
                      className={pathname === '/orders' ? active : inActive}
                      href="/orders"
                    >
                      Orders
                    </Link>
                  </li>

          <li className="navbar-item">
            <a href="/settings" className="navbar-link">Settings</a>
          </li>
                  <li className="w-10 h-10">
                     <img class=" rounded-full object-contain object-center" src={session.user.image} alt={session.user.email} width={40} height={40} />
                  </li>
        </ul>
      </nav>
      <style jsx>{`
          
            .navbar{
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              background-color: #007bff;
              padding: 1rem;
            }
            
            .navbar-brand {
              display: flex;
              align-items: center;
            }
            
            .navbar-logo {
              color: #fff;
              font-size: 1.5rem;
              font-weight: bold;
            }
            
            .navbar-menu {
              display: flex;
              list-style-type: none;
              margin: 0;
              padding: 0;
            }
            
            .navbar-item {
              margin: 0 0.5rem;
            }
            
            .navbar-link {
              display: block;
              color: #fff;
              text-decoration: none;
              padding: 0.5rem;
            }
            
          
  
  
            `}</style>
            
      </>
  
    );
  }
  }

