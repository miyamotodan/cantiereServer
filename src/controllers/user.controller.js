import User from '../models/User.js';

// Metodo per creare un nuovo utente
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      id: req.body.id,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Errore nella creazione dell\'utente:', error);
    res.status(500).json({ error: 'Errore nella creazione dell\'utente' });
  }
};

// Metodo per trovare tutti gli utenti
export const findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Errore nel recupero degli utenti:', error);
    res.status(500).json({ error: 'Errore nel recupero degli utenti' });
  }
};

// Metodo per trovare un utente per ID
export const findUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Errore nel recupero dell\'utente per ID:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'utente per ID' });
  }
};

// Metodo per aggiornare un utente
export const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      return res.status(200).json(updatedUser);
    }

    res.status(404).json({ message: 'Utente non trovato.' });
  } catch (error) {
    console.error('Errore nell\'aggiornamento dell\'utente:', error);
    res.status(500).json({ error: 'Errore nell\'aggiornamento dell\'utente' });
  }
};

// Metodo per eliminare un utente
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // Risposta 204 indica successo senza contenuto
    }

    res.status(404).json({ message: 'Utente non trovato.' });
  } catch (error) {
    console.error('Errore nell\'eliminazione dell\'utente:', error);
    res.status(500).json({ error: 'Errore nell\'eliminazione dell\'utente' });
  }
};