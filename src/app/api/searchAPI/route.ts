import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.q as string // 검색어 파라미터 추출
  // const url = `https://api.github.com/search/users?q=${query}` // API URL 완성
  const url = `https://api.github.com/search/users?q=kkt`

  const response = await fetch(url) // API 호출
  const data = await response.json() // JSON 응답 파싱

  if (response.ok) {
    res.json(data) // 검색 결과 전달
  } else {
    console.error(`API 에러 발생: ${response.status}`)
    res.status(response.status).json({ message: 'API 에러가 발생했습니다.' })
  }
}
