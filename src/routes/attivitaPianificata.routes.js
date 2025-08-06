import { Router } from 'express';
import * as attivitaPianificataController from '../controllers/attivitaPianificata.controller.js';

const router = Router();

// Rotta per creare una nuova attività pianificata (POST /attivita-pianificata)
router.post('/', attivitaPianificataController.createAttivitaPianificata);

// Rotta per ottenere tutte le attività pianificate (GET /attivita-pianificata)
router.get('/', attivitaPianificataController.findAllAttivitaPianificata);

// Rotta per ottenere una singola attività pianificata per ID (GET /attivita-pianificata/:id)
router.get('/:id', attivitaPianificataController.findAttivitaPianificataById);

// Rotta per aggiornare un'attività pianificata (PUT /attivita-pianificata/:id)
router.put('/:id', attivitaPianificataController.updateAttivitaPianificata);

// Rotta per eliminare un'attività pianificata (DELETE /attivita-pianificata/:id)
router.delete('/:id', attivitaPianificataController.deleteAttivitaPianificata);

export default router;