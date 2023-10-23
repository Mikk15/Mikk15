function loeKoodidAlgustähega(koodid, algustäht) {
    const sobivadKoodid = koodid.filter(kood => kood.startsWith(algustäht));
    
    return sobivadKoodid.length;
  }
  
  const koodid = ["c++", "java", "javascript", "haskell", "perl"];
  const algustäht = "J";
  
  const vastus = loeKoodidAlgustähega(koodid, algustäht);
  console.log(`Leiti ${vastus} koodi, mis algavad tähega "${algustäht}"`);
  