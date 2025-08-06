import StrumentoAnagrafica from '../models/StrumentoAnagrafica.js';

// Metodo per creare un nuovo strumento anagrafico
export const createStrumentoAnagrafica = async (req, res) => {
  try {
    const newStrumentoAnagrafica = await StrumentoAnagrafica.create({
      id_strumento_anagrafica: req.body.id_strumento_anagrafica, // Se vuoi specificare l'ID manualmente
      nome_strumento: req.body.nome_strumento,
      tipo: req.body.tipo,
      categoria: req.body.categoria,
      richiede_certificazione: req.body.richiede_certificazione,
      descrizione_uso: req.body.descrizione_uso,
      specifiche_tecniche: req.body.specifiche_tecniche,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newStrumentoAnagrafica);
  } catch (error) {
    console.error('Errore nella creazione dello strumento anagrafico:', error);
    res.status(500).json({ error: 'Errore nella creazione dello strumento anagrafico' });
  }
};

// Metodo per trovare tutti gli strumenti anagrafici
export const findAllStrumentiAnagrafica = async (req, res) => {
  try {
    const strumentiAnagrafica = await StrumentoAnagrafica.findAll();
    res.status(200).json(strumentiAnagrafica);
  } catch (error) {
    console.error('Errore nel recupero degli strumenti anagrafici:', error);
    res.status(500).json({ error: 'Errore nel recupero degli strumenti anagrafici' });
  }
};

// Metodo per trovare uno strumento anagrafico per ID
export const findStrumentoAnagraficaById = async (req, res) => {
  try {
    const strumentoAnagrafica = await StrumentoAnagrafica.findByPk(req.params.id);
    if (!strumentoAnagrafica) {
      return res.status(404).json({ message: 'Strumento anagrafico non trovato.' });
    }
    res.status(200).json(strumentoAnagrafica);
  } catch (error) {
    console.error('Errore nel recupero dello strumento anagrafico per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero dello strumento anagrafico per ID' });
  }
};

// Metodo per aggiornare uno strumento anagrafico
export const updateStrumentoAnagrafica = async (req, res) => {
  try {
    const [updated] = await StrumentoAnagrafica.update(req.body, {
      where: { id_strumento_anagrafica: req.params.id }
    });

    if (updated) {
      const updatedStrumentoAnagrafica = await StrumentoAnagrafica.findByPk(req.params.id);
      return res.status(200).json(updatedStrumentoAnagrafica);
    }

    res.status(404).json({ message: 'Strumento anagrafico non trovato.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento dello strumento anagrafico:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento dello strumento anagrafico' });
  }
};

// Metodo per eliminare uno strumento anagrafico
export const deleteStrumentoAnagrafica = async (req, res) => {
  try {
    const deleted = await StrumentoAnagrafica.destroy({
      where: { id_strumento_anagrafica: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Strumento anagrafico non trovato.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione dello strumento anagrafico:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione dello strumento anagrafico' });
  }
};