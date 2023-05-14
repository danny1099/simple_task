import { IconContainer, IconError } from '@/components/icons'
import { FcCheckmark } from 'react-icons/fc'
import { MdOutlineRefresh } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'

export const msgStack = {
  taskCreated: {
    message: 'The task was created successfully',
    icon: (
      <IconContainer color="default">
        <FcCheckmark size={20} />
      </IconContainer>
    )
  },
  deleteTask: {
    message: 'The task was deleted successfully',
    icon: (
      <IconContainer color="default">
        <AiOutlineDelete size={22} />
      </IconContainer>
    )
  },
  updateTask: {
    message: 'The task was update successfully',
    icon: (
      <IconContainer color="default">
        <MdOutlineRefresh size={22} />
      </IconContainer>
    )
  },
  error: {
    message: 'oops! something went wrong',
    icon: (
      <IconContainer color="error">
        <IconError size={26} />
      </IconContainer>
    )
  }
}
