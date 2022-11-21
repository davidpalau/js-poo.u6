/**
 *  ACTIVITY 3 – Modifying Map Objects 
− We saw that Map objects associate keys with values. Keys cannot be repeated, but values can. 
− Creates, for this type of object, a method called invertMap that returns a new map object where the 
keys are the values of the original map. The values of the new map will be arrays containing the keys 
where that value was repeated. 
− For example, if we had a map with these keys: 
o Key 1: Value: "Optimal" 
o Key 2: Value: "Noteworthy" 
o Key 3: Value: "Noteworthy" 
o Key 4: Value: "Excellent" 
o Key 5: Value: "Improvable" 
o Key 6: Value: "Excellent" 
o Key 7: Value: "Noteworthy" 
The method will be able to obtain this other map: 
o Key: "Optimal", Value:[1] 
o Code: "Remarkable", Value[2,3,7] 
o Key:"Improvable", Value[5] 
o Key:"Excellent", Value[4,6]
 */


let notas = new Map([[1, "Optimal"],[2, "Noteworthy"],[3, "Noteworthy"],[4, "Excellent"],[5, "Improvable"],[6, "Excellent"],[7, "Noteworthy"]]);

let notasArray = [];

for(let i =1; i < notas.size; i++){
    notasArray = notas.valor(i);
}
    console.log(notasArray);