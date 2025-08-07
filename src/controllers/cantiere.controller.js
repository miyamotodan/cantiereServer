import Cantiere from '../models/Cantiere.js';

// Metodo per creare un nuovo cantiere
export const createCantiere = async (req, res) => {
  try {
    const newCantiere = await Cantiere.create({
      nome: req.body.nome,
      indirizzo: req.body.indirizzo,
      data_inizio: new Date(req.body.data_inizio),
      data_fine_prevista: new Date(req.body.data_fine_prevista),
      descrizione: req.body.descrizione,
      stato: req.body.stato,
      tipologia: req.body.tipologia
    });
    res.status(201).json(newCantiere);
  } catch (error) {
    console.error('Errore nella creazione del cantiere:', error);
    res.status(500).json({ error: 'Errore nella creazione del cantiere' });
  }
};

// Metodo per trovare tutti i cantieri
export const findAllCantieri = async (req, res) => {
  try {
    const cantieri = await Cantiere.findAll();
    res.status(200).json(cantieri);
  } catch (error) {
    console.error('Errore nel recupero dei cantieri:', error);
    res.status(500).json({ error: 'Errore nel recupero dei cantieri' });
  }
};

// Metodo per trovare un cantiere per ID
export const findCantiereById = async (req, res) => {
  try {
    // Usa 'id_cantiere' come chiave primaria
    const cantiere = await Cantiere.findByPk(req.params.id);
    if (!cantiere) {
      return res.status(404).json({ message: 'Cantiere non trovato.' });
    }
    res.status(200).json(cantiere);
  } catch (error) {
    console.error('Errore nel recupero del cantiere per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero del cantiere per ID' });
  }
};

// Metodo per aggiornare un cantiere
export const updateCantiere = async (req, res) => {
  try {
    // Aggiorna solo i campi forniti nel body della richiesta
    const [updated] = await Cantiere.update(req.body, {
      where: { id_cantiere: req.params.id } // Usa 'id_cantiere' come chiave primaria
    });

    if (updated) {
      // Recupera il cantiere aggiornato per restituirlo nella risposta
      const updatedCantiere = await Cantiere.findByPk(req.params.id);
      return res.status(200).json(updatedCantiere);
    }

    res.status(404).json({ message: 'Cantiere non trovato.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento del cantiere:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento del cantiere' });
  }
};

// Metodo per eliminare un cantiere
export const deleteCantiere = async (req, res) => {
  try {
    const deleted = await Cantiere.destroy({
      where: { id_cantiere: req.params.id } // Usa 'id_cantiere' come chiave primaria
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Cantiere non trovato.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione del cantiere:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione del cantiere' });
  }
};