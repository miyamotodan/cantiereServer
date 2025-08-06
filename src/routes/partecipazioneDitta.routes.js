import { Router } from 'express';
import * as partecipazioneDittaController from '../controllers/partecipazioneDitta.controller.js';

const router = Router();

// Rotta per creare una nuova partecipazione ditta (POST /partecipazioni-ditta)
router.post('/', partecipazioneDittaController.createPartecipazioneDitta);

// Rotta per ottenere tutte le partecipazioni ditta (GET /partecipazioni-ditta)
router.get('/', partecipazioneDittaController.findAllPartecipazioniDitta);

// Rotta per ottenere una singola partecipazione ditta per ID (GET /partecipazioni-ditta/:id)
router.get('/:id', partecipazioneDittaController.findPartecipazioneDittaById);

// Rotta per aggiornare una partecipazione ditta (PUT /partecipazioni-ditta/:id)
router.put('/:id', partecipazioneDittaController.updatePartecipazioneDitta);

// Rotta per eliminare una partecipazione ditta (DELETE /partecipazioni-ditta/:id)
router.delete('/:id', partecipazioneDittaController.deletePartecipazioneDitta);

export default router;