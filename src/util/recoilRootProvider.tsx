'use client'
import Body from '@component/body'
// MODULE
import { RecoilRoot } from 'recoil'

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <Body>{children}</Body>
    </RecoilRoot>
  )
}
