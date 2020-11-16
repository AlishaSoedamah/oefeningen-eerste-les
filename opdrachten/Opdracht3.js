import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Opdracht3() {
  // OPDRACHT: Kopieer het object wat je in de vorige opdracht hebt gemaakt.
  let person = {
    personAge:'16',
  }
  // OPDRACHT: Maak een aantal if/else statements die de onderstaande variabelen bepalen:
  let ikBenStemGerechtig = false
  let ikBenOuderDan65 = false
  let ikMagBrommerRijden = true
  let ikBenZestien = true
  // Je gebruikt de leeftijd uit het object van de vorige opdracht in je if/else statement
  // OPDRACHT: Print elk statement op het scherm. Hieronder een voorbeeld:
  let ajaxIsDeBesteClubVanNL = true
  // OPDRACHT: Stop elke regel text in een aparte Container (View)
  // OPDRACHT: Geef elke Container een andere kleur
  return (
      <View style={styles.mainContainer}>
        {/* Hieronder zie je een manier om text te printen op basis van een waarde uit een variabele */}
        <Text>Ben ik stem gerechtig wel/niet? {ikBenStemGerechtig ? 'wel' : 'niet'}</Text>
        <Text>Ben ik ouder dan 65? wel/niet? {ikBenOuderDan65 ? 'wel' : 'niet'}</Text>
        <Text>Ik mag brommer rijden? wel/niet? {ikMagBrommerRijden ? 'wel' : 'niet'}</Text>
        <Text>Ben ik 16? wel/niet? {ikBenZestien ? 'wel' : 'niet'}</Text>
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
  });