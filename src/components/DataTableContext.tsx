import { createContext } from 'react'

export interface DataTableResizeContextValue {
  resizable: boolean
  widths: Record<string, number>
  startResize: (args: { columnKey: string, currentWidth?: number, minWidth?: number }) => void
}

export const DataTableResizeContext = createContext<DataTableResizeContextValue | null>(null)
