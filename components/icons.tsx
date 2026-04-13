import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function GithubIcon({ size = 24 }) {
    return <FontAwesomeIcon icon={faGithub} size={size > 20 ? "lg" : "sm"} />;
}

export function LinkedinIcon({ size = 24 }) {
    return <FontAwesomeIcon icon={faLinkedin} size={size > 20 ? "lg" : "sm"} />;
}