import { Topbar } from './components/Topbar'
import { TitleGradient } from '@/components/title/TitleGradient'
import { P } from '@/components/text'
import { Task } from '@/components/tasks/Task'
import { useDispatch, useSelector } from 'react-redux'
import { getTask, getAllTasks } from '@/redux/slices/taskSlice'
import { useState, useMemo, useEffect } from 'react'
import { CreateTask } from './components/CreateTask'
import { Container, Content, Header, TaskContainer } from './styles'

export default function Dashboard() {
  const [selected, setSelected] = useState(new Set(['pending']))
  const user = useSelector((state) => state.users)
  const tasks = useSelector(getTask)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTasks())
  }, [])

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  )

  return (
    <Container>
      <Topbar user={user} showTittle />

      <Content>
        <Header>
          <div className="header-title">
            <TitleGradient text="Hi, Danny" size="2rem" />
            <P margin="0 0 5px 0">
              These are all the tasks found with the filter
              <strong> {selectedValue} </strong>
            </P>
          </div>

          <CreateTask user={user} selected={selected} filtered={setSelected} />
        </Header>

        <TaskContainer>
          {tasks
            ?.filter((item) => {
              if (selectedValue === 'all') return true
              return selectedValue === 'pending'
                ? item.completed === false
                : item.completed === true
            })
            ?.map(({ id, title, completed, category }) => {
              return (
                <Task
                  key={id}
                  id={id}
                  text={title}
                  completed={completed}
                  category={category}
                />
              )
            })
            .reverse()}
        </TaskContainer>
      </Content>
    </Container>
  )
}
