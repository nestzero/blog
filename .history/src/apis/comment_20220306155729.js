import request from '@/network/request';

export function getCommentByEssayId(queryInfo, essayid){
  return request({
    url: `/commentByEssayId?essayid=${essayid}`,
    params: queryInfo
  })
}

export function getCommentByAuthorid(queryInfo, authorid){
  return request({
    url:`/commentByAuthorid?authorid=${authorid}`,
    params:queryInfo
  })
}