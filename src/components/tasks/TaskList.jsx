import { Wrapper } from './styles/wrapper-styled'
import Task from './Task'

export function TaskList({ allTask }) {
  return (
    <Wrapper>
      {allTask?.map(({ id, title, completed }) => {
        return <Task key={id} text={title} completed={completed} />
      })}
    </Wrapper>
  )
}
