"user client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
// Define a component that accepts children of any valid React node type

interface Props{
    children:React.ReactNode
}
/**
 * The Provider component wraps its children with the ThemeProvider 
 * from `next-themes` to manage theme switching.
 * 
 * @component
 * @example
 * return (
 *   <Provider>
 *     <YourComponent />
 *   </Provider>
 * )
 */
export const Provider = ({children}: Props)=>{
    return <ThemeProvider attribute='class'>
        {children}

    </ThemeProvider>
}