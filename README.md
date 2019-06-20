# Introductie
In deze cursus gaan we een todo website bouwen.
Op deze pagina is alle kennis beschreven die je nodig hebt om de site te bouwen, maar mocht je vast komen te zitten kan je altijd naar de code in dit project kijken.

# Project opzetten
navigeer naar de map in powershell of command prompt en voer deze commando uit: 
```JavaScript
npx create-react-app todolist_app
```
Dit commando genereert een map 'todolist app'.
Als het project is geinstalleerd hoef je alleen nog het volgende commando uit te voeren:
```JavaScript
npm run start
```
Laat dit laatse commando openstaan.
Er wordt nu een browser tab geopent met het standaard React scherm.
Open nu het bestand App.js in het gegenereerde project.

# React components
React componenten zorgen ervoor dat je html code in herbruikbare stukken kunt opstellen.
Je kan een react component zien als een html tag die je zelf kan programmeren.
Zo kan je een nieuw React component maken en exporteren, maak een nieuw bestand met .jsx als bestandsextensie en vul in:
```JavaScript
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
```JavaScript
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
```JavaScript
import MijnComponent from './components/MijnComponent'
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
```JavaScript
<MijnComponent 
    mijnProp1="tekst"
    mijnProp2={true}
/>
```
De props komen dan binnen in het component als parameter in de functie of in `this.props`
in een function component:
```JavaScript
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
```JavaScript
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

* je kan ook functies meegeven als props of parameters in javascript.


# Data tonen met JSX
Nu je data heb meegegeven via de props is het tijd om die data te tonen:
```JavaScript
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
```JavaScript
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
Op deze manier wordt de data alleen getoont als de check true is.
(als dit niet duidelijk is maakt dat niet uit. je kan gewoon verder zonder dit compleet te begrijpen.)

# State
In React kunnen class components een state hebben. de state is eigenlijk een javascript object die kan worden gebruikt om informatie op te slaan over de staat van het component. Dit gaan wij gebruiken om in het Todolist component alle Todo's op te slaan.

Op deze manier stel je een standaard state in en toon je de data uit de state:
```JavaScript
class MijnComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            voorbeeld1: "voorbeeld1",
            aantalVoorbeelden: 2
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.voorbeeld1}</h1>
                <p>{this.state.aantalVoorbeelden}</p>
            </div>
        )
    }
}
```
maak op deze manier een state in het TodoList component en zet in de state een array met meerdere todo's. elke todo heeft de volgende informatie:
- Id
- Titel
- Beschrijving
- Verlopingsdatum/tijd
- Status (bijv: Open, Voltooid, Gearchiveerd)

Om de state aan te passen **moet** je de setState functie gebruiken van react, het handige hiervan is dat je alleen de setState function hoeft op te roepen en alle informatie word gelijk getoont in de componenten.

setState() voorbeeld:
```JavaScript
class MijnComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            voorbeeld1: "voorbeeld1",
            aantalVoorbeelden: 1
        }
    }
    
    render() {
        const aantalVoorbeelden = this.state.aantalVoorbeelden
        return (
            <div>
                <h1>{this.state.voorbeeld1}</h1>
                <p>{this.state.aantalVoorbeelden}</p>
                <button 
                    onClick={() => this.setState({...this.state, aantalVoorbeelden: aantalVoorbeelden +1})}
                >
                    Aantal voorbeelden +1
                </button>
            </div>
        )
    }
}
```
Er wordt hier een knop toegevoegd die bij elke klik 1 optelt bij het totaal aantal van "aantalVoorbeelden".
Omdat de setState functie de hele state vervangt moeten we de spread operator gebruiken: ```...``` dit kopieert alles uit de huidige state, vervolgens tellen we 1 op bij aantalVoorbeelden en dus word die waarde overschreven.

Maak nu een simpel formulier onder de TodoList om alle informatie in te vullen voor een nieuwe todo en deze in de state te zetten.
```JavaScript
<form onSubmit={this.handleSubmit}>
    <input name="title" type="text" placeholder="Titel"/> <br/>
    <input name="description" type="text" placeholder="Beschrijving"/> <br/>
    Verlopingsdatum <input name="due_date" type="date" /><br/>
    <input type="submit" value="Submit" />
</form>
```
Dit is een sjabloon wat je kunt gebruiken voor het formulier, het is aangeraden om dit in een apart component te zetten.
Let op de onSubmit prop, dit is de functie die aangeroepen wordt als de submit knop word ingedrukt(alle waardes worden meegegeven).

Maak nu een functie die alle waardes uit het formulier opslaan in een nieuwe todo in de state van de todolist met gebruik van de setState functie. vergeet niet in de handleSubmit een verwijzing naar deze functie te zetten.

# Overige functionaliteiten
De volgende dingen die nog moeten gebeuren zijn:
- Een openklapbaar overzicht waar de details van de todo in staan.
- In het overzicht moeten 3 knoppen komen; open, archiveren, verwijderen. De onClick prop van deze knop moet een functie zijn   die de todo een status geeft.
- Een dropdown met opties om op te sorteren. De waarde van deze dropdown moet in de todolist state worden opgeslagen.

De kennis die je nodig hebt om deze dingen te bouwen is nu tot je beschikking.
Het is misschien nog handig om te kijken naar de volgende bronnen:\
https://reactjs.org/docs/conditional-rendering.html \
https://reactjs.org/docs/lists-and-keys.html \
De laatste is vooral belangrijk omdat hier wordt uitgelegd hoe je door een array kan loopen met behulp van Array.map
en dat heb je nodig om de array van todo's te renderen die in de todolist state staat.

Als je vast komt te zitten kun je altijd kijken naar de bestanden in deze repository, ik heb zelf hier een werkende todolist gecommit.
