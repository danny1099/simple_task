import { Topbar } from './components/Topbar'
import { TitleGradient } from '@/components/title/TitleGradient'
import { P } from '@/components/text'
import { Task } from '@/components/tasks/Task'
import { useDispatch, useSelector } from 'react-redux'
import { allTask, getTask } from '@/redux/slices/taskSlice'
import { useState, useMemo, useEffect } from 'react'
import { CreateTask } from './components/CreateTask'
import { Container, Content, Header, TaskContainer } from './styles'
import { convertDocument } from '@/services'
import { db, onSnapshot, query, collection, where } from '@/database/firebase'
import { textSplit } from '@/helpers/text-split'

export default function Dashboard() {
  const [selected, setSelected] = useState(new Set(['pending']))
  const user = useSelector((state) => state.users)
  const tasks = useSelector(getTask)
  const dispatch = useDispatch()

  useEffect(() => {
    const q = query(collection(db, 'tasks'), where('userId', '==', user.uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = convertDocument(snapshot.docs)
      dispatch(allTask(data))
    })

    return () => {
      unsubscribe()
    }
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
            <TitleGradient
              text={`Hi, ${textSplit(user.displayName || user.email)}`}
              size="2rem"
            />
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
