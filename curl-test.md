## users

curl -X POST \
  http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"username": "Mario Rossi", "email": "mario.rossi@example.com", "insertedAt":"01/12/2024", "updatedAt":"12/03/2025"}'
  
curl -X PUT \
  http://localhost:3000/users/2 \
  -H "Content-Type: application/json" \
  -d '{"username": "Mario Antonio Rossi", "email": "mario.rossi@mail.com", "insertedAt":"01/12/2024", "updatedAt":"05/08/2025"}'
  
## cantieri

curl -X POST \
  http://localhost:3000/cantieri \
  -H "Content-Type: application/json" \
  -d '{"nome": "Cantiere test 1", "indirizzo":"via le mani dal naso 1", "data_inizio":"05/08/2025", "data_fine_prevista":"31/12/2025", "descrizione":"cantiere di test", "stato":"aperto", "tipologia":"albergo"}'
  
curl -X PUT \
  http://localhost:3000/cantieri/1 \
  -H "Content-Type: application/json" \
  -d '{"nome": "Cantiere test 1a", "indirizzo":"via le mani dal naso 1", "data_inizio":"05/08/2025", "data_fine_prevista":"31/12/2025", "descrizione":"cantiere di test", "stato":"aperto", "tipologia":"albergo"}'  

curl -X DELETE http://localhost:3000/cantieri/1

## ditte

curl -X POST \
  http://localhost:3000/ditte \
  -H "Content-Type: application/json" \
  -d '{"ragione_sociale": "Ditta test 1", "partita_iva":"0000040400", "telefono":"06-01010101", "email":"ditta1@ail.com", "indirizzo_sede":"vieni via con me 1", "attiva":"si"}'

## partecipazioni-ditta

curl -X POST \
  http://localhost:3000/partecipazioni-ditta \
  -H "Content-Type: application/json" \
  -d '{"id_ditta": 1, "id_cantiere":2, "data_inizio_partecipazione":"2025/08/01", "data_fine_partecipazione":null, "ruolo_ditta":"subappalto", "responsabile_cantiere":"ing. C. Rossi", "budget_assegnato":0, "stato_partecipazione":"attiva"}'

## operai

curl -X POST \
  http://localhost:3000/operai \
  -H "Content-Type: application/json" \
  -d '{
    "id_ditta": 1,
    "nome": "Luca",
    "cognome": "Verdi",
    "codice_fiscale": "MRORSS80A01H501Z",
    "telefono": "3331234567",
    "email": "luca.verdi@ditta.it",
    "data_nascita": "1980-01-01",
    "qualifiche": "muratore,carpentiere",
    "attivo": true
  }'
  
## lavorazioni-anagrafica

curl -X POST \
  http://localhost:3000/lavorazioni-anagrafica \
  -H "Content-Type: application/json" \
  -d '{
    "nome_lavorazione": "Posa pavimenti in ceramica",
    "descrizione": "Installazione di pavimenti in ceramica per interni ed esterni.",
    "tipo_categoria": "Finiture",
    "livello_rischio_base": 3,
    "durata_standard_ore": 8
  }'

## strumenti-anagrafica

curl -X POST \
  http://localhost:3000/strumenti-anagrafica \
  -H "Content-Type: application/json" \
  -d '{
    "nome_strumento": "Trapano a percussione",
    "tipo": "Elettrico",
    "categoria": "Utensili",
    "richiede_certificazione": false,
    "descrizione_uso": "Utilizzato per forare superfici dure come calcestruzzo e muratura.",
    "specifiche_tecniche": "Potenza 800W, 3000 RPM"
  }'  
  
## lavorazioni-progetto

curl -X POST \
  http://localhost:3000/lavorazioni-progetto \
  -H "Content-Type: application/json" \
  -d '{
    "id_cantiere": 2,
    "id_lavorazione_anagrafica": 1,
    "nome_specifico": "Posa pavimenti in ceramica piano terra",
    "durata_stimata_ore": 12,
    "livello_rischio_progetto": 4,
    "note_specifiche": "Utilizzare piastrelle 60x60 cm, finitura opaca.",
    "attiva": true
  }'
  
## piani-lavoro

curl -X POST \
  http://localhost:3000/piani-lavoro \
  -H "Content-Type: application/json" \
  -d '{
    "id_cantiere": 1,
    "nome_piano": "Piano di Lavoro per la Posa del Tetto",
    "versione": 1,
    "stato": "Bozza"
  }'
  
## attivita-pianificata

curl -X POST \
  http://localhost:3000/attivita-pianificata \
  -H "Content-Type: application/json" \
  -d '{
    "id_piano": 1,
    "id_lavorazione_progetto": 1,
    "data_ora_inizio": "2025-08-06T09:00:00Z",
    "data_ora_fine": "2025-08-06T17:00:00Z",
    "note": "Preparazione area e installazione delle impalcature.",
    "priorita": "Alta",
    "stato": "Pianificata"
  }'
  
## assegnazioni
  
curl -X POST \
  http://localhost:3000/assegnazioni \
  -H "Content-Type: application/json" \
  -d '{
    "id_operaio": 1,
    "id_attivita": 1,
    "id_partecipazione_ditta": 1,
    "notifica_inviata": "2025-08-06T10:00:00Z",
    "confermata": false,
    "note_operaio": "Assegnazione in attesa di conferma da operaio."
  }'
 
## utilizzi-standard 

curl -X POST \
  http://localhost:3000/utilizzi-standard \
  -H "Content-Type: application/json" \
  -d '{
    "id_lavorazione_anagrafica": 1,
    "id_strumento_anagrafica": 1,
    "quantita_standard": 1,
    "obbligatorio_standard": true,
    "modalita_utilizzo_standard": "Utilizzo per la foratura di precisione.",
    "note": "Verificare lo stato della punta prima di usarlo."
  }'