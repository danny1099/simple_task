import { Trigger, Menu, Item } from '@/components/dropdown/Menu'
import { categoryTask } from '@/services'
import { Dropdown } from '@nextui-org/react'
import { useState, useMemo, useEffect } from 'react'
import {
  BsUiChecksGrid,
  BsLaptop,
  BsHandbag,
  BsCart3,
  BsGeo,
  BsHouseDoor
} from 'react-icons/bs'

const menuItems = [
  {
    key: 'home',
    name: 'home',
    color: 'error',
    icon: <BsHouseDoor size={18} />
  },
  {
    key: 'work',
    name: 'work',
    color: 'secondary',
    icon: <BsUiChecksGrid size={18} />
  },
  {
    key: 'clothes',
    name: 'clothes',
    color: 'primary',
    icon: <BsHandbag size={18} />
  },
  {
    key: 'food',
    name: 'food',
    color: 'success',
    icon: <BsCart3 size={18} />
  },
  {
    key: 'trips',
    name: 'trips',
    color: 'warning',
    icon: <BsGeo size={18} />
  },
  {
    key: 'study',
    name: 'study',
    color: 'default',
    icon: <BsLaptop size={18} />
  }
]

export function Tagged({ id, refresh, children }) {
  const [selected, setSelected] = useState(new Set(['']))

  useEffect(() => {
    if (selectedValue !== '') handleUpdateTask()
  }, [selected])

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  )

  const handleUpdateTask = async () => {
    await categoryTask(id, selectedValue)
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
        {({ key, name, color, icon }) => (
          <Item key={key} color={color} icon={icon}>
            {name}
          </Item>
        )}
      </Menu>
    </Dropdown>
  )
}
