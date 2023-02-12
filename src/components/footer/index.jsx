import { Wrapper } from './styles/footer-styled'
import { DiGithubBadge } from 'react-icons/di'

export default function Footer() {
  return (
    <Wrapper>
      <a target="https://github.com/danny1099" rel="noopener noreferrer">
        <DiGithubBadge size={20} />
        <span>By DALE • {new Date().getFullYear()}</span>
      </a>
    </Wrapper>
  )
}
