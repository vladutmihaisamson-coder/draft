import type { HTMLAttributes, ReactNode, ThHTMLAttributes, TdHTMLAttributes } from 'react'
import { useContext, useMemo } from 'react'
import { DataTableResizeContext } from './DataTableContext'

interface SectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export const DataTableHeader = ({ children, ...rest }: SectionProps) => {
  return (
    <thead {...rest}>{children}</thead>
  )
}

export const DataTableBody = ({ children, ...rest }: SectionProps) => {
  return (
    <tbody {...rest}>{children}</tbody>
  )
}

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode
  selected?: boolean
  hoverable?: boolean
}

export const DataTableRow = ({ children, selected, hoverable = true, style, ...rest }: RowProps) => {
  return (
    <tr
      style={{
        borderBottom: `1px solid var(--medical-07)`,
        transition: 'background-color 0.2s ease',
        background: selected ? 'var(--medical-08)' : undefined,
        ...style
      }}
      onMouseEnter={(e) => {
        if (!hoverable || selected) return
        e.currentTarget.style.backgroundColor = 'var(--medical-08)'
      }}
      onMouseLeave={(e) => {
        if (!hoverable || selected) return
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
      {...rest}
    >
      {children}
    </tr>
  )
}

interface HeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  widthPx?: number
  minWidthPx?: number
  columnKey?: string
}

export const DataTableHeaderCell = ({ children, widthPx, minWidthPx = 120, columnKey, style, ...rest }: HeaderCellProps) => {
  const ctx = useContext(DataTableResizeContext)
  const effectiveWidth = useMemo(() => {
    if (!ctx?.resizable || !columnKey) return widthPx
    const w = ctx.widths[columnKey]
    return w ?? widthPx
  }, [ctx, columnKey, widthPx])
  return (
    <th
      style={{
        position: 'relative',
        padding: 'var(--space-4) var(--space-6)',
        textAlign: 'left',
        fontWeight: 'var(--font-weight-semibold)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--medical-01)',
        width: effectiveWidth ? `${effectiveWidth}px` : undefined,
        minWidth: `${Math.max(minWidthPx, 60)}px`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...style
      }}
      {...rest}
    >
      {children}
      {ctx?.resizable && columnKey ? (
        <div
          onMouseDown={(e) => {
            // prevent text selection and table drag
            e.preventDefault()
            e.stopPropagation()
            ctx.startResize({ columnKey, currentWidth: effectiveWidth, minWidth: minWidthPx })
          }}
          style={{
            position: 'absolute',
            top: 0,
            right: -3,
            height: '100%',
            width: 6,
            cursor: 'col-resize',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}
        >
          <span style={{ width: 2, background: 'transparent' }} />
        </div>
      ) : null}
    </th>
  )
}

interface CellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  widthPx?: number
  minWidthPx?: number
  columnKey?: string
}

export const DataTableCell = ({ children, widthPx, minWidthPx = 120, columnKey, style, ...rest }: CellProps) => {
  const ctx = useContext(DataTableResizeContext)
  const effectiveWidth = useMemo(() => {
    if (!ctx?.resizable || !columnKey) return widthPx
    const w = ctx.widths[columnKey]
    return w ?? widthPx
  }, [ctx, columnKey, widthPx])
  return (
    <td
      style={{
        padding: 'var(--space-4) var(--space-6)',
        color: 'var(--medical-01)',
        verticalAlign: 'top',
        width: effectiveWidth ? `${effectiveWidth}px` : undefined,
        minWidth: `${Math.max(minWidthPx, 60)}px`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...style
      }}
      {...rest}
    >
      {children}
    </td>
  )
}


