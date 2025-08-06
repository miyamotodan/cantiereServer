import AttivitaPianificata from '../models/AttivitaPianificata.js';

// Metodo per creare una nuova attività pianificata
export const createAttivitaPianificata = async (req, res) => {
  try {
    const newAttivitaPianificata = await AttivitaPianificata.create({
      id_attivita: req.body.id_attivita,
      id_piano: req.body.id_piano,
      id_lavorazione_progetto: req.body.id_lavorazione_progetto,
      data_ora_inizio: new Date(req.body.data_ora_inizio),
      data_ora_fine: new Date(req.body.data_ora_fine),
      note: req.body.note,
      priorita: req.body.priorita,
      stato: req.body.stato,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newAttivitaPianificata);
  } catch (error) {
    console.error('Errore nella creazione dell\'attività pianificata:', error);
    res.status(500).json({ error: 'Errore nella creazione dell\'attività pianificata' });
  }
};

// Metodo per trovare tutte le attività pianificate
export const findAllAttivitaPianificata = async (req, res) => {
  try {
    const attivitaPianificata = await AttivitaPianificata.findAll();
    res.status(200).json(attivitaPianificata);
  } catch (error) {
    console.error('Errore nel recupero delle attività pianificate:', error);
    res.status(500).json({ error: 'Errore nel recupero delle attività pianificate' });
  }
};

// Metodo per trovare un'attività pianificata per ID
export const findAttivitaPianificataById = async (req, res) => {
  try {
    const attivitaPianificata = await AttivitaPianificata.findByPk(req.params.id);
    if (!attivitaPianificata) {
      return res.status(404).json({ message: 'Attività pianificata non trovata.' });
    }
    res.status(200).json(attivitaPianificata);
  } catch (error) {
    console.error('Errore nel recupero dell\'attività pianificata per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'attività pianificata per ID' });
  }
};

// Metodo per aggiornare un'attività pianificata
export const updateAttivitaPianificata = async (req, res) => {
  try {
    const [updated] = await AttivitaPianificata.update(req.body, {
      where: { id_attivita: req.params.id }
    });

    if (updated) {
      const updatedAttivitaPianificata = await AttivitaPianificata.findByPk(req.params.id);
      return res.status(200).json(updatedAttivitaPianificata);
    }

    res.status(404).json({ message: 'Attività pianificata non trovata.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento dell\'attività pianificata:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento dell\'attività pianificata' });
  }
};

// Metodo per eliminare un'attività pianificata
export const deleteAttivitaPianificata = async (req, res) => {
  try {
    const deleted = await AttivitaPianificata.destroy({
      where: { id_attivita: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Attività pianificata non trovata.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione dell\'attività pianificata:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione dell\'attività pianificata' });
  }
};