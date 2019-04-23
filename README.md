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
Je kan een react component zien als een html tag die je zelf kan programmeren.
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
Dit is een function component, dat is eigenlijk een javascript functie die html terug geeft.
Je kan ook een class component maken door een class te maken met een functie genaamd render:
```
import React, { Component } from 'react'

class MijnComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Titel</h1>
                {/* Meer Html etc.. */}
            </div>
        )
    }
}

export default MijnComponent
```
Het verschil tussen function components en class components is dat class components extra mogelijkheden hebben zoals bijvoorbeeld; state en lifecycle callbacks (wordt later uitgelegd). het voordeel van function components is dat je minder code hebt en dus meer overzicht.

Om dit component dan in een webpagina te gebruiken moet je eerst het component importeren:
```
import TodoList from './components/MijnComponent'
```
En vervolgens in je pagina zetten:
```
<MijnComponent />
```

Gebruik deze kennis om een TodoRow function component te maken en plaats deze in het TodoList Component.
Verander daarna het Todolist component van function component naar een class component.
Het TodoRow component gaat alle informatie van 1 Todo weergeven. 
Later gaan we de TodoList vullen met meerdere instanties van TodoRow.

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
const MijnComponent = (props) => {
    const variable1 = props.mijnProp1 /* "tekst" */
    const variable2 = props.mijnProp2 /* true */
    return (
        <div>
            <h1>Titel</h1>
            {/* Meer Html etc.. */}
        </div>
    )
}
```
of in een class component:
```
class MijnComponent extends React.Component {
    render() {
        const variable1 = this.props.mijnProp1 /* "tekst" */
        const variable2 = this.props.mijnProp2 /* true */
        return (
            <div>
                <h1>Titel</h1>
                {/* Meer Html etc.. */}
            </div>
        )
    }
}
```
geef op deze manier de volgende informatie mee aan de TodoRow:
- Titel
- Beschrijving
- Verlopingsdatum/tijd


# Data tonen met JSX
Nu je data heb meegegeven via de props is het tijd om die data te tonen:
```
const MijnComponent = (props) => {
    const variable1 = props.mijnProp1 /* "tekst" */
    const variable2 = props.mijnProp2 /* true */
    return (
        <div>
            <h1>Titel</h1>
            <h1>{variable1}</h1>
            <p>{variable2}</p>
        </div>
    )
}
```
In jsx kan je de variabele die je wilt tonen tussen ```{}``` zetten zoals boven aangegeven.
Toon op deze manier de props in de TodoRow. (Dit werkt voor function components en class components op dezelfde manier.)

Je kan ook checks doen met jsx:
```
const MijnComponent = (props) => {
    const variable1 = props.mijnProp1 /* "tekst" */
    const variable2 = props.mijnProp2 /* true */
    return (
        <div>
            <h1>Titel</h1>
            <h1>{variable1 === "tekst" && variable1}</h1>
            <p>{variable2 && variable2}</p>
        </div>
    )
}
```
Dit werkt omdat (true && expression) altijd gelijk is aan de expression.
Op deze manier wordt de data alleen getoont als de check correct is.
(als dit niet duidelijk is maakt dat niet uit. je kan gewoon verder zonder dit 100% te begrijpen.)

# State
In React kunnen class components een state hebben. de state is eigenlijk een javascript object die kan worden gebruikt om informatie op te slaan over de staat van het component. Dit gaan wij gebruiken om in het Todolist component alle Todo's op te slaan.

Op deze manier stel je een standaard state in:
```
class MijnComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            {/* De Html etc.. */}
        )
    }
}
```

