import { Checkbox } from '@nextui-org/react'
import { TextInput } from '@/components/inputs'
import { ItemLayout, Item, Action } from './styles/task-styled'
import { BsCalendar4Week } from 'react-icons/bs'
import { Label } from '@/components/labels'

export default function Task({ text, completed }) {
  return (
    <ItemLayout>
      <Item>
        <Checkbox color="success" isSelected={completed} aria-label />
        <TextInput
          initialValue={text}
          placeholder="Enter a description of your task..."
          aria-label
          width="100%"
        />

        {/* Actions to task  */}
        <Action>
          <BsCalendar4Week size={20} color="#7a7a7a" />
          <Label text="house" color="error" aria-label />
        </Action>
      </Item>
    </ItemLayout>
  )
}
