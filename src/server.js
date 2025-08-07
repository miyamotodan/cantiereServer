import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.config.js';
import userRoutes from './routes/user.routes.js';
import cantiereRoutes from './routes/cantiere.routes.js';
import dittaRoutes from './routes/ditta.routes.js';
import partecipazioneDittaRoutes from './routes/partecipazioneDitta.routes.js';
import operaioRoutes from './routes/operaio.routes.js';
import lavorazioneAnagraficaRoutes from './routes/lavorazioneAnagrafica.routes.js';
import strumentoAnagraficaRoutes from './routes/strumentoAnagrafica.routes.js';
import lavorazioneProgettoRoutes from './routes/lavorazioneProgetto.routes.js';
import pianoLavoroRoutes from './routes/pianoLavoro.routes.js';
import attivitaPianificataRoutes from './routes/attivitaPianificata.routes.js';
import assegnazioneRoutes from './routes/assegnazione.routes.js';
import utilizzoStandardRoutes from './routes/utilizzoStandard.routes.js';

import Ditta from './models/Ditta.js';
import Cantiere from './models/Cantiere.js';
import PartecipazioneDitta from './models/PartecipazioneDitta.js';
import Operaio from './models/Operaio.js';
import LavorazioneAnagrafica from './models/LavorazioneAnagrafica.js';
import StrumentoAnagrafica from './models/StrumentoAnagrafica.js';
import LavorazioneProgetto from './models/LavorazioneProgetto.js';
import PianoLavoro from './models/PianoLavoro.js';
import AttivitaPianificata from './models/AttivitaPianificata.js';
import Assegnazione from './models/Assegnazione.js';
import UtilizzoStandard from './models/UtilizzoStandard.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("API CRUD è in esecuzione. Prova a usare gli endpoint /users");
});

app.use('/users', userRoutes);
app.use('/cantieri', cantiereRoutes);
app.use('/ditte', dittaRoutes);
app.use('/partecipazioni-ditta', partecipazioneDittaRoutes);
app.use('/operai', operaioRoutes);
app.use('/lavorazioni-anagrafica', lavorazioneAnagraficaRoutes);
app.use('/strumenti-anagrafica', strumentoAnagraficaRoutes);
app.use('/lavorazioni-progetto', lavorazioneProgettoRoutes);
app.use('/piani-lavoro', pianoLavoroRoutes);
app.use('/attivita-pianificata', attivitaPianificataRoutes);
app.use('/assegnazioni', assegnazioneRoutes);
app.use('/utilizzi-standard', utilizzoStandardRoutes);


const startServer = async () => {
  try {

    // Definisci le relazioni tra i modelli
    Ditta.belongsToMany(Cantiere, { through: PartecipazioneDitta, foreignKey: 'id_ditta' });
    Cantiere.belongsToMany(Ditta, { through: PartecipazioneDitta, foreignKey: 'id_cantiere' });

    Ditta.hasMany(Operaio, { foreignKey: 'id_ditta' });
    Operaio.belongsTo(Ditta, { foreignKey: 'id_ditta' });
    
    Cantiere.hasMany(LavorazioneProgetto, { foreignKey: 'id_cantiere' });
    LavorazioneProgetto.belongsTo(Cantiere, { foreignKey: 'id_cantiere' });

    LavorazioneAnagrafica.hasMany(LavorazioneProgetto, { foreignKey: 'id_lavorazione_anagrafica' });
    LavorazioneProgetto.belongsTo(LavorazioneAnagrafica, { foreignKey: 'id_lavorazione_anagrafica' });

    Cantiere.hasMany(PianoLavoro, { foreignKey: 'id_cantiere' });
    PianoLavoro.belongsTo(Cantiere, { foreignKey: 'id_cantiere' });

    PianoLavoro.hasMany(AttivitaPianificata, { foreignKey: 'id_piano' });
    AttivitaPianificata.belongsTo(PianoLavoro, { foreignKey: 'id_piano' });

    LavorazioneProgetto.hasMany(AttivitaPianificata, { foreignKey: 'id_lavorazione_progetto' });
    AttivitaPianificata.belongsTo(LavorazioneProgetto, { foreignKey: 'id_lavorazione_progetto' });

    Operaio.hasMany(Assegnazione, { foreignKey: 'id_operaio' });
    Assegnazione.belongsTo(Operaio, { foreignKey: 'id_operaio' });

    AttivitaPianificata.hasMany(Assegnazione, { foreignKey: 'id_attivita' });
    Assegnazione.belongsTo(AttivitaPianificata, { foreignKey: 'id_attivita' });

    PartecipazioneDitta.hasMany(Assegnazione, { foreignKey: 'id_partecipazione_ditta' });
    Assegnazione.belongsTo(PartecipazioneDitta, { foreignKey: 'id_partecipazione_ditta' });

    LavorazioneAnagrafica.hasMany(UtilizzoStandard, { foreignKey: 'id_lavorazione_anagrafica' });
    UtilizzoStandard.belongsTo(LavorazioneAnagrafica, { foreignKey: 'id_lavorazione_anagrafica' });

    StrumentoAnagrafica.hasMany(UtilizzoStandard, { foreignKey: 'id_strumento_anagrafica' });
    UtilizzoStandard.belongsTo(StrumentoAnagrafica, { foreignKey: 'id_strumento_anagrafica' });


    await sequelize.sync({ force: true });
    console.log('Database sincronizzato con successo. Le tabelle sono state create.');

    app.listen(PORT, () => {
      console.log(`Server in ascolto sulla porta ${PORT}`);
    });
  } catch (error) {
    console.error('Impossibile connettersi al database:', error);
  }
};

startServer();