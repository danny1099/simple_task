import { AiOutlineTags } from 'react-icons/ai'
import { Tagged } from './Tagged'
import { Badge } from '@nextui-org/react'

const CATEGORY_TYPES = {
  home: 'error',
  work: 'secondary',
  clothes: 'primary',
  food: 'success',
  trips: 'warning',
  study: 'default'
}

export function Tag({ id, text, ...props }) {
  return (
    <Tagged id={id} {...props}>
      {text ? (
        <Badge
          color={CATEGORY_TYPES[text]}
          variant="flat"
          disableOutline
          className="badge-tag"
        >
          {text}
        </Badge>
      ) : (
        <AiOutlineTags size={20} color="#7a7a7a" />
      )}
    </Tagged>
  )
}
