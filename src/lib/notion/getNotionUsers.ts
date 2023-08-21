import rpc from './rpc'

interface RpcResponse {
  results?: {
    value: {
      given_name?: string
      family_name?: string
      id: string
    }
  }[]
}

export default async function getNotionUsers(ids: string[]) {
  const { results = [] } = (await rpc('getRecordValues', {
    requests: ids.map((id: string) => ({
      id,
      table: 'notion_user',
    })),
  })) as RpcResponse

  const users: any = {}

  for (const result of results) {
    const { value } = result || { value: {} }
    const { given_name, family_name } = value
    let full_name = given_name || ''

    if (family_name) {
      full_name = `${full_name} ${family_name}`
    }
    users[value.id] = { full_name }
  }

  return { users }
}
