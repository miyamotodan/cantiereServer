import PianoLavoro from '../models/PianoLavoro.js';

// Metodo per creare un nuovo piano di lavoro
export const createPianoLavoro = async (req, res) => {
  try {
    const newPianoLavoro = await PianoLavoro.create({
      id_cantiere: req.body.id_cantiere,
      nome_piano: req.body.nome_piano,
      versione: req.body.versione,
      stato: req.body.stato
    });
    res.status(201).json(newPianoLavoro);
  } catch (error) {
    console.error('Errore nella creazione del piano di lavoro:', error);
    res.status(500).json({ error: 'Errore nella creazione del piano di lavoro' });
  }
};

// Metodo per trovare tutti i piani di lavoro
export const findAllPianiLavoro = async (req, res) => {
  try {
    const pianiLavoro = await PianoLavoro.findAll();
    res.status(200).json(pianiLavoro);
  } catch (error) {
    console.error('Errore nel recupero dei piani di lavoro:', error);
    res.status(500).json({ error: 'Errore nel recupero dei piani di lavoro' });
  }
};

// Metodo per trovare un piano di lavoro per ID
export const findPianoLavoroById = async (req, res) => {
  try {
    const pianoLavoro = await PianoLavoro.findByPk(req.params.id);
    if (!pianoLavoro) {
      return res.status(404).json({ message: 'Piano di lavoro non trovato.' });
    }
    res.status(200).json(pianoLavoro);
  } catch (error) {
    console.error('Errore nel recupero del piano di lavoro per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero del piano di lavoro per ID' });
  }
};

// Metodo per aggiornare un piano di lavoro
export const updatePianoLavoro = async (req, res) => {
  try {
    const [updated] = await PianoLavoro.update(req.body, {
      where: { id_piano: req.params.id }
    });

    if (updated) {
      const updatedPianoLavoro = await PianoLavoro.findByPk(req.params.id);
      return res.status(200).json(updatedPianoLavoro);
    }

    res.status(404).json({ message: 'Piano di lavoro non trovato.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento del piano di lavoro:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento del piano di lavoro' });
  }
};

// Metodo per eliminare un piano di lavoro
export const deletePianoLavoro = async (req, res) => {
  try {
    const deleted = await PianoLavoro.destroy({
      where: { id_piano: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Piano di lavoro non trovato.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione del piano di lavoro:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione del piano di lavoro' });
  }
};