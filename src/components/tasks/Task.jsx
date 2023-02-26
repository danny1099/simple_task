import { Checkbox } from '@nextui-org/react'
import { ItemLayout, Item, Action } from './styles/task-styled'
import { AiOutlineDelete } from 'react-icons/ai'
import { Separator } from '@/components/separator'
import { deleteTask, completeTask } from '@/services'
import { useState, useEffect } from 'react'
import { Tag } from './Tag'

export function Task({ id, text, completed, category }) {
  const [selected, setSelected] = useState(completed)

  useEffect(() => {
    handleUpdateTask()
  }, [selected])

  const handleDeleteTask = async () => {
    await deleteTask(id)
  }

  const handleUpdateTask = async () => {
    await completeTask(id, selected)
  }

  return (
    <ItemLayout>
      <Item>
        <Checkbox
          className="check-item"
          color="gradient"
          isSelected={selected}
          isRounded
          onChange={setSelected}
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
