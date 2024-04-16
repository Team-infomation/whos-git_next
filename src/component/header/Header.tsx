'use client'
// MODULE
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const { t } = useTranslation()
  const [keyword, setKeyword] = useState<string>('')

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }
  return (
    <header id="header">
      <ul className="flex flex_jc_sb flex_ai_c">
        <li className="logo_section"></li>
        <li className="member_info"></li>
        <li className="search_input">
          <label htmlFor="keyword"></label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={keyword}
            onChange={onChangeKeyword}
          />
          <button>{t('header.search')}</button>
        </li>
      </ul>
    </header>
  )
}
export default Header
