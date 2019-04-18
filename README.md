# Project opzetten
Maak een map aan voor het project.
navigeer naar de map in powershell en voer deze commando uit: 
```
git clone https://github.com/Tim-DaHare/frontend-cursus.git
```
Wacht tot het project geclonet is en voer deze commando uit: 
```
npm install
```
Als alle packages zijn geinstalleerd hoef je alleen nog het volgende commando uit te voeren:
```
npm run start
```
Laat dit laatse commando openstaan.

# React components
React componenten zorgen ervoor dat je html code in herbruikbare stukken kunt opstellen.
Zo kan je een nieuw React component maken en exporteren:
```
import React, { Component } from 'react'

const MijnComponent = () => (
    <div>
        <h1>Titel</h1>
        {/* Meer Html etc.. */}
    </div>
)

export default MijnComponent
```
Om dit component dan in een webpagina te gebruiken moet je eerst het component importeren:
```
import TodoList from './components/MijnComponent'
```
En vervolgens in je pagina zetten:
```
<MijnComponent />
```
