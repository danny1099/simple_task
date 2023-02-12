import { Badge } from '@nextui-org/react'

export function Label({ text, color }) {
  return (
    <Badge color={color} variant="flat" disableOutline>
      {text}
    </Badge>
  )
}
