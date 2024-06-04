// 'use client'
// import React from 'react'
// import { AppShell } from "@mantine/core"
// import SetupTOC from './setupTOC'

// const Layout = ({children}) => {
//   return (
//     <AppShell
//     header={{width:0}}
//       aside={{ 
//         width: 250, 
//         breakpoint: "lg" 
//       }}
//     >
//       <AppShell.Main >{children}</AppShell.Main>
//       <AppShell.Aside  withBorder={false} ><SetupTOC/></AppShell.Aside>
//     </AppShell>
//   )
// }

// export default Layout
'use client'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Layout