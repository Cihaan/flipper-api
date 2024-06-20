# Flipper APi

## Description

This is a simple API that allows you to manage your flipper machines. You can create, update, delete and list flipper machines.

## Model opinions

### Make

Le modèle du flipper est le suivant :

```ts
interface IMake {
  name: string;
  description: string;
  logo_url: string;
  guide_url: string;
}
```

Il a été décidé que le modèle du flipper serait un objet imbriqué dans le modèle de la machine. Cela permet de simplifier la gestion des machines et de leurs modèles.

Accessoirement, les images sont stockés sous forme d'URLs. Cela permet de simplifier la gestion des images et de ne pas surcharger la base de données. De plus, cela permet de gérer les images de manière plus efficace.

### Flipper

Le modèle du flipper est le suivant :

```ts
interface ICarasteristics {
  release_date: string;
  grade: number;
}

interface IFlipper {
  name: string;
  price: number;
  state: string;
  make: Types.ObjectId;
  caracteristics: ICarasteristics;
  front_image: string;
  back_image: string;
  side_image: string;
}
```

Les propriétés du flipper ont été définis en accordance avec les besoins de l'application. Les images sont stockés sous forme d'URLs pour les mêmes raisons que pour le modèle du flipper.

Remarque: Le modèle du flipper est un objet imbriqué dans le modèle de la machine. Cela permet de simplifier la gestion des machines et de leurs modèles.

## Axes d'amélioration

### Search de Flipper

Pour améliorer la recherche de flipper, il serait pértinent d'ajouter des filtres commme:

- release_date
- grade
- price

Cela permettrait de faciliter la recherche de manière plus affinées de flipper et de trouver plus facilement le flipper qui correspond aux besoins de l'utilisateur.

### Accéler présentation en liste des Flipper

Pour améliorer la présentation des flipper en liste, il serait pértinent de retourner les flippers sous forme de pagination. Cela permettrait de limiter le nombre de flippers retournés et de faciliter la navigation de l'utilisateur.

De plus, il serait intéressant de ne pas retourner les détails du flippers comme les images et la marque. Cela permettrait de limiter la taille des données retournées et de faciliter le traitement des données, ils pourraient être retournés dans un second appel avec un Get One.


## Installation

```sh
npm install
```

## Running the app

```sh
npm run dev
```