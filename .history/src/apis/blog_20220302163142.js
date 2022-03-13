import request from '@/network/request'

export function getAllEssay(queryInfo) {
  return request({
    url: '/allEssay',
    params: queryInfo
  })
}

fun