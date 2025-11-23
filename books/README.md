# Gestion de Bibliothèque - Angular 20

## Description
Application Angular 20 en Standalone Components pour gérer une bibliothèque de livres.
Projet d'apprentissage avec CRUD complet (Create/Read/Update/Delete).

## Fonctionnalités réalisées

### Structure du projet
- Classe `Book` avec tous les champs demandés
- 3 composants Standalone : `book-container`, `book-form`, `book-list`
- Communication parent-enfant avec `@Input` et `@Output`

### CRUD complet
- **Create** : Ajouter un nouveau livre
- **Read** : Afficher la liste des livres
- **Update** : Modifier un livre existant
- **Delete** : Supprimer un livre

### Formulaire template-driven
- `[(ngModel)]` pour tous les champs
- Validations avec `required`, `minlength`, `email`, `pattern`
- Messages d'erreur dynamiques avec `*ngIf`
- Style d'erreur avec classe CSS

### Fonctionnalités avancées
- Recherche dynamique par titre/auteur
- Compteurs de livres (total et disponibles)
- Validation : titre pas uniquement de chiffres
- Gestion du stock (optionnel)

## Démarrage

```bash
# Installation des dépendances
npm install

# Lancer l'application
npm start

# Ouvrir http://localhost:4200
```

## Structure des fichiers

```
src/app/
├── models/
│   └── book.model.ts          # Classe Book + catégories
├── components/
│   ├── book-container/         # Composant parent
│   │   ├── book-container.component.ts
│   │   ├── book-container.component.html
│   │   └── book-container.component.css
│   ├── book-form/             # Formulaire ajout/modification
│   │   ├── book-form.component.ts
│   │   ├── book-form.component.html
│   │   └── book-form.component.css
│   └── book-list/             # Liste et actions
│       ├── book-list.component.ts
│       ├── book-list.component.html
│       └── book-list.component.css
├── app.ts                     # Composant principal
└── app.html                   # Template principal
```

## Concepts Angular utilisés

### Standalone Components
- Pas besoin de NgModule
- Import direct des dépendances

### Template-driven Forms
```typescript
<input [(ngModel)]="book.title" #title="ngModel" required>
<div *ngIf="title.invalid && title.dirty">Erreur!</div>
```

### Communication composants
```typescript
// Parent → Enfant
@Input() bookToEdit: Book | null = null;

// Enfant → Parent  
@Output() bookSaved = new EventEmitter<Book>();
```

### Directives structurelles
```html
<tr *ngFor="let book of books">
<div *ngIf="books.length === 0">
```

## Points d'apprentissage

1. **Binding bidirectionnel** : `[(ngModel)]`
2. **Validation de formulaire** : `required`, `minlength`, `email`
3. **Communication parent-enfant** : `@Input`, `@Output`
4. **Gestion d'état local** : tableau de livres
5. **Template Reference Variables** : `#searchInput`
6. **Conditional rendering** : `*ngIf`
7. **Liste dynamique** : `*ngFor`

## Améliorations possibles

- Persistance des données (localStorage)
- Tri par différents critères
- Pagination pour grandes listes
- Animations CSS
- Tests unitaires
- Service pour la gestion des données

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
