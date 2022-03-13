import { getAllEssay, getEssayByKpiRank, getEssayByAuthorId, getEssayByEssayId, getEssayByStarsRank,getEssayByCommentsRank } from './essays'
import { getCommentByEssayId,getCommentByAuthorid } from './comment';

export default {
  getAllEssay,
  getEssayByKpiRank,
  getEssayByAuthorId,
  getEssayByEssayId,
  
  getEssayByStarsRank,
  getEssayByCommentsRank,
  
  getCommentByEssayId,
  getCommentByAuthorid
}