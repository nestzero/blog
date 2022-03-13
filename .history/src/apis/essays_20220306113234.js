import request from '@/network/request'

export function getAllEssay(queryInfo) {
  return request({
    url: '/allEssay',
    params: queryInfo
  })
}

export function getEssayByKpiRank() {
  return request({
    url: '/essayRank'
  })
}

export function getEssayByStarsRank(queryInfo) {
  return request({
    url: '/essayByStarsRank',
    params: queryInfo
  })
}

export function getEssayByAuthorId(queryInfo, authorid) {
  return request({
    url: `/essayByAuthorid?authorid=${authorid}`,
    params: queryInfo
  })
}

export function getEssayByEssayId(essayid) {
  return request({
    url: `/essayByEssayid?essayid=${essayid}`,
  })
}