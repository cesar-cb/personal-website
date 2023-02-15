import { AnchorHTMLAttributes } from 'react'
import { LinkProps } from 'next/link'

export type TAnchorElementProps = LinkProps &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'className'>
