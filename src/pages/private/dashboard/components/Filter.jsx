import { Menu, Button } from '@/components/dropdown/Menu'
import { Dropdown } from '@nextui-org/react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsListTask, BsCheck2Square, BsFilter } from 'react-icons/bs'

const menuItems = [
  {
    key: 'pending',
    name: 'Pending',
    desc: 'Show your pending task',
    icon: <AiOutlineFieldTime size={22} />
  },
  {
    key: 'complete',
    name: 'Complete',
    desc: 'Show your complete task',
    icon: <BsCheck2Square size={20} />
  },
  {
    key: 'all',
    name: 'All Task',
    desc: 'All your tasks are shown',
    icon: <BsListTask size={20} />
  }
]

export function Filter({ selected, setSelected }) {
  return (
    <Dropdown>
      <Button flat color="transparen" className="filter-button">
        <BsFilter size={20} color="#7a7a7a" />
      </Button>
      <Menu
        aria-label="Actions"
        items={menuItems}
        variant="shadow"
        color="secondary"
        selectedKeys={selected}
        selectionMode="single"
        onSelectionChange={setSelected}
      >
        {({ key, desc, icon, name }) => (
          <Dropdown.Item
            key={key}
            color="secondary"
            description={desc}
            icon={icon}
          >
            {name}
          </Dropdown.Item>
        )}
      </Menu>
    </Dropdown>
  )
}
