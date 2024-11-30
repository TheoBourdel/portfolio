import React from 'react'

export default function StackCard({name}) {
  return (
    <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
        {name}
    </span>
  )
}
