import { handleToastMessage } from '@/helpers'
import { Checkbox } from '@nextui-org/react'
import { ItemLayout, Item, Action } from './styles/task-styled'
import { AiOutlineDelete } from 'react-icons/ai'
import { Separator } from '@/components/separator'
import { deleteTask, completeTask } from '@/services'
import { useState, useEffect, useRef } from 'react'
import { Tag } from './Tag'

const variants = {
  hidden: { opacity: 0 },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: { delay, duration: 1 }
  })
}

export function Task({ id, text, completed, category, index }) {
  const [firstTime, setFirstTime] = useState(true)
  const [selected, setSelected] = useState(completed)
  const refTask = useRef()

  useEffect(() => {
    setFirstTime(false)

    return () => setFirstTime(true)
  }, [])

  useEffect(() => {
    handleUpdateTask()
  }, [selected])

  const handleDeleteTask = async () => {
    await deleteTask(id).then(() => {
      handleToastMessage('deleteTask')
    })
  }

  const handleUpdateTask = async () => {
    await completeTask(id, selected).then(() => {
      !firstTime && handleToastMessage('updateTask')
    })
  }
  return (
    <ItemLayout
      custom={{ delay: (index + 1) * 0.1 }}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layoutId={id}
    >
      <Item ref={refTask}>
        <Checkbox
          className="check-item"
          color="gradient"
          isSelected={selected}
          isRounded
          onChange={setSelected}
          aria-labelledby="task item"
        >
          {text}
        </Checkbox>
      </Item>

      <Action>
        <Tag text={category} id={id} />
        <Separator />
        <AiOutlineDelete
          size={20}
          color="#ff726f"
          cursor="pointer"
          onClick={() => handleDeleteTask()}
        />
      </Action>
    </ItemLayout>
  )
}
