import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import SideMenu from 'src/components/Layout/Header/SideMenu'
import { IMenuItem } from 'src/mainMenu'

const menuItems: IMenuItem[] = [
  {
    label: 'Trash',
  },
  {
    label: 'Hero list',
    items: [
      {
        label: 'Sub Item 1',
      },
      {
        label: 'Sub Item 2',
      },
    ],
  },
]

describe('<SideMenu />', () => {
  it('Menu renders correctly', () => {
    const tree = renderer.create(<SideMenu menu={menuItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('With new menu item', () => {
    const menu: IMenuItem = {
      label: 'New Item 2',
    }
    menuItems.push(menu)
    render(<SideMenu menu={menuItems} />)
    const content = screen.getByText(/New Item 2/i)
    expect(content).toBeInTheDocument()
  })
})
