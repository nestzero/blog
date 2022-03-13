import request from '@/network/request';

export function getCommentByEssayId(queryInfo, authorid){
  return request({
    url: `/commentByEssayId?authorid=${authorid}`,
    params: queryInfo
  })
}

