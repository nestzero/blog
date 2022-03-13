import request from '@/network/request';

export function getCommentByEssayId(queryInfo, essayid){
  return request({
    url: `/commentByEssayId?essayid=${essayid}`,
    params: queryInfo
  })
}

export function getCommentByAuthorid(queryInfo, authorid){
  return request({
    url:`/commentsByAuthorid?authorid=${authorid}`,
    params:q
  })
}