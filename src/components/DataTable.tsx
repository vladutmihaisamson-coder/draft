import type { ReactNode, TableHTMLAttributes } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DataTableResizeContext, type DataTableResizeContextValue } from './DataTableContext'

interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode
  fixedLayout?: boolean
  resizable?: boolean
  onColumnResize?: (nextWidths: Record<string, number>) => void
}

const DataTable = ({ children, fixedLayout = true, resizable = false, onColumnResize, style, ...rest }: DataTableProps) => {
  const [widths, setWidths] = useState<Record<string, number>>({})
  const isResizingKeyRef = useRef<string | null>(null)
  const startXRef = useRef<number>(0)
  const startWidthRef = useRef<number>(0)
  const minWidthRef = useRef<number>(120)

  const startResize = useCallback(({ columnKey, currentWidth, minWidth = 120 }: { columnKey: string, currentWidth?: number, minWidth?: number }) => {
    if (!resizable) return
    isResizingKeyRef.current = columnKey
    startXRef.current = (window.event as MouseEvent)?.clientX ?? 0
    startWidthRef.current = currentWidth ?? widths[columnKey] ?? minWidth
    minWidthRef.current = Math.max(minWidth, 60)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    ;(document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string }).webkitUserSelect = 'none'
  }, [resizable, widths])

  useEffect(() => {
    if (!resizable) return
    const onMouseMove = (e: MouseEvent) => {
      const key = isResizingKeyRef.current
      if (!key) return
      const delta = e.clientX - startXRef.current
      const next = Math.max(minWidthRef.current, startWidthRef.current + delta)
      setWidths((prev) => {
        const updated = { ...prev, [key]: next }
        onColumnResize?.(updated)
        return updated
      })
      e.preventDefault()
    }
    const onMouseUp = () => {
      isResizingKeyRef.current = null
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      ;(document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string }).webkitUserSelect = ''
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [resizable, onColumnResize])

  const ctx = useMemo<DataTableResizeContextValue | null>(() => {
    return resizable ? { resizable, widths, startResize } : { resizable: false, widths: {}, startResize: () => {} }
  }, [resizable, widths, startResize])

  return (
    <DataTableResizeContext.Provider value={ctx}>
      <div style={{
        width: '100%',
        overflow: 'auto',
        borderRadius: 'var(--radius-medium)',
        border: `1px solid var(--shade-07)`,
        background: 'var(--shade-10)'
      }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: fixedLayout ? 'fixed' : 'auto',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            ...style
          }}
          {...rest}
        >
          {children}
        </table>
      </div>
    </DataTableResizeContext.Provider>
  )
}

export default DataTable


