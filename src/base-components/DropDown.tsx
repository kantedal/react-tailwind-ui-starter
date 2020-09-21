import { Transition } from '@tailwindui/react'
import React, { FC, useMemo } from 'react'
import useClickAway from '../hooks/useClickAway'

export interface DropDownItem {
  title: string
  onClick: () => void
}

interface Props {
  open: boolean
  items: DropDownItem[]
  onClose: () => void
}

const DropDown: FC<Props> = ({ open, items, onClose }) => {
  console.log(open)
  const handleClose = () => (open ? onClose() : null)
  const clickAwayRef = useClickAway(handleClose)

  const dropDownItems = useMemo(
    () =>
      items.map((item, index) => (
        <button
          key={index}
          className='block text-left w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
          role='menuitem'
        >
          {item.title}
        </button>
      )),
    [items]
  )

  return (
    <Transition
      show={open}
      enter='transition ease-out duration-100 transform'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in duration-75 transform'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      {(ref) => (
        <div ref={ref} className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg'>
          <div ref={clickAwayRef} className='rounded-md bg-white shadow-xs'>
            <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
              {dropDownItems}
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default DropDown
