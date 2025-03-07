import { Link } from 'react-router-dom'
import Pokeball from '../../../pokeball.svg'
import * as motion from 'motion/react-client'
import { Button } from '../button'
const Navbar = () =>{
    
    const navbarcontent=[
        {name:'Home',url:'/'},
        {name:'Collection',url:'/collection'},
        {name:'My Cards',url:'/inventory'},
        {name:'Buy Points',url:'/buy'},
    ]
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


          <Link to={'/sign-up'}>
          <Button
            
            >
            Sign Up
            </Button>
          </Link>
        </nav>
    )
}

export default Navbar