import { Router } from 'express';
import * as strumentoAnagraficaController from '../controllers/strumentoAnagrafica.controller.js';

const router = Router();

// Rotta per creare un nuovo strumento anagrafico (POST /strumenti-anagrafica)
router.post('/', strumentoAnagraficaController.createStrumentoAnagrafica);

// Rotta per ottenere tutti gli strumenti anagrafici (GET /strumenti-anagrafica)
router.get('/', strumentoAnagraficaController.findAllStrumentiAnagrafica);

// Rotta per ottenere un singolo strumento anagrafico per ID (GET /strumenti-anagrafica/:id)
router.get('/:id', strumentoAnagraficaController.findStrumentoAnagraficaById);

// Rotta per aggiornare uno strumento anagrafico (PUT /strumenti-anagrafica/:id)
router.put('/:id', strumentoAnagraficaController.updateStrumentoAnagrafica);

// Rotta per eliminare uno strumento anagrafico (DELETE /strumenti-anagrafica/:id)
router.delete('/:id', strumentoAnagraficaController.deleteStrumentoAnagrafica);

export default router;