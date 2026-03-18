
import '../styles/footer.css'
import WellLifeLogo2 from "./icons/WellLifeLogo2"


export default function Footer({colorPrimary="#E5F0F6", colorSecondary="#D9966D"}){
    return(
        <footer>
            <WellLifeLogo2 />
            <div className="break"/>
            <p style={{color: colorPrimary}}>website created by <a style={{color: colorSecondary}} href='https://www.donovanheynen.com/'>Donovan Heynen</a></p>
        </footer>
    )
}