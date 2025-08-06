import LavorazioneAnagrafica from '../models/LavorazioneAnagrafica.js';

// Metodo per creare una nuova lavorazione anagrafica
export const createLavorazioneAnagrafica = async (req, res) => {
  try {
    const newLavorazioneAnagrafica = await LavorazioneAnagrafica.create({
      id_lavorazione_anagrafica: req.body.id_lavorazione_anagrafica, // Se vuoi specificare l'ID manualmente
      nome_lavorazione: req.body.nome_lavorazione,
      descrizione: req.body.descrizione,
      tipo_categoria: req.body.tipo_categoria,
      livello_rischio_base: req.body.livello_rischio_base,
      durata_standard_ore: req.body.durata_standard_ore,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newLavorazioneAnagrafica);
  } catch (error) {
    console.error('Errore nella creazione della lavorazione anagrafica:', error);
    res.status(500).json({ error: 'Errore nella creazione della lavorazione anagrafica' });
  }
};

// Metodo per trovare tutte le lavorazioni anagrafiche
export const findAllLavorazioniAnagrafica = async (req, res) => {
  try {
    const lavorazioniAnagrafica = await LavorazioneAnagrafica.findAll();
    res.status(200).json(lavorazioniAnagrafica);
  } catch (error) {
    console.error('Errore nel recupero delle lavorazioni anagrafiche:', error);
    res.status(500).json({ error: 'Errore nel recupero delle lavorazioni anagrafiche' });
  }
};

// Metodo per trovare una lavorazione anagrafica per ID
export const findLavorazioneAnagraficaById = async (req, res) => {
  try {
    const lavorazioneAnagrafica = await LavorazioneAnagrafica.findByPk(req.params.id);
    if (!lavorazioneAnagrafica) {
      return res.status(404).json({ message: 'Lavorazione anagrafica non trovata.' });
    }
    res.status(200).json(lavorazioneAnagrafica);
  } catch (error) {
    console.error('Errore nel recupero della lavorazione anagrafica per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero della lavorazione anagrafica per ID' });
  }
};

// Metodo per aggiornare una lavorazione anagrafica
export const updateLavorazioneAnagrafica = async (req, res) => {
  try {
    const [updated] = await LavorazioneAnagrafica.update(req.body, {
      where: { id_lavorazione_anagrafica: req.params.id }
    });

    if (updated) {
      const updatedLavorazioneAnagrafica = await LavorazioneAnagrafica.findByPk(req.params.id);
      return res.status(200).json(updatedLavorazioneAnagrafica);
    }

    res.status(404).json({ message: 'Lavorazione anagrafica non trovata.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento della lavorazione anagrafica:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento della lavorazione anagrafica' });
  }
};

// Metodo per eliminare una lavorazione anagrafica
export const deleteLavorazioneAnagrafica = async (req, res) => {
  try {
    const deleted = await LavorazioneAnagrafica.destroy({
      where: { id_lavorazione_anagrafica: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Lavorazione anagrafica non trovata.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione della lavorazione anagrafica:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione della lavorazione anagrafica' });
  }
};