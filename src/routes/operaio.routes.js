import { Router } from 'express';
import * as operaioController from '../controllers/operaio.controller.js';

const router = Router();

// Rotta per creare un nuovo operaio (POST /operai)
router.post('/', operaioController.createOperaio);

// Rotta per ottenere tutti gli operai (GET /operai)
router.get('/', operaioController.findAllOperai);

// Rotta per ottenere un singolo operaio per ID (GET /operai/:id)
router.get('/:id', operaioController.findOperaioById);

// Rotta per aggiornare un operaio (PUT /operai/:id)
router.put('/:id', operaioController.updateOperaio);

// Rotta per eliminare un operaio (DELETE /operai/:id)
router.delete('/:id', operaioController.deleteOperaio);

export default router;