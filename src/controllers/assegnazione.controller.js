import Assegnazione from '../models/Assegnazione.js';

// Metodo per creare una nuova assegnazione
export const createAssegnazione = async (req, res) => {
  try {
    const newAssegnazione = await Assegnazione.create({
      id_operaio: req.body.id_operaio,
      id_attivita: req.body.id_attivita,
      id_partecipazione_ditta: req.body.id_partecipazione_ditta,
      notifica_inviata: req.body.notifica_inviata ? new Date(req.body.notifica_inviata) : null,
      confermata: req.body.confermata,
      note_operaio: req.body.note_operaio
    });
    res.status(201).json(newAssegnazione);
  } catch (error) {
    console.error('Errore nella creazione dell\'assegnazione:', error);
    res.status(500).json({ error: 'Errore nella creazione dell\'assegnazione' });
  }
};

// Metodo per trovare tutte le assegnazioni
export const findAllAssegnazioni = async (req, res) => {
  try {
    const assegnazioni = await Assegnazione.findAll();
    res.status(200).json(assegnazioni);
  } catch (error) {
    console.error('Errore nel recupero delle assegnazioni:', error);
    res.status(500).json({ error: 'Errore nel recupero delle assegnazioni' });
  }
};

// Metodo per trovare un'assegnazione per ID
export const findAssegnazioneById = async (req, res) => {
  try {
    const assegnazione = await Assegnazione.findByPk(req.params.id);
    if (!assegnazione) {
      return res.status(404).json({ message: 'Assegnazione non trovata.' });
    }
    res.status(200).json(assegnazione);
  } catch (error) {
    console.error('Errore nel recupero dell\'assegnazione per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'assegnazione per ID' });
  }
};

// Metodo per aggiornare un'assegnazione
export const updateAssegnazione = async (req, res) => {
  try {
    const [updated] = await Assegnazione.update(req.body, {
      where: { id_assegnazione: req.params.id }
    });

    if (updated) {
      const updatedAssegnazione = await Assegnazione.findByPk(req.params.id);
      return res.status(200).json(updatedAssegnazione);
    }

    res.status(404).json({ message: 'Assegnazione non trovata.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento dell\'assegnazione:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento dell\'assegnazione' });
  }
};

// Metodo per eliminare un'assegnazione
export const deleteAssegnazione = async (req, res) => {
  try {
    const deleted = await Assegnazione.destroy({
      where: { id_assegnazione: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Assegnazione non trovata.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione dell\'assegnazione:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione dell\'assegnazione' });
  }
};