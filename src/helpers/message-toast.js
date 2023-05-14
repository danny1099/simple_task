import { toastConfig, msgStack } from '@/config'
import toast from 'react-hot-toast'

export const handleToastMessage = (msg) => {
  toast(msgStack[msg].message, { ...toastConfig, icon: msgStack[msg].icon })
}
