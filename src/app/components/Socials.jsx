import { icons } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"


const socials = [
    {icons: <FaGithub />, path: ''},
    {icons: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/mjesri/'},
    {icons: <FaYoutube />, path: ''},
    {icons: <FaTwitter />, path: ''},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social,index) => {
            return <Link key={index} href={social.path} className={iconStyles}>
                {social.icons}
            </Link>
        })}
    </div>
  )
}

export default Socials