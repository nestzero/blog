import request from '@/network/request'

export function getEssayByRank(queryInfo) {
  return request({
    url: '/allEssay',
    params: queryInfo
  })
}