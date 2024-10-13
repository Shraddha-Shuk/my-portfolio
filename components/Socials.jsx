import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Shraddha-Shuk'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/shraddham28'},
    {icon: <FaTwitter />, path: 'https://x.com/Shraddhashuk28'}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials