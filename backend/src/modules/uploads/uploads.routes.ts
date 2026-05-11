import { Router } from "express";
import { UploadsController } from "./uploads.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Uploads
 *   description: File upload management endpoints
 */

/**
 * @swagger
 * /api/uploads:
 *   post:
 *     summary: Upload a file
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/", authMiddleware, UploadsController.upload);

/**
 * @swagger
 * /api/uploads:
 *   get:
 *     summary: List all uploads
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of uploads
 *       401:
 *         description: Unauthorized
 */
router.get("/", authMiddleware, UploadsController.list);

/**
 * @swagger
 * /api/uploads/search:
 *   get:
 *     summary: Search uploads by filename
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query string
 *     responses:
 *       200:
 *         description: Search results
 *       400:
 *         description: Missing search query
 *       401:
 *         description: Unauthorized
 */
router.get("/search", authMiddleware, UploadsController.search);

/**
 * @swagger
 * /api/uploads/{id}:
 *   get:
 *     summary: Get an upload by ID
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The upload ID
 *     responses:
 *       200:
 *         description: Upload found
 *       404:
 *         description: Upload not found
 *       401:
 *         description: Unauthorized
 */
router.get("/:id", authMiddleware, UploadsController.get);

/**
 * @swagger
 * /api/uploads/{id}:
 *   delete:
 *     summary: Delete an upload by ID
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The upload ID
 *     responses:
 *       200:
 *         description: Upload deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Upload not found
 */
router.delete("/:id", authMiddleware, UploadsController.delete);

export default router;