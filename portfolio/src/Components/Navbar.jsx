
import { Switch} from '@chakra-ui/react'
import { useContext } from 'react'
import { Themecontext } from '../Contextprovider/Themecontext'



export const Navbar = () => {
  const{mode,setmode}=useContext(Themecontext)

  function click(){
      setmode(!mode)
      

  }
  return (
    <>
    <div className="navbarMain">
    <ul className='navbar' >
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#main-proj">Projects</a></li>
        <li><a target='_blank' href="/TapasKumarPalai-FullStackWebDeveloper.pdf">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div>
    <Switch  onChange={click} />
    </div>
    </div>
    </>
  )
}
