import { Router } from 'express';
import * as dittaController from '../controllers/ditta.controller.js';

const router = Router();

// Rotta per creare una nuova ditta (POST /ditte)
router.post('/', dittaController.createDitta);

// Rotta per ottenere tutte le ditte (GET /ditte)
router.get('/', dittaController.findAllDitte);

// Rotta per ottenere una singola ditta per ID (GET /ditte/:id)
router.get('/:id', dittaController.findDittaById);

// Rotta per aggiornare una ditta (PUT /ditte/:id)
router.put('/:id', dittaController.updateDitta);

// Rotta per eliminare una ditta (DELETE /ditte/:id)
router.delete('/:id', dittaController.deleteDitta);

export default router;