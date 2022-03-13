import request from '@/network/request';

export function getCommentByEssayId(queryInfo, authorid){
  return request({
    url: `/essayByAuthorid?authorid=${authorid}`,
    params: queryInfo
  })
}

