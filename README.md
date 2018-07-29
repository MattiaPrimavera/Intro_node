# Intro_node
NodeJS Introduction

## Prerequisiti
- Installazione `NodeJS`
- Installazione `MongoDB`

## Strumenti di sviluppo
- `npm`: Node Package Manager 
- `nodeman`: per programmare e avere il live refresh del codice (salvando il codice sorgente il server si reinizializza da solo, senza doverlo fermare e inizializzare di nuovo)
- uso dello script `start` nel `package.json`:

```bash
npm start
```

## Sviluppo
- Creazione di un server semplice con l'uso di `express`
- Aggiunta di `route`:
  - rinvia **template HTML**
  - rinvia **risposta JSON**
- Connessione al server mongo (che si presuppone gia lanciato)
- `route` che salva dei dati nel database `Mongo`
