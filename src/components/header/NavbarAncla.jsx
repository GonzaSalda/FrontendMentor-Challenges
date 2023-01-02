
const NavbarAncla = ({text}) => {
  return (
    <>
    
          <a className="text-gray-400 font-bold" href="#">
            <span className="peer">{text}</span>
            <span className="block h-1 w-full scale-x-0 transition-all duration-500 peer-hover:scale-x-100 peer-hover:bg-gray-400"></span>
          </a>


    </>
  )
}

export default NavbarAncla