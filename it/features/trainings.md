# Allenamenti

Gestisci i tuoi allenamenti con efficienza in VolleyTrack. Esta sección cubre desde el listado hasta la edición completa con marcaciones de scouts.

## 📋 Elenco Allenamenti

![Allenamenti](./images/trainings.png)

En la pantalla de listado, tienes acceso a las siguientes funcionalidades:

### Funcionalidades Principales

- **Aggiungi**: Crea un nuevo entrenamiento.
- **Elimina**: Elimina entrenamientos existentes.
- **Cerca**: Encuentra entrenamientos registrados.
- **Pulisci**: Restablece los criterios de búsqueda.

### Filtros Avanzados

- **Squadre**: Filtra por equipos específicos.
- **Utente**: Identifica quién realizó cambios.
- **Giocatori**: Selecciona entrenamientos con jugadores específicos.
- **Data di Inizio e Fine**: Define un rango de fechas.

---

## 📅 Registrare Allenamenti Futuri

La funzionalità **"Registrare Allenamenti Futuri"** consente di creare più allenamenti contemporaneamente, facilitando la pianificazione e l'organizzazione dell'intera stagione. Questo strumento è ideale per registrare allenamenti ricorrenti basati sui giorni della settimana e periodi specifici.

![Registrare Allenamenti Futuri](./images/register-trainings-future.png)

### Come Accedere

Nella schermata di elenco degli allenamenti, fai clic sul pulsante **"Registrare Allenamenti Futuri"** (icona calendario) situato nella barra delle azioni.

### Sezione 1: Informazioni di Base

#### Squadra

- **Campo Obbligatorio**: Seleziona la squadra per la quale verranno creati gli allenamenti.
- **Menu a Tendina**: Scegli la squadra desiderata dal menu a tendina.
- **Importante**: Tutti gli allenamenti creati saranno associati alla squadra selezionata.

#### Anno

- **Campo Obbligatorio**: Inserisci l'anno di riferimento per gli allenamenti.
- **Formato**: Inserisci l'anno in formato numerico (es: 2026).
- **Utilizzo**: L'anno viene utilizzato per organizzare e filtrare gli allenamenti creati.

### Sezione 2: Periodo e Orari

#### Data di Inizio

- **Campo Obbligatorio**: Seleziona la data di inizio del periodo di allenamenti.
- **Formato**: GG/MM/AAAA (es: 19/01/2026).
- **Selettore Data**: Fai clic sull'icona del calendario per aprire il selettore date.
- **Utilizzo**: Definisce il primo giorno in cui possono essere creati gli allenamenti.

#### Data di Fine

- **Campo Obbligatorio**: Seleziona la data di fine del periodo di allenamenti.
- **Formato**: GG/MM/AAAA (es: 31/12/2026).
- **Selettore Data**: Fai clic sull'icona del calendario per aprire il selettore date.
- **Utilizzo**: Definisce l'ultimo giorno in cui possono essere creati gli allenamenti.
- **Nota Informativa**: "Gli allenamenti verranno creati nel periodo tra le date selezionate"

#### Orario di Inizio

- **Campo Obbligatorio**: Definisci l'orario di inizio degli allenamenti.
- **Formato**: HH:MM (es: 18:00).
- **Selettore Orario**: Fai clic sull'icona dell'orologio per aprire il selettore orari.
- **Applicazione**: Tutti gli allenamenti creati avranno questo orario di inizio.

#### Orario di Fine

- **Campo Obbligatorio**: Definisci l'orario di fine degli allenamenti.
- **Formato**: HH:MM (es: 19:00).
- **Selettore Orario**: Fai clic sull'icona dell'orologio per aprire il selettore orari.
- **Applicazione**: Tutti gli allenamenti creati avranno questo orario di fine.

### Sezione 3: Giorni della Settimana

Seleziona i giorni della settimana in cui devono essere creati gli allenamenti:

