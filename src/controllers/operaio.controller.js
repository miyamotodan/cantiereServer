import Operaio from '../models/Operaio.js';

// Metodo per creare un nuovo operaio
export const createOperaio = async (req, res) => {
  try {
    const newOperaio = await Operaio.create({
      id_ditta: req.body.id_ditta,
      nome: req.body.nome,
      cognome: req.body.cognome,
      codice_fiscale: req.body.codice_fiscale,
      telefono: req.body.telefono,
      email: req.body.email,
      data_nascita: req.body.data_nascita ? new Date(req.body.data_nascita) : null,
      qualifiche: req.body.qualifiche,
      attivo: req.body.attivo
    });
    res.status(201).json(newOperaio);
  } catch (error) {
    console.error('Errore nella creazione dell\'operaio:', error);
    res.status(500).json({ error: 'Errore nella creazione dell\'operaio' });
  }
};

// Metodo per trovare tutti gli operai
export const findAllOperai = async (req, res) => {
  try {
    const operai = await Operaio.findAll();
    res.status(200).json(operai);
  } catch (error) {
    console.error('Errore nel recupero degli operai:', error);
    res.status(500).json({ error: 'Errore nel recupero degli operai' });
  }
};

// Metodo per trovare un operaio per ID
export const findOperaioById = async (req, res) => {
  try {
    const operaio = await Operaio.findByPk(req.params.id);
    if (!operaio) {
      return res.status(404).json({ message: 'Operaio non trovato.' });
    }
    res.status(200).json(operaio);
  } catch (error) {
    console.error('Errore nel recupero dell\'operaio per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'operaio per ID' });
  }
};

// Metodo per aggiornare un operaio
export const updateOperaio = async (req, res) => {
  try {
    const [updated] = await Operaio.update(req.body, {
      where: { id_operaio: req.params.id }
    });

    if (updated) {
      const updatedOperaio = await Operaio.findByPk(req.params.id);
      return res.status(200).json(updatedOperaio);
    }

    res.status(404).json({ message: 'Operaio non trovato.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento dell\'operaio:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento dell\'operaio' });
  }
};

// Metodo per eliminare un operaio
export const deleteOperaio = async (req, res) => {
  try {
    const deleted = await Operaio.destroy({
      where: { id_operaio: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Operaio non trovato.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione dell\'operaio:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione dell\'operaio' });
  }
};