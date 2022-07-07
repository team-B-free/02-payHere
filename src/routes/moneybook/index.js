import { Router } from "express";
import authJWT from "../../middlewares/auth.js";
import moneybookController from "./../../controllers/moneybook/moneybookController.js";
const router = Router();
/**
 * @author 오주환
 * @version 1.0 22.7.6 최초 작성
 * 문서 구조 작성
 */

router.patch("/:moneybook_id", moneybookController.updateMoneybook);
/**
 * @author 오주환
 * @version 1.0 22.07.06 가계부 수정
 */

router.get("/", moneybookController.getMbtiTypeMoneybook);

router.delete(
  "/:moneybook_id",
  authJWT,
  moneybookController.setDeleteMoneybook
);
/**
 *  @author 박성용
 *  @version 1.1 22.7.6 {가계부 삭제, 복구기능 patch 메서드 작성}
 *
 *  @author 박성용
 *  @version 1.2 22.7.7 {가계부 삭제기능 delete 메서드로 변경}
 *
 *  @author 박성용
 *  @version 1.3 22.7.8 현재 로그인한 유저를 판단하기 위해 authJWT 적용
 */

router.patch("/recover/:moneybook_id", moneybookController.setRestoreMoneyBook);

export default router;
