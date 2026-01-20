# Entraînements

Gérez vos entraînements efficacement dans VolleyTrack. Esta sección cubre desde el listado hasta la edición completa con marcaciones de scouts.

## 📋 Liste des Entraînements

![Entraînements](./images/trainings.png)

En la pantalla de listado, tienes acceso a las siguientes funcionalidades:

### Funcionalidades Principales

- **Ajouter**: Crea un nuevo entrenamiento.
- **Supprimer**: Elimina entrenamientos existentes.
- **Rechercher**: Encuentra entrenamientos registrados.
- **Effacer**: Restablece los criterios de búsqueda.

### Filtros Avanzados

- **Équipes**: Filtra por equipos específicos.
- **Utilisateur**: Identifica quién realizó cambios.
- **Joueurs**: Selecciona entrenamientos con jugadores específicos.
- **Date de début et de fin**: Define un rango de fechas.

---

## 📅 Enregistrer des Entraînements Futurs

La fonctionnalité **"Enregistrer des Entraînements Futurs"** permet de créer plusieurs entraînements à la fois, facilitant la planification et l'organisation de toute la saison. Cet outil est idéal pour enregistrer des entraînements récurrents basés sur les jours de la semaine et des périodes spécifiques.

![Enregistrer des Entraînements Futurs](./images/register-trainings-future.png)

### Comment Accéder

Sur l'écran de liste des entraînements, cliquez sur le bouton **"Enregistrer des Entraînements Futurs"** (icône de calendrier) situé dans la barre d'actions.

### Section 1 : Informations de Base

#### Équipe

- **Champ Obligatoire** : Sélectionnez l'équipe pour laquelle les entraînements seront créés.
- **Liste Déroulante** : Choisissez l'équipe souhaitée dans la liste déroulante.
- **Important** : Tous les entraînements créés seront associés à l'équipe sélectionnée.

#### Année

- **Champ Obligatoire** : Entrez l'année de référence pour les entraînements.
- **Format** : Entrez l'année au format numérique (ex : 2026).
- **Utilisation** : L'année est utilisée pour organiser et filtrer les entraînements créés.

### Section 2 : Période et Horaires

#### Date de Début

- **Champ Obligatoire** : Sélectionnez la date de début de la période d'entraînements.
- **Format** : JJ/MM/AAAA (ex : 19/01/2026).
- **Sélecteur de Date** : Cliquez sur l'icône de calendrier pour ouvrir le sélecteur de dates.
- **Utilisation** : Définit le premier jour où les entraînements peuvent être créés.

#### Date de Fin

- **Champ Obligatoire** : Sélectionnez la date de fin de la période d'entraînements.
- **Format** : JJ/MM/AAAA (ex : 31/12/2026).
- **Sélecteur de Date** : Cliquez sur l'icône de calendrier pour ouvrir le sélecteur de dates.
- **Utilisation** : Définit le dernier jour où les entraînements peuvent être créés.
- **Note Informatique** : "Les entraînements seront créés dans la période entre les dates sélectionnées"

#### Heure de Début

- **Champ Obligatoire** : Définissez l'heure de début des entraînements.
- **Format** : HH:MM (ex : 18:00).
- **Sélecteur d'Heure** : Cliquez sur l'icône d'horloge pour ouvrir le sélecteur d'heures.
- **Application** : Tous les entraînements créés auront cette heure de début.

#### Heure de Fin

- **Champ Obligatoire** : Définissez l'heure de fin des entraînements.
- **Format** : HH:MM (ex : 19:00).
- **Sélecteur d'Heure** : Cliquez sur l'icône d'horloge pour ouvrir le sélecteur d'heures.
- **Application** : Tous les entraînements créés auront cette heure de fin.

### Section 3 : Jours de la Semaine

Sélectionnez les jours de la semaine où les entraînements doivent être créés :

- **Dimanche** : Cochez pour créer des entraînements le dimanche.
- **Lundi** : Cochez pour créer des entraînements le lundi.
- **Mardi** : Cochez pour créer des entraînements le mardi.
- **Mercredi** : Cochez pour créer des entraînements le mercredi.
- **Jeudi** : Cochez pour créer des entraînements le jeudi.
- **Vendredi** : Cochez pour créer des entraînements le vendredi.
- **Samedi** : Cochez pour créer des entraînements le samedi.

**Astuce** : Vous pouvez sélectionner plusieurs jours de la semaine. Les entraînements ne seront créés que les jours sélectionnés qui tombent dans la période définie.

### Informations Importantes

Le système affiche une note informative expliquant comment les entraînements seront créés automatiquement :

#### Noms des Entraînements

- **Format Automatique** : Les entraînements recevront des noms provisoires au format "Nom de l'entraînement #1", "Nom de l'entraînement #2", etc.
- **Modification Ultérieure** : Vous pourrez modifier le nom de chaque entraînement individuellement dans l'édition de l'entraînement.
- **Personnalisation** : Après la création, modifiez chaque entraînement pour donner des noms plus descriptifs.

#### Descriptions des Entraînements

- **Champ Vide Initialement** : Les entraînements seront créés sans description.
- **Ajout Ultérieur** : Vous pourrez ajouter des descriptions détaillées dans l'édition de chaque entraînement.
- **Recommandation** : Décrivez le contenu et les objectifs de chaque entraînement après la création.

#### Fondamentaux des Entraînements

- **Non Définis Initialement** : Les fondamentaux ne seront pas associés automatiquement.
- **Définition dans l'Édition** : Les fondamentaux doivent être définis individuellement dans l'édition de chaque entraînement.
- **Important** : N'oubliez pas d'associer les fondamentaux pertinents à chaque entraînement après la création.

### Actions du Modal

- **Annuler** : Bouton blanc avec texte gris pour annuler l'opération et fermer le modal sans créer d'entraînements.
- **Enregistrer** : Bouton orange avec texte blanc pour confirmer et créer les entraînements selon les paramètres définis.

### Processus de Création

1. **Validation** : Le système valide tous les champs obligatoires avant de créer les entraînements.
2. **Génération Automatique** : Les entraînements sont créés automatiquement pour chaque jour sélectionné qui tombe dans la période définie.
3. **Statut Initial** : Tous les entraînements sont créés avec le statut "Planifié" (PENDING).
4. **Association** : Tous les entraînements sont automatiquement associés à l'équipe sélectionnée.
5. **Joueurs** : Les joueurs de l'équipe associée sont automatiquement inclus dans chaque entraînement créé.

### Conseils d'Utilisation

- **Planification Annuelle** : Utilisez cette fonctionnalité pour planifier toute la saison en une fois.
- **Entraînements Récurrents** : Idéal pour les entraînements qui ont lieu régulièrement les mêmes jours de la semaine.
- **Personnalisation Ultérieure** : Après avoir créé les entraînements en masse, modifiez chacun individuellement pour ajouter des descriptions, des fondamentaux et d'autres informations spécifiques.
- **Vérification** : Après avoir créé les entraînements, vérifiez la liste pour confirmer que tous ont été créés correctement.
- **Gain de Temps** : Cette fonctionnalité fait gagner beaucoup de temps en évitant la création manuelle de chaque entraînement.

---

## ✏️ Modifier l'Entraînement / Informations sur l'Entraînement

 Modifier l'Entraînement / Informations sur l'Entraînement

En cliquant sur **Modifier** sur un entraînement existant, vous serez dirigé vers un formulaire divisé en trois étapes. Naviguez entre les étapes en utilisant les boutons **Précédent** et **Suivant** et, une fois terminé, cliquez sur **Enregistrer**. Vous pouvez également utiliser les boutons **Finaliser l'Entraînement** ou **Annuler l'Entraînement** selon vos besoins.



---

## 🔙 Navegación

[← Retour à la page d'accueil](./index.md)
