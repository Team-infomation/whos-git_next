'use client'
// MODULE
import Image from 'next/image'
import { searchStore } from '@/store/searchStore'

const Header: React.FC = () => {
  const { keyword, setKeyword, searchResult, setSearchResults } = searchStore()

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }
  const handleSearch = async () => {
    console.log(keyword)
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyword}`,
      )
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        setSearchResults(data.items)
      } else {
        console.error('API 오류 발생:', response.status)
      }
    } catch (error) {
      console.error('검색 결과 가져오기 오류:', error)
    }
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
            <button onClick={() => handleSearch()}>검색</button>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
