'use client'
// MODULE
import Image from 'next/image'
import useSWR from 'swr'
// import { useState } from 'react'
const fetcher = (url: any) => fetch(url).then((res) => res.json())
const Header: React.FC = () => {
  const { data, error } = useSWR('/api/searchAPI', fetcher)
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
  if (!data) return <div>데이터를 불러오는 중입니다...</div>

  const users = data.items // 검색 결과 목록
  // const [keyword, setKeyword] = useState<string>('')

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // setKeyword(e.target.value)
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
              // value={keyword}
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
