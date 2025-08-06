import Ditta from '../models/Ditta.js';

// Metodo per creare una nuova ditta
export const createDitta = async (req, res) => {
  try {
    const newDitta = await Ditta.create({
      id_ditta: req.body.id_ditta, // Se vuoi specificare l'ID manualmente
      ragione_sociale: req.body.ragione_sociale,
      partita_iva: req.body.partita_iva,
      telefono: req.body.telefono,
      email: req.body.email,
      indirizzo_sede: req.body.indirizzo_sede,
      attiva: req.body.attiva,
      createdAt: new Date(), // Imposta la data di creazione
      updatedAt: new Date(), // Imposta la data di aggiornamento
    });
    res.status(201).json(newDitta);
  } catch (error) {
    console.error('Errore nella creazione della ditta:', error);
    res.status(500).json({ error: 'Errore nella creazione della ditta' });
  }
};

// Metodo per trovare tutte le ditte
export const findAllDitte = async (req, res) => {
  try {
    const ditte = await Ditta.findAll();
    res.status(200).json(ditte);
  } catch (error) {
    console.error('Errore nel recupero delle ditte:', error);
    res.status(500).json({ error: 'Errore nel recupero delle ditte' });
  }
};

// Metodo per trovare una ditta per ID
export const findDittaById = async (req, res) => {
  try {
    // Usa 'id_ditta' come chiave primaria
    const ditta = await Ditta.findByPk(req.params.id);
    if (!ditta) {
      return res.status(404).json({ message: 'Ditta non trovata.' });
    }
    res.status(200).json(ditta);
  } catch (error) {
    console.error('Errore nel recupero della ditta per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero della ditta per ID' });
  }
};

// Metodo per aggiornare una ditta
export const updateDitta = async (req, res) => {
  try {
    // Aggiorna solo i campi forniti nel body della richiesta
    const [updated] = await Ditta.update(req.body, {
      where: { id_ditta: req.params.id } // Usa 'id_ditta' come chiave primaria
    });

    if (updated) {
      // Recupera la ditta aggiornata per restituirla nella risposta
      const updatedDitta = await Ditta.findByPk(req.params.id);
      return res.status(200).json(updatedDitta);
    }

    res.status(404).json({ message: 'Ditta non trovata.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento della ditta:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento della ditta' });
  }
};

// Metodo per eliminare una ditta
export const deleteDitta = async (req, res) => {
  try {
    const deleted = await Ditta.destroy({
      where: { id_ditta: req.params.id } // Usa 'id_ditta' come chiave primaria
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Ditta non trovata.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione della ditta:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione della ditta' });
  }
};