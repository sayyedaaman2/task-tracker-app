import {type ReactNode} from 'react'
import {TaskProvider} from './TaskContext'
import {DialogProvider} from './DialogContext'
interface RootContextProps {
    children : ReactNode;
}
export default function RootContext({children}:RootContextProps){
    return(
        <TaskProvider>
            <DialogProvider>
                {children}
            </DialogProvider>
        </TaskProvider>
    )
}