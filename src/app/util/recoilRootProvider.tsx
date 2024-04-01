'use client'
// MODULE
import { RecoilRoot } from 'recoil'
// COMPONENT
import Body from '@/components/body'

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
