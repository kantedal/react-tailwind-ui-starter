import { Transition } from '@tailwindui/react'
import useClickAway from 'hooks/useClickAway'
import React, { FC, MouseEvent, useCallback, useMemo, useState } from 'react'

export interface SelectMenuItem {
  id: string
  title: string
}

interface Props {
  selectedItem: SelectMenuItem | null
  items: SelectMenuItem[]
  placeholder?: string
  label?: string
  classes?: { root?: string; selectButton?: string }
  onChange: (item: SelectMenuItem | null) => void
}

const SelectMenu: FC<Props> = ({ selectedItem, onChange, items, placeholder, label, classes }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => (open ? setOpen(false) : null)
  const clickAwayRef = useClickAway(handleClose)

  const handleSelectItem = useCallback(
    (e: MouseEvent<HTMLLIElement>) => onChange(items.find((item) => item.id === e.currentTarget.id) || null),
    [onChange]
  )

  const selectMenuItems = useMemo(() => {
    return items.map((item) => (
      <li
        onClick={handleSelectItem}
        id={item.id}
        role='option'
        className={`text-gray-900 ${
          item.id === selectedItem?.id ? 'bg-indigo-100' : 'bg-white'
        } hover:bg-indigo-600 hover:text-white cursor-default select-none relative py-2 pl-3 pr-9`}
      >
        <span className='font-normal block truncate'>{item.title}</span>

        {item.id === selectedItem?.id && (
          <span className='text-indigo-600 hover:text-white absolute inset-y-0 right-0 flex items-center pr-4'>
            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fill-rule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clip-rule='evenodd'
              />
            </svg>
          </span>
        )}
      </li>
    ))
  }, [items, selectedItem, handleSelectItem])

  return (
    <div className={`space-y-1 ${classes?.root}`}>
      {label && (
        <label id='listbox-label' className='block text-sm leading-5 font-medium text-gray-700'>
          {label}
        </label>
      )}
      <div className='relative'>
        <span className='inline-block w-full rounded-md shadow-sm'>
          <button
            type='button'
            onClick={handleOpen}
            aria-haspopup='listbox'
            aria-expanded='true'
            aria-labelledby='listbox-label'
            className={`cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${classes?.selectButton}`}
          >
            {selectedItem && <span className='block truncate'>{selectedItem.title}</span>}
            {!selectedItem && <span className='block truncate text-gray-400'>{placeholder || '-'}</span>}
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <svg className='h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='none' stroke='currentColor'>
                <path d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
              </svg>
            </span>
          </button>
        </span>
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
            <div ref={ref} className='absolute mt-1 w-full rounded-md bg-white shadow-lg'>
              <ul
                ref={clickAwayRef}
                tabIndex={-1}
                role='listbox'
                aria-labelledby='listbox-label'
                aria-activedescendant='listbox-item-3'
                className='max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5'
              >
                {selectMenuItems}
              </ul>
            </div>
          )}
        </Transition>
      </div>
    </div>
  )
}

export default SelectMenu
