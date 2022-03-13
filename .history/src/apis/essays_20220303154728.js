import request from '@/network/request'

export function getAllEssay(queryInfo) {
  return request({
    url: '/allEssay',
    params: queryInfo
  })
}

export function getEssayByKpiRank(){
  return request({
    url: '/essayRank'
  })
}

export function getEssayByAuthorId(authorid){
  return request({
    url: `/essayByAuthorid?authorid=${authorid}`,
  })
}