import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/redux/slices/themeSlice'
import { Icon, IconTheme } from './icon-theme'

export function ToggleTheme() {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch()

  const switchTheme = () => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <IconTheme>
      <Icon
        theme={theme}
        size={20}
        cursor="pointer"
        onClick={() => switchTheme()}
      />
    </IconTheme>
  )
}
