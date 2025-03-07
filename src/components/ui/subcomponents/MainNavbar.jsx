import { Link } from 'react-router-dom'
import Pokeball from '../../../pokeball.svg'
import * as motion from 'motion/react-client'
import { Button } from '../button'
import { ChevronRight, ShoppingCart, Star, Shield, TrendingUp, Search, Menu } from "lucide-react"
import { useState,useEffect } from 'react'
import { Input } from '../input'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from '../alert-dialog'
const Navbar = () =>{
    
    const navbarcontent=[
        {name:'Home',url:'/'},
        {name:'Collection',url:'/collection'},
        {name:'My Cards',url:'/inventory'},
        {name:'Buy Points',url:'/buy-packs'},
    ]
    










    const [search,setSearch] = useState(false)

    const handleSearch = () => {
      setSearch(prev => !prev)
    }
    return(
        <nav className="flex items-center justify-between mx-auto shadow-md bg-red-400 text-white p-4">
            <div className="mx-auto">
                <motion.div className='mx-auto inline-flex gap-4 items-center'
                
                
                
                
                
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                >
                <h1 className='text-4xl text-gray-500 font-bold'>Poke<span className=''>D</span>ex</h1>
                <img className='w-10' src={Pokeball} width={125} height={40} alt='logo' />
                </motion.div>
            </div>
            <ul className='hidden sm:inline-flex mx-auto gap-4'>




            {navbarcontent.map((i,x)=>(
                <li key={x} className='transition duration-500 hover:bg-white hover:text-red-500 p-2 rounded'>
                    


                    <Link to={i.url}>{i.name}</Link>
                    </li>
            ))}
            </ul>

         <div className='mx-auto inline-flex gap-4'>
          <AlertDialog>
            <AlertDialogTrigger>
         <Button variant="ghost" size="icon" className="hidden md:flex" onClick={handleSearch}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <div className=''>
              <AlertDialogHeader className={'mb-4'}>
                Anything you want to search?
              </AlertDialogHeader>
            <Input type={'search'} className={'w-full mb-4'}/>
            <Button type='button' className={'w-full mb-4'}>
              Search
            </Button>
            </div>
            </AlertDialogContent>
            </AlertDialog>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
         <Link to={'/sign-in'}>
          <Button
            
            >
         Sign In
            </Button>
          </Link>
          <Link to={'/sign-up'}>
          <Button
            
            >
            Sign Up
            </Button>
          </Link>
         </div>
        
        </nav>
    )
}

export default Navbar