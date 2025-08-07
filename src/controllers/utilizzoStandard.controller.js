import UtilizzoStandard from '../models/UtilizzoStandard.js';

// Metodo per creare un nuovo utilizzo standard
export const createUtilizzoStandard = async (req, res) => {
  try {
    const newUtilizzoStandard = await UtilizzoStandard.create({
      id_lavorazione_anagrafica: req.body.id_lavorazione_anagrafica,
      id_strumento_anagrafica: req.body.id_strumento_anagrafica,
      quantita_standard: req.body.quantita_standard,
      obbligatorio_standard: req.body.obbligatorio_standard,
      modalita_utilizzo_standard: req.body.modalita_utilizzo_standard,
      note: req.body.note
    });
    res.status(201).json(newUtilizzoStandard);
  } catch (error) {
    console.error('Errore nella creazione dell\'utilizzo standard:', error);
    res.status(500).json({ error: 'Errore nella creazione dell\'utilizzo standard' });
  }
};

// Metodo per trovare tutti gli utilizzi standard
export const findAllUtilizziStandard = async (req, res) => {
  try {
    const utilizziStandard = await UtilizzoStandard.findAll();
    res.status(200).json(utilizziStandard);
  } catch (error) {
    console.error('Errore nel recupero degli utilizzi standard:', error);
    res.status(500).json({ error: 'Errore nel recupero degli utilizzi standard' });
  }
};

// Metodo per trovare un utilizzo standard per ID
export const findUtilizzoStandardById = async (req, res) => {
  try {
    const utilizzoStandard = await UtilizzoStandard.findByPk(req.params.id);
    if (!utilizzoStandard) {
      return res.status(404).json({ message: 'Utilizzo standard non trovato.' });
    }
    res.status(200).json(utilizzoStandard);
  } catch (error) {
    console.error('Errore nel recupero dell\'utilizzo standard per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'utilizzo standard per ID' });
  }
};

// Metodo per aggiornare un utilizzo standard
export const updateUtilizzoStandard = async (req, res) => {
  try {
    const [updated] = await UtilizzoStandard.update(req.body, {
      where: { id_utilizzo_standard: req.params.id }
    });

    if (updated) {
      const updatedUtilizzoStandard = await UtilizzoStandard.findByPk(req.params.id);
      return res.status(200).json(updatedUtilizzoStandard);
    }

    res.status(404).json({ message: 'Utilizzo standard non trovato.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento dell\'utilizzo standard:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento dell\'utilizzo standard' });
  }
};

// Metodo per eliminare un utilizzo standard
export const deleteUtilizzoStandard = async (req, res) => {
  try {
    const deleted = await UtilizzoStandard.destroy({
      where: { id_utilizzo_standard: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Utilizzo standard non trovato.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione dell\'utilizzo standard:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione dell\'utilizzo standard' });
  }
};