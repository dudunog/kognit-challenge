import { httpClient } from '@/utils'

type FetchNotificationsResult = {
  data: Notification[]
  status: number
}

const fetchNotifications = async (): Promise<FetchNotificationsResult> => {
  const { data, status } = await httpClient
  .get<Notification[]>('/posts?userId=1')

  return { data, status }
}

export default fetchNotifications
