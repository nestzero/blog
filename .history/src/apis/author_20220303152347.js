import request from '@/network/request'

export function get(queryInfo) {
  return request({
    url: '/allEssay',
    params: queryInfo
  })
}