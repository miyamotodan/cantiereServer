import { Router } from 'express';
import * as lavorazioneProgettoController from '../controllers/lavorazioneProgetto.controller.js';

const router = Router();

// Rotta per creare una nuova lavorazione di progetto (POST /lavorazioni-progetto)
router.post('/', lavorazioneProgettoController.createLavorazioneProgetto);

// Rotta per ottenere tutte le lavorazioni di progetto (GET /lavorazioni-progetto)
router.get('/', lavorazioneProgettoController.findAllLavorazioniProgetto);

// Rotta per ottenere una singola lavorazione di progetto per ID (GET /lavorazioni-progetto/:id)
router.get('/:id', lavorazioneProgettoController.findLavorazioneProgettoById);

// Rotta per aggiornare una lavorazione di progetto (PUT /lavorazioni-progetto/:id)
router.put('/:id', lavorazioneProgettoController.updateLavorazioneProgetto);

// Rotta per eliminare una lavorazione di progetto (DELETE /lavorazioni-progetto/:id)
router.delete('/:id', lavorazioneProgettoController.deleteLavorazioneProgetto);

export default router;