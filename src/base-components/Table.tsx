import React, { FC } from 'react'

interface Props {}

const Table: FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead>
                <tr>
                  <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Name
                  </th>
                  <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Title
                  </th>
                  <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Role
                  </th>
                  <th className='px-6 py-3 bg-gray-50'></th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900'>Jane Cooper</td>
                  <td className='px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500'>Regional Paradigm Technician</td>
                  <td className='px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500'>jane.cooper@example.com</td>
                  <td className='px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500'>Admin</td>
                  <td className='px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium'>
                    <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
