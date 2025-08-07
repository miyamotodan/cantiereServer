import PartecipazioneDitta from "../models/PartecipazioneDitta.js";

// Metodo per creare una nuova partecipazione ditta
export const createPartecipazioneDitta = async (req, res) => {
  try {
    const newPartecipazioneDitta = await PartecipazioneDitta.create({
      id_ditta: req.body.id_ditta,
      id_cantiere: req.body.id_cantiere,
      data_inizio_partecipazione: new Date(req.body.data_inizio_partecipazione),
      data_fine_partecipazione: req.body.data_fine_partecipazione ? new Date(req.body.data_fine_partecipazione) : null,
      ruolo_ditta: req.body.ruolo_ditta,
      responsabile_cantiere: req.body.responsabile_cantiere,
      budget_assegnato: req.body.budget_assegnato,
      stato_partecipazione: req.body.stato_partecipazione
    });
    res.status(201).json(newPartecipazioneDitta);
  } catch (error) {
    console.error('Errore nella creazione della partecipazione ditta:', error);
    res.status(500).json({ error: 'Errore nella creazione della partecipazione ditta' });
  }
};

// Metodo per trovare tutte le partecipazioni ditta
export const findAllPartecipazioniDitta = async (req, res) => {
  try {
    const partecipazioniDitta = await PartecipazioneDitta.findAll();
    res.status(200).json(partecipazioniDitta);
  } catch (error) {
    console.error('Errore nel recupero delle partecipazioni ditta:', error);
    res.status(500).json({ error: 'Errore nel recupero delle partecipazioni ditta' });
  }
};

// Metodo per trovare una partecipazione ditta per ID
export const findPartecipazioneDittaById = async (req, res) => {
  try {
    const partecipazioneDitta = await PartecipazioneDitta.findByPk(req.params.id);
    if (!partecipazioneDitta) {
      return res.status(404).json({ message: 'Partecipazione ditta non trovata.' });
    }
    res.status(200).json(partecipazioneDitta);
  } catch (error) {
    console.error('Errore nel recupero della partecipazione ditta per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero della partecipazione ditta per ID' });
  }
};

// Metodo per aggiornare una partecipazione ditta
export const updatePartecipazioneDitta = async (req, res) => {
  try {
    const [updated] = await PartecipazioneDitta.update(req.body, {
      where: { id_partecipazione: req.params.id }
    });

    if (updated) {
      const updatedPartecipazioneDitta = await PartecipazioneDitta.findByPk(req.params.id);
      return res.status(200).json(updatedPartecipazioneDitta);
    }

    res.status(404).json({ message: 'Partecipazione ditta non trovata.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento della partecipazione ditta:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento della partecipazione ditta' });
  }
};

// Metodo per eliminare una partecipazione ditta
export const deletePartecipazioneDitta = async (req, res) => {
  try {
    const deleted = await PartecipazioneDitta.destroy({
      where: { id_partecipazione: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Partecipazione ditta non trovata.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione della partecipazione ditta:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione della partecipazione ditta' });
  }
};