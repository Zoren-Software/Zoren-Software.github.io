# Utilisation des Fonctionnalités de VolleyTrack

## Page d’Accueil

![Page d’Accueil](./images/home.png)

Sur la page d’accueil, vous avez un accès rapide aux trois fonctionnalités principales :

- **Enregistrer des Joueurs**
- **Enregistrer des Équipes**
- **Enregistrer des Entraînements**

## Entraînements

![Entraînements](./images/trainings.png)

Gérez vos entraînements avec les options suivantes :

- **Ajouter** : Créez un nouvel entraînement.
- **Supprimer** : Supprimez des entraînements existants.
- **Rechercher** : Trouvez les entraînements enregistrés.
- **Effacer** : Réinitialisez les critères de recherche pour une nouvelle requête.
- **Filtres Avancés** : Affinez vos recherches avec des filtres tels que :
  - **Équipes** : Filtrer par équipes spécifiques.
  - **Utilisateur** : Identifier qui a effectué des modifications.
  - **Joueurs** : Sélectionner des entraînements impliquant des joueurs spécifiques.
  - **Date de début et de fin** : Définir une période précise pour les entraînements.

### Modifier l'Entraînement / Informations sur l'Entraînement

En cliquant sur **Modifier** sur un entraînement existant, vous serez dirigé vers un formulaire divisé en trois étapes. Naviguez entre les étapes en utilisant les boutons **Précédent** et **Suivant** et, une fois terminé, cliquez sur **Enregistrer**. Vous pouvez également utiliser les boutons **Finaliser l'Entraînement** ou **Annuler l'Entraînement** selon vos besoins.

#### Étape 1 : Informations Essentielles

![Modifier l'Entraînement - Informations Essentielles](./images/training-info-part-1.png)

1.1. **Nom** : Saisissez ou modifiez le nom de l'entraînement pour identification.

1.2. **Date de l'Entraînement** : Sélectionnez la date de l'entraînement en utilisant le sélecteur de date au format **JJ/MM/AAAA**.

1.3. **Heure de Début** : Définissez l'heure de début de l'entraînement au format 12 heures (ex : 4:08 PM).

1.4. **Heure de Fin** : Définissez l'heure de fin de l'entraînement au format 12 heures (ex : 5:08 PM).

1.5. **Description de l'Entraînement** : Ajoutez une description détaillée sur le contenu et les objectifs de l'entraînement.

1.6. **Statut de l'Entraînement** : Sélectionnez le statut actuel de l'entraînement :
   - **PENDING** : Entraînement programmé, pas encore réalisé.
   - **FINISHED** : Entraînement terminé.
   - **CANCELLED** : Entraînement annulé.

1.7. **Fondamentaux** : Gérez les fondamentaux généraux liés à l'entraînement :
   - Visualisez les fondamentaux déjà associés dans le tableau.
   - Supprimez les fondamentaux en cliquant sur l'icône **poubelle** dans la colonne "ACTIONS".

1.8. **Fondamentaux Spécifiques** : Gérez les fondamentaux spécifiques de l'entraînement :
   - Visualisez les fondamentaux spécifiques déjà associés dans le tableau.
   - Supprimez les fondamentaux spécifiques en cliquant sur l'icône **poubelle** dans la colonne "ACTIONS".

1.9. **Associer une Équipe** : Associez une équipe à l'entraînement :
   - Si une équipe est déjà associée, elle sera affichée dans le tableau.
   - Supprimez la relation en cliquant sur l'icône **poubelle** dans la colonne "ACTIONS".

1.10. **Joueurs Associés** : Visualisez les joueurs qui font partie de l'équipe associée :
   - Chaque joueur est affiché avec avatar, nom, téléphone et postes.
   - Les joueurs sont automatiquement inclus lorsqu'une équipe est associée.

1.11. **Joueurs Indépendants** : Ajoutez des joueurs qui ne font pas partie de l'équipe associée :
   - Cliquez sur **"RECHERCHER ET SÉLECTIONNER DES JOUEURS INDÉPENDANTS"** pour ouvrir la recherche.
   - Tapez le nom du joueur dans le champ de recherche.
   - Cliquez sur **"+ Ajouter un Joueur Indépendant"** pour inclure le joueur dans l'entraînement.
   - Les joueurs indépendants ajoutés apparaîtront dans la section "Joueurs Indépendants Ajoutés".

#### Étape 2 : Appel de l'Entraînement

![Modifier l'Entraînement - Appel de l'Entraînement](./images/training-info-part-2.png)

2.1. **Métriques de l'Entraînement - Intention de Présence** : Visualisez les statistiques de confirmation des joueurs :
   - **Confirmés** : Quantité et pourcentage de joueurs qui ont confirmé leur présence.
   - **En Attente** : Quantité et pourcentage de joueurs qui n'ont pas encore répondu.
   - **Rejetés** : Quantité et pourcentage de joueurs qui ont rejeté l'invitation.
   - **Total de Personnes dans l'Équipe** : Nombre total de personnes liées à l'entraînement.

2.2. **Métriques de l'Entraînement - Présence Réelle** : Visualisez les statistiques de présence effective :
   - **Présents** : Quantité et pourcentage de joueurs qui ont assisté.
   - **Absents** : Quantité et pourcentage de joueurs qui n'ont pas assisté.

2.3. **Barres de Progression** : Suivez visuellement les métriques à travers des barres de progression :
   - **Réponses d'Intention de Présence** : Barre orange montrant le pourcentage de réponses reçues.
   - **Présence à l'Entraînement** : Barre verte montrant le pourcentage de présence réelle.

2.4. **Joueurs Associés - Gestion Individuelle** : Pour chaque joueur listé, vous pouvez :
   - Visualiser les informations : nom, poste et téléphone de contact.
   - **Intention de Présence** : 
     - Visualiser le statut actuel (Confirmé, En Attente ou Rejeté).
     - Cliquez sur **"Confirmer"** pour marquer l'intention comme confirmée.
     - Cliquez sur **"Rejeter"** pour marquer l'intention comme rejetée.
   - **Présence Réelle** :
     - Visualiser le statut actuel (Présent ou Absent).
     - Cliquez sur **"Marquer comme Présent"** pour enregistrer la présence.
     - Cliquez sur **"Marquer comme Absent"** pour enregistrer l'absence.

#### Étape 3 : Marquages de Scouts

![Modifier l'Entraînement - Marquages de Scouts](./images/training-info-part-3.png)

3.1. **Sélection de Joueur** : Dans le panneau latéral gauche :
   - Utilisez le filtre **"FILTRER PAR POSTE"** pour filtrer les joueurs par poste spécifique.
   - Sélectionnez un joueur dans la liste pour visualiser et modifier ses scouts.
   - Le joueur sélectionné sera mis en évidence visuellement.

3.2. **Filtre de Fondamentaux** : Dans le panneau supérieur droit :
   - Utilisez le filtre **"FILTRER LES FONDAMENTAUX"** pour vous concentrer sur des fondamentaux spécifiques pendant le marquage.

3.3. **Marquage de Scouts par Fondamentaux** : Pour chaque fondamental (Service, Réception, Attaque, Bloc, Défense, Passe) :
   - **Boutons d'Évaluation** : Cliquez sur les boutons colorés pour enregistrer les actions :
     - **A+** (Vert) : Actions positives/excellentes - incrémente le compteur.
     - **B+** (Jaune) : Actions régulières/neutres - incrémente le compteur.
     - **C+** (Rouge) : Actions négatives/erreurs - incrémente le compteur.
   - **Liste de Résultats** : Visualisez les résultats spécifiques enregistrés :
     - Chaque résultat est affiché avec un indicateur coloré (vert, orange ou rouge).
     - Les résultats sont automatiquement catégorisés selon le type d'action.
   - **Total** : Visualisez le total d'actions enregistrées pour le fondamental.
   - **Commentaires Spécifiques** : Ajoutez des observations techniques spécifiques pour le fondamental dans le champ de texte disponible.

3.4. **Observations Techniques Générales** : En bas de la page :
   - Ajoutez des observations générales sur la performance du joueur dans le champ de texte **"Observations Techniques Générales"**.

![Modifier l'Entraînement - Statistiques de Scouts](./images/training-info-part-3-statistics.png)

3.5. **Visualisation des Statistiques** : En passant à l'onglet **"Statistiques"**, vous aurez accès à :

3.6. **Résumé de l'Évaluation** :
   - **Total d'Évaluations** : Nombre total d'actions enregistrées pour le joueur.
   - **Efficacité (A)** : Pourcentage d'actions classées comme excellentes.
   - **Régulier (B)** : Pourcentage d'actions classées comme régulières.
   - **Erreurs (C)** : Pourcentage d'actions classées comme erreurs.

3.7. **Performance par Fondamentaux** : Visualisez la performance du joueur dans chaque fondamental :
   - Chaque fondamental affiche une barre de progression visuelle.
   - La barre montre la distribution entre actions positives (vert) et régulières/erreurs (orange/rouge).
   - Une valeur numérique indique le nombre total d'actions enregistrées.

3.8. **Graphique Radar** : Visualisez la performance du joueur de manière graphique :
   - Le graphique radar présente six axes, un pour chaque fondamental.
   - Les valeurs numériques sont tracées sur chaque axe.
   - La zone remplie représente le profil de performance global du joueur.

3.9. **Suggestions d'Amélioration** :
   - **Meilleurs Fondamentaux** : Affiche le fondamental avec la meilleure performance et son pourcentage.
   - **Besoin d'Amélioration** : Affiche le fondamental qui nécessite plus d'attention et son pourcentage.

3.10. **Actions Finales** : Utilisez les boutons dans le pied de page :
   - **Enregistrer les Scouts** : Enregistrez les marquages de scouts effectués.
   - **Finaliser l'Entraînement** : Finalisez l'entraînement après avoir terminé tous les marquages.
   - **Annuler l'Entraînement** : Annulez l'entraînement et rejetez les modifications.
   - **Enregistrer** : Enregistrez la progression sans finaliser l'entraînement.



## Équipes

![Équipes](./images/teams.png)

Gérez vos équipes avec les fonctionnalités suivantes :

- **Ajouter** : Créez une nouvelle équipe.
- **Supprimer** : Supprimez des équipes existantes.
- **Rechercher** : Trouvez des équipes enregistrées.
- **Effacer** : Réinitialisez les critères de recherche.
- **Filtres Avancés** : Utilisez des filtres comme :
  - **Postes** : Filtrer les joueurs par poste.
  - **Utilisateur** : Voir qui a effectué des changements.
  - **Joueurs** : Trouver des équipes contenant des joueurs spécifiques.

## Joueurs

![Joueurs](./images/players.png)

Organisez et gérez les joueurs avec les options suivantes :

- **Ajouter** : Enregistrez un nouveau joueur.
- **Supprimer** : Supprimez des joueurs existants.
- **Rechercher** : Trouvez des joueurs enregistrés.
- **Effacer** : Réinitialisez les critères de recherche.
- **Filtres Avancés** : Filtrez par :
  - **Postes** : Rôle dans l’équipe.
  - **Équipes** : Joueurs appartenant à des équipes spécifiques.

### Ajouter un Nouveau Joueur

En cliquant sur **Ajouter**, vous accédez à un formulaire en plusieurs étapes. Utilisez les boutons **Précédent** et **Suivant** pour naviguer. Terminez en cliquant sur **Enregistrer**.

#### 1. Informations Essentielles

![Ajouter Joueur](./images/player-informations-1.png)

1.1. **Nom** : Nom complet du joueur.

1.2. **E-mail** : Adresse e-mail utilisée pour la connexion et la récupération de compte.

#### 2. Informations Personnelles

![Ajouter Joueur](./images/player-informations-2.png)

2.1. **Date de Naissance** : Format **JJ/MM/AAAA**.

2.2. **Téléphone** : Avec indicatif régional, par exemple : **(11) 91234-5678**.

2.3. **CPF** : Numéro sans points ni tirets.

2.4. **RG** : Numéro avec ou sans points, incluant le chiffre de contrôle.

#### 3. Permissions

![Ajouter Joueur](./images/player-permissions.png)

3.1. **Niveau d’Accès** :

- **Entraîneur** : Gère les équipes et les entraînements.
- **Joueur** : Suit ses performances.

#### 4. Poste

![Ajouter Joueur](./images/player-positions.png)

4.1. **Postes** :

- **Central** : Bloqueur et attaquant au centre du filet.
- **Passeur** : Organise le jeu.
- **Libéro** : Défenseur, ne participe pas à l’attaque.
- **Opposé** : Principal attaquant.
- **Réceptionneur-Attaquant** : Appuie l’attaque et la réception.

4.2. **Associer** : Cliquer pour attribuer le poste au joueur. Un joueur peut avoir plusieurs postes.

4.3. **Supprimer** : Cliquez sur l’icône **poubelle** pour retirer une position.

#### 5. Équipes

![Ajouter Joueur](./images/player-teams.png)

5.1. **Équipes** : Sélectionner les équipes du joueur. Cliquez sur **Associer** pour l’ajouter.

Ces fonctionnalités vous permettent de gérer efficacement vos équipes et entraînements dans **VolleyTrack**.
