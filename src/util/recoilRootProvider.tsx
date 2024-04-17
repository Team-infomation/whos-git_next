// recoilRootProvider.tsx
'use client'
import Body from '@component/body'
// MODULE
import { RecoilRoot } from 'recoil'
// import { I18nextProvider } from 'react-i18next'
// import i18next from '@util/i18n'

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <I18nextProvider i18n={i18next}>
    <RecoilRoot>
      <Body>{children}</Body>
    </RecoilRoot>
    // </I18nextProvider>
  )
}