- **Domenica**: Seleziona per creare allenamenti la domenica.
- **Lunedì**: Seleziona per creare allenamenti il lunedì.
- **Martedì**: Seleziona per creare allenamenti il martedì.
- **Mercoledì**: Seleziona per creare allenamenti il mercoledì.
- **Giovedì**: Seleziona per creare allenamenti il giovedì.
- **Venerdì**: Seleziona per creare allenamenti il venerdì.
- **Sabato**: Seleziona per creare allenamenti il sabato.

**Suggerimento**: Puoi selezionare più giorni della settimana. Gli allenamenti verranno creati solo nei giorni selezionati che cadono nel periodo definito.

### Informazioni Importanti

Il sistema visualizza una nota informativa che spiega come verranno creati automaticamente gli allenamenti:

#### Nomi degli Allenamenti

- **Formato Automatico**: Gli allenamenti riceveranno nomi provvisori nel formato "Nome allenamento #1", "Nome allenamento #2", ecc.
- **Modifica Successiva**: Potrai modificare il nome di ogni allenamento individualmente nella modifica dell'allenamento.
- **Personalizzazione**: Dopo la creazione, modifica ogni allenamento per dare nomi più descrittivi.

#### Descrizioni degli Allenamenti

- **Campo Vuoto Inizialmente**: Gli allenamenti verranno creati senza descrizione.
- **Aggiunta Successiva**: Potrai aggiungere descrizioni dettagliate nella modifica di ogni allenamento.
- **Raccomandazione**: Descrivi il contenuto e gli obiettivi di ogni allenamento dopo la creazione.

#### Fondamentali degli Allenamenti

- **Non Definiti Inizialmente**: I fondamentali non saranno associati automaticamente.
- **Definizione nella Modifica**: I fondamentali devono essere definiti individualmente nella modifica di ogni allenamento.
- **Importante**: Ricorda di associare i fondamentali rilevanti a ogni allenamento dopo la creazione.

### Azioni del Modal

- **Annulla**: Pulsante bianco con testo grigio per annullare l'operazione e chiudere il modal senza creare allenamenti.
- **Registra**: Pulsante arancione con testo bianco per confermare e creare gli allenamenti secondo le impostazioni definite.

### Processo di Creazione

1. **Validazione**: Il sistema valida tutti i campi obbligatori prima di creare gli allenamenti.
2. **Generazione Automatica**: Gli allenamenti vengono creati automaticamente per ogni giorno selezionato che cade nel periodo definito.
3. **Stato Iniziale**: Tutti gli allenamenti vengono creati con stato "Programmato" (PENDING).
4. **Associazione**: Tutti gli allenamenti vengono automaticamente associati alla squadra selezionata.
5. **Giocatori**: I giocatori della squadra associata vengono automaticamente inclusi in ogni allenamento creato.

### Suggerimenti d'Uso

- **Pianificazione Annuale**: Usa questa funzionalità per pianificare l'intera stagione in una volta.
- **Allenamenti Ricorrenti**: Ideale per allenamenti che si svolgono regolarmente negli stessi giorni della settimana.
- **Personalizzazione Successiva**: Dopo aver creato gli allenamenti in massa, modifica ciascuno individualmente per aggiungere descrizioni, fondamentali e altre informazioni specifiche.
- **Verifica**: Dopo aver creato gli allenamenti, verifica l'elenco per confermare che tutti siano stati creati correttamente.
- **Risparmio di Tempo**: Questa funzionalità fa risparmiare molto tempo evitando la creazione manuale di ogni allenamento.

---

## ✏️ Modifica Allenamento / Informazioni Allenamento

 Modifica Allenamento / Informazioni Allenamento

Cliccando su **Modifica** su un allenamento esistente, verrai indirizzato a un modulo diviso in tre fasi. Naviga tra le fasi usando i pulsanti **Precedente** e **Successivo** e, al termine, clicca su **Salva**. Puoi anche usare i pulsanti **Finalizza Allenamento** o **Annulla Allenamento** secondo necessità.



---

## 🔙 Navegación

[← Torna alla pagina iniziale](./index.md)
