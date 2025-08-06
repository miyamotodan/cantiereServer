import { Router } from 'express';
import * as cantiereController from '../controllers/cantiere.controller.js';

const router = Router();

// Rotta per creare un nuovo cantiere (POST /cantieri)
router.post('/', cantiereController.createCantiere);

// Rotta per ottenere tutti i cantieri (GET /cantieri)
router.get('/', cantiereController.findAllCantieri);

// Rotta per ottenere un singolo cantiere per ID (GET /cantieri/:id)
router.get('/:id', cantiereController.findCantiereById);

// Rotta per aggiornare un cantiere (PUT /cantieri/:id)
router.put('/:id', cantiereController.updateCantiere);

// Rotta per eliminare un cantiere (DELETE /cantieri/:id)
router.delete('/:id', cantiereController.deleteCantiere);

export default router;