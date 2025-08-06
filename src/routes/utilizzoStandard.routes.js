import { Router } from 'express';
import * as utilizzoStandardController from '../controllers/utilizzoStandard.controller.js';

const router = Router();

// Rotta per creare un nuovo utilizzo standard (POST /utilizzi-standard)
router.post('/', utilizzoStandardController.createUtilizzoStandard);

// Rotta per ottenere tutti gli utilizzi standard (GET /utilizzi-standard)
router.get('/', utilizzoStandardController.findAllUtilizziStandard);

// Rotta per ottenere un singolo utilizzo standard per ID (GET /utilizzi-standard/:id)
router.get('/:id', utilizzoStandardController.findUtilizzoStandardById);

// Rotta per aggiornare un utilizzo standard (PUT /utilizzi-standard/:id)
router.put('/:id', utilizzoStandardController.updateUtilizzoStandard);

// Rotta per eliminare un utilizzo standard (DELETE /utilizzi-standard/:id)
router.delete('/:id', utilizzoStandardController.deleteUtilizzoStandard);

export default router;