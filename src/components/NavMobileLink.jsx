

export default function NavMobileLink({linkTo='/about',color1='black',color2='white'}){
    return(
        <Link to='/about'
            style={{ background: colorSwitch ? colorSet.color3 : colorSet.color4}} 
        >
            <Profile2 
                className='nav-icons'
            />
            <h4
                style={{color: colorSwitch ? colorSet.color4 : colorSet.color3}}
            >About</h4>
        </Link>
    )
}