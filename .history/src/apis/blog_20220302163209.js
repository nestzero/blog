import request from '@/network/request'

export function getAllEssay(queryInfo) {
  return request({
    url: '/allEssay',
    params: queryInfo
  })
}

function getEssayByRank(){
  return request({
    url: '/essayRank'
  })
}