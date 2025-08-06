import { Router } from 'express';
import * as lavorazioneAnagraficaController from '../controllers/lavorazioneAnagrafica.controller.js';

const router = Router();

// Rotta per creare una nuova lavorazione anagrafica (POST /lavorazioni-anagrafica)
router.post('/', lavorazioneAnagraficaController.createLavorazioneAnagrafica);

// Rotta per ottenere tutte le lavorazioni anagrafiche (GET /lavorazioni-anagrafica)
router.get('/', lavorazioneAnagraficaController.findAllLavorazioniAnagrafica);

// Rotta per ottenere una singola lavorazione anagrafica per ID (GET /lavorazioni-anagrafica/:id)
router.get('/:id', lavorazioneAnagraficaController.findLavorazioneAnagraficaById);

// Rotta per aggiornare una lavorazione anagrafica (PUT /lavorazioni-anagrafica/:id)
router.put('/:id', lavorazioneAnagraficaController.updateLavorazioneAnagrafica);

// Rotta per eliminare una lavorazione anagrafica (DELETE /lavorazioni-anagrafica/:id)
router.delete('/:id', lavorazioneAnagraficaController.deleteLavorazioneAnagrafica);

export default router;