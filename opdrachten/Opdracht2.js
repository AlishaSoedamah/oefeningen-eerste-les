import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Opdracht2() {
    // Hier heb je ruimte voor JavaScript code
    // Je kunt variabelen printen in de view door in een <Text> component {'naam-variabele'} te plaatsen
    // zie hieronder een voorbeeld
    // OPDRACHT: Maak een object (persoon) met informatie over jezelf zoals:
    // naam, leeftijd, opleiding, favoriete game en serie.
    // Zie deze EagleDev voor meer info over objecten: https://eagledev.nl/tasks/705 
    // OPDRACHT: print met <Text> componenten de waardes van je object op je scherm
    // OPDRACHT: geef de <Text> componenten een mooie styling
    let person = {
      personName:'Alisha',
      personAge:'16',
      personOpleiding:'Software Dev',
      personGame: 'Persona 5',
      personSeries:'Devilman Crybaby',
}
    let printString = person

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.Text}>{printString.personName}</Text>
        <Text style={styles.Text}>{printString.personAge}</Text>
        <Text style={styles.Text}>{printString.personOpleiding}</Text>
        <Text style={styles.Text}>{printString.personGame}</Text>
        <Text style={styles.Text}>{printString.personSeries}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color:'red',
    }
  });