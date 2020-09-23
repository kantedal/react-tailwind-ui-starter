import React, { FC, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useOpenState from '../hooks/useOpenState'
import DropDown, { DropDownItem } from './DropDown'

interface Props {}

const TopMenu: FC<Props> = ({ children }) => {
  const [userDropDownOpen, openUserDropDown, closeUserDropDown] = useOpenState()

  const userDropDownItems = useMemo<DropDownItem[]>(
    () => [
      { title: 'Profil', onClick: () => null },
      { title: 'Logga ut', onClick: () => null },
    ],
    []
  )

  const { pathname } = useLocation()

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
              aria-label='Main menu'
              aria-expanded='false'
            >
              <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
              <svg className='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <img
                className='block lg:hidden h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                alt='Workflow logo'
              />
              <img
                className='hidden lg:block h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-on-white.svg'
                alt='Workflow logo'
              />
            </div>
            <div className='hidden sm:ml-6 sm:flex'>
              <Link
                to='/dashboard'
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  pathname.indexOf('/dashboard') !== -1 ? 'border-indigo-500' : 'border-transparent'
                } text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out`}
              >
                Dashboard
              </Link>
              <Link
                to='/settings'
                className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 ${
                  pathname.indexOf('/settings') !== -1 ? 'border-indigo-500' : 'border-transparent'
                } text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out`}
              >
                Settings
              </Link>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              className='p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out'
              aria-label='Notifications'
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>

            <div className='ml-3 relative'>
              <div>
                <button
                  className='flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'
                  id='user-menu'
                  aria-label='User menu'
                  aria-haspopup='true'
                  onClick={openUserDropDown}
                >
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>

              <DropDown items={userDropDownItems} onClose={closeUserDropDown} open={userDropDownOpen} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='hidden sm:hidden'>
        <div className='pt-2 pb-4'>
          <a
            href='#'
            className='block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'
          >
            Dashboard
          </a>
          <a
            href='#'
            className='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
          >
            Team
          </a>
          <a
            href='#'
            className='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
          >
            Projects
          </a>
          <a
            href='#'
            className='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
          >
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
  )
}

export default TopMenu
