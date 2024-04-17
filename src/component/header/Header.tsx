'use client'
// MODULE
import Image from 'next/image'
import { useState } from 'react'

const Header: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('')

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }
  return (
    <header id="header">
      <div className="con">
        <ul className="flex flex_jc_sb flex_ai_c">
          <li className="logo_section">
            <Image src="/logo.png" width={50} height={50} alt="" />
          </li>
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
            <button>검색</button>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
