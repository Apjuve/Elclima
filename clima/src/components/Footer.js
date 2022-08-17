import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';



const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-content'>
            <div className="links">
            <a href="https://github.com/Apjuve"><RiGithubFill /></a>
            <a href="https://github.com/Apjuve/Apjuve-ReactPort"><BsFillPersonFill /></a>
            </div>
            </div>
        </div>
    )
}

export default Footer