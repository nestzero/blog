import { getAllEssay, getEssayByKpiRank, getEssayByAuthorId, getEssayByEssayId, getEssayByStarsRank,getEssayByCommentsRank } from './essays'
import { getCommentByEssayId,getCommentByAuthorid } from './comment';

export default {
  getAllEssay,
  
  getEssayByAuthorId,
  getEssayByEssayId,
  
  getEssayByKpiRank,
  getEssayByStarsRank,
  getEssayByCommentsRank,

  getCommentByEssayId,
  getCommentByAuthorid
}