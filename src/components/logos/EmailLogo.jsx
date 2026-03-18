

export default function EmailLogo({color="black", size="100", ...props}){
    return(
        <svg {...props} height={size} viewBox="0 0 165 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M165 115H0V0H165V115ZM85.1426 56.0557L81.4609 58.1016L77.7979 56.0225L15 20.3818V100H150V20.0234L85.1426 56.0557ZM81.5391 40.8975L128.155 15H35.9062L81.5391 40.8975Z" fill={color}/>
        </svg>

    )
}