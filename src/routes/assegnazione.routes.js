import { Router } from 'express';
import * as assegnazioneController from '../controllers/assegnazione.controller.js';

const router = Router();

// Rotta per creare una nuova assegnazione (POST /assegnazioni)
router.post('/', assegnazioneController.createAssegnazione);

// Rotta per ottenere tutte le assegnazioni (GET /assegnazioni)
router.get('/', assegnazioneController.findAllAssegnazioni);

// Rotta per ottenere una singola assegnazione per ID (GET /assegnazioni/:id)
router.get('/:id', assegnazioneController.findAssegnazioneById);

// Rotta per aggiornare un'assegnazione (PUT /assegnazioni/:id)
router.put('/:id', assegnazioneController.updateAssegnazione);

// Rotta per eliminare un'assegnazione (DELETE /assegnazioni/:id)
router.delete('/:id', assegnazioneController.deleteAssegnazione);

export default router;