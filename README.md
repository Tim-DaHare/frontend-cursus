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

Gebruik deze kennis om een TodoRow component te maken en plaats deze in het TodoList Component.
Het TodoRow component gaat alle informatie van 1 component weergeven, want het is 1 todo item.

# Props
In React kan je attributen geven aan je componenten, in react noemen ze deze attributen props.
Als je een component props meegeeft kan je deze in het component gebruiken.
Op deze manier geef je props mee aan je componenten: 
```
<MijnComponent 
    mijnProp1="tekst"
    mijnProp2={true}
/>
```
De props komen dan binnen in het component als parameter in de functie of in ```this.props```
Als volgt:
```

```
geef op deze manier aan de TodoRow informatie mee om te tonen. 
