import React, { ReactNode } from 'react'

export const PageWrapper =  ({ children }: { children: ReactNode}) => {
  return (
    <section className='min-h-screen w-[95%] mx-auto bg-white'>
        { children }
    </section>
  )
}
