// const fire=firebase.firestor()
// console.log(fire)
// const db = document;
const db = firebase.firestore();
console.log(db);

function setData() {
  // alert("Ammar Qureshi");
  var userData = {
    title: title,
    select: select,
    condition: condition,
    description: description,
  };
  db.collection("/products")
    .add(userData)
    .then((res) =>
     alert("Data Save"))
    .catch((e) =>
     console.log("eee", e));
  console.log(userData);
}
