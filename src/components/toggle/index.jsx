import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/redux/slices/themeSlice'
import { Switch } from '@nextui-org/react'
import { BsSun } from 'react-icons/bs'
import { RiMoonFoggyLine } from 'react-icons/ri'

export function ToggleTheme() {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch()

  const switchTheme = () => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Switch
      checked={theme !== 'light'}
      color="transparen"
      size="md"
      iconOn={<BsSun size={20} color="#22242c" />}
      iconOff={<RiMoonFoggyLine size={20} color="#22242c" />}
      onChange={() => switchTheme()}
    />
  )
}
