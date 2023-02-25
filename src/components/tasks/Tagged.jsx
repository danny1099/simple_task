import { Trigger, Menu, Item } from '@/components/dropdown/Menu'
import { categoryTask } from '@/services'
import { Dropdown } from '@nextui-org/react'
import { useState, useMemo, useEffect } from 'react'
import { getAllTasks } from '@/redux/slices/taskSlice'
import { useDispatch } from 'react-redux'

const menuItems = [
  {
    key: 'home',
    name: 'home',
    color: 'error'
  },
  {
    key: 'work',
    name: 'work',
    color: 'secondary'
  },
  {
    key: 'clothes',
    name: 'clothes',
    color: 'primary'
  },
  {
    key: 'food',
    name: 'food',
    color: 'success'
  },
  {
    key: 'trips',
    name: 'trips',
    color: 'warning'
  },
  {
    key: 'study',
    name: 'study',
    color: 'default'
  }
]

export function Tagged({ id, refresh, children }) {
  const [selected, setSelected] = useState(new Set(['']))
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedValue !== '') handleUpdateTask()
  }, [selected])

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  )

  const handleUpdateTask = async () => {
    await categoryTask(id, selectedValue).then(() => dispatch(getAllTasks()))
  }

  return (
    <Dropdown flat color="transparen" className="filter-button">
      <Trigger flat>{children}</Trigger>
      <Menu
        aria-label="Actions"
        items={menuItems}
        variant="shadow"
        color="secondary"
        selectedKeys={selected}
        selectionMode="single"
        onSelectionChange={setSelected}
      >
        {({ key, name, color }) => (
          <Item key={key} color={color}>
            {name}
          </Item>
        )}
      </Menu>
    </Dropdown>
  )
}
