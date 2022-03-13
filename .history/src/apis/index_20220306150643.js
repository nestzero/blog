import { getAllEssay, getEssayByKpiRank, getEssayByAuthorId, getEssayByEssayId, getEssayByStarsRank,getEssayByCommentsRank } from './essays'
import { getCommentByEssayId } from './comment';

export default {
  getAllEssay,
  getEssayByKpiRank,
  getEssayByAuthorId,
  getEssayByEssayId,
  getCommentByEssayId,
  getEssayByStarsRank
}