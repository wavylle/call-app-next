import React from 'react'
import DashboardSidebar from '@/components/global/panelsidebar'
// import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
        {props.children}
    </div>
  )
}

export default Layout