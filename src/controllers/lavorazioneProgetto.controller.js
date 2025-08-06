import LavorazioneProgetto from '../models/LavorazioneProgetto.js';

// Metodo per creare una nuova lavorazione di progetto
export const createLavorazioneProgetto = async (req, res) => {
  try {
    const newLavorazioneProgetto = await LavorazioneProgetto.create({
      id_lavorazione_progetto: req.body.id_lavorazione_progetto,
      id_cantiere: req.body.id_cantiere,
      id_lavorazione_anagrafica: req.body.id_lavorazione_anagrafica,
      nome_specifico: req.body.nome_specifico,
      durata_stimata_ore: req.body.durata_stimata_ore,
      livello_rischio_progetto: req.body.livello_rischio_progetto,
      note_specifiche: req.body.note_specifiche,
      attiva: req.body.attiva,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newLavorazioneProgetto);
  } catch (error) {
    console.error('Errore nella creazione della lavorazione di progetto:', error);
    res.status(500).json({ error: 'Errore nella creazione della lavorazione di progetto' });
  }
};

// Metodo per trovare tutte le lavorazioni di progetto
export const findAllLavorazioniProgetto = async (req, res) => {
  try {
    const lavorazioniProgetto = await LavorazioneProgetto.findAll();
    res.status(200).json(lavorazioniProgetto);
  } catch (error) {
    console.error('Errore nel recupero delle lavorazioni di progetto:', error);
    res.status(500).json({ error: 'Errore nel recupero delle lavorazioni di progetto' });
  }
};

// Metodo per trovare una lavorazione di progetto per ID
export const findLavorazioneProgettoById = async (req, res) => {
  try {
    const lavorazioneProgetto = await LavorazioneProgetto.findByPk(req.params.id);
    if (!lavorazioneProgetto) {
      return res.status(404).json({ message: 'Lavorazione di progetto non trovata.' });
    }
    res.status(200).json(lavorazioneProgetto);
  } catch (error) {
    console.error('Errore nel recupero della lavorazione di progetto per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero della lavorazione di progetto per ID' });
  }
};

// Metodo per aggiornare una lavorazione di progetto
export const updateLavorazioneProgetto = async (req, res) => {
  try {
    const [updated] = await LavorazioneProgetto.update(req.body, {
      where: { id_lavorazione_progetto: req.params.id }
    });

    if (updated) {
      const updatedLavorazioneProgetto = await LavorazioneProgetto.findByPk(req.params.id);
      return res.status(200).json(updatedLavorazioneProgetto);
    }

    res.status(404).json({ message: 'Lavorazione di progetto non trovata.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento della lavorazione di progetto:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento della lavorazione di progetto' });
  }
};

// Metodo per eliminare una lavorazione di progetto
export const deleteLavorazioneProgetto = async (req, res) => {
  try {
    const deleted = await LavorazioneProgetto.destroy({
      where: { id_lavorazione_progetto: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Lavorazione di progetto non trovata.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione della lavorazione di progetto:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione della lavorazione di progetto' });
  }
};