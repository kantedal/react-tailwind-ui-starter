import React, { FC } from 'react'

export interface TableRow {
  content?: string
  bold?: boolean
}

interface columnLabel {
  id?: string
  label?: string
}

export interface TableProps {
  columnLabels: columnLabel[]
  tableRows: TableRow[][]
}

const Table: FC<TableProps> = ({ columnLabels, tableRows }) => {
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead>
                <tr>
                  {columnLabels.map((item) => (
                    <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      {item.label}
                    </th>
                  ))}
                  <th className='px-6 py-3 bg-gray-50'></th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {tableRows.map((row) => (
                  <tr>
                    {row.map((item) => (
                      <td
                        className={`px-6 py-4 whitespace-no-wrap text-sm leading-5 ${
                          item.bold ? 'font-medium text-gray-900' : ' text-gray-500'
                        }`}
                      >
                        {item.content}
                      </td>
                    ))}
                    <td className='px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium'>
                      <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
