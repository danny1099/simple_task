import { Wrapper } from './styles/task-header'
import { MdFilterListAlt } from 'react-icons/md'
import { P } from '@/components/text'
import { TitleGradient } from '@/components/title/TitleGradient'

export function TaskHeader({ text }) {
  return (
    <Wrapper>
      <div>
        <TitleGradient text={text} size="3rem" />
        <P margin=".5rem 0">Estas son tus tareas pendientes para hoy</P>
      </div>

      <MdFilterListAlt size={20} color="#7a7a7a" />
    </Wrapper>
  )
}
