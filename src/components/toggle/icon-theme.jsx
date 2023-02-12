import { BsSun, BsMoonStars } from 'react-icons/bs'

export const IconTheme = ({ theme, ...props }) => {
  if (theme === 'light') {
    return <BsMoonStars {...props} />
  }

  return <BsSun {...props} />
}
