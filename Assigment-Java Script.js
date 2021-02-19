// const fire=firebase.firestor()
// console.log(fire)
// const db = document;
const db = firebase.firestore();
console.log(db);

function setData() {
  // alert("Ammar Qureshi");
  var userData = {};
  db.collection()
    .add(userData)
    .then((res) => alert("Data Save"))
    .catch((e) => console.log("eee", e));
  console.log(userData);
}
