import axios from 'axios'

export interface PaginatedResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}

export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export const fetchUsers = async (page: number) => {
  const res = await axios.get<PaginatedResponse>(
    'https://reqres.in/api/users',
    {
      params: {
        page,
      },
    },
  )
  return res.data
}
