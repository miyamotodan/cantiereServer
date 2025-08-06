import { Router } from 'express';
import * as pianoLavoroController from '../controllers/pianoLavoro.controller.js';

const router = Router();

// Rotta per creare un nuovo piano di lavoro (POST /piani-lavoro)
router.post('/', pianoLavoroController.createPianoLavoro);

// Rotta per ottenere tutti i piani di lavoro (GET /piani-lavoro)
router.get('/', pianoLavoroController.findAllPianiLavoro);

// Rotta per ottenere un singolo piano di lavoro per ID (GET /piani-lavoro/:id)
router.get('/:id', pianoLavoroController.findPianoLavoroById);

// Rotta per aggiornare un piano di lavoro (PUT /piani-lavoro/:id)
router.put('/:id', pianoLavoroController.updatePianoLavoro);

// Rotta per eliminare un piano di lavoro (DELETE /piani-lavoro/:id)
router.delete('/:id', pianoLavoroController.deletePianoLavoro);

export default router;