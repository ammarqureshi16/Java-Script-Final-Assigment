// const db = firebase.firestore();
// console.log(db);
// function setData() {
//   // alert("Ammar Qureshi");
//   var userData = {};
//   db.collection()
//     .add(userData)
//     .then((res) => alert("Data Save"))
//     .catch((e) => console.log("eee", e));
//   console.log(userData);
// }

const doc=document
const main=doc.getElementById("main-Div")
const sec=doc.getElementById("second-child-div")
const thir=doc.getElementById("third-div")
const heading=doc.getElementById("todo-heading")
const inputdiv=doc.getElementById("input-div")

const button=doc.getElementById("button-add")

function addItem() {
  const input=doc.getElementById("text-input")
  console.log(input);
  var ul = document.getElementById("ul");
  var listItem = document.createElement("li");
  ul.appendChild(listItem);
  listItem.innerHTML = "<span/>" + input.value;
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = " Delete ";


  // Styleing
  // deleteButton.style.backgroundColor = "Black";
  // deleteButton.style.color = "white";
  // deleteButton.style.width = "53px";
  // deleteButton.style.height = "30px";
  // deleteButton.style.border = "none";
  // deleteButton.style.borderRadius = "6px";

  var editButon = document.createElement("button");
  editButon.innerHTML = " Edit ";


  // Styleing
  // editButon.style.backgroundColor = "red";
  // editButon.style.color = "white";
  // editButon.style.width = "53px";
  // editButon.style.height = "30px";
  // editButon.style.border = "none";
  // editButon.style.borderRadius = "6px";
  
    editButon.setAttribute("onClick", "editItem(event)");
    deleteButton.setAttribute("OnClick", "deleteItem(event)");
    listItem.appendChild(editButon);
    listItem.appendChild(deleteButton);

  firebase
      .firestore()
      .collection("add")
      .add({
        text: input.value,
      })
      .then(function () {})
      .catch(function (error) {
        alert(error.message);
      });
    input.value = "";
}

// function addItem() {
//   alert("Ammar Qureshi")
//   const inputValue = document.getElementById("input");
//   console.log(inputValue);
//   const ul = document.getElementById("ul");
//   const listItem = document.createElement("li");
//   ul.appendChild(listItem);
//   listItem.innerHTML = "<span/>" + inputValue.value;
//   const deleteButton = document.createElement("button");
//   deleteButton.innerHTML = "Delete";
//   const editButon = document.createElement("button");
//   editButon.innerHTML = "Edit";
//   editButon.setAttribute("onClick", "editItem(event)");
//   listItem.appendChild(editButon);
//   listItem.appendChild(deleteButton);
//   deleteButton.setAttribute("OnClick", "deleteItem(event)");

//   firebase
//     .firestore()
//     .collection("add")
//     .add({
//       text: inputValue.value,
//     })
//     .then(function () {})
//     .catch(function (error) {
//       alert(error.message);
//     });
//   inputValue.value = "";
// }
// // Delete Item
// function deleteItem(event) {
//   var listItem = event.target.parentElement;
//   listItem.remove();
//   document.addEventListener("click", (e) => {
//     e.stopPropagation();
//     let id = e.target.parentElement.getAttribute("deleteItem(event)");
//     db.collection("add")
//       .doc(id)
//       .delete()
//       .then(() => {
//         console.log("Document successfully deleted!");
//       })
//       .catch((error) => {
//         console.error("Error removing document: ", error);
//       });
//   });
// }
// //.then(() => {
// //         console.log("Document successfully deleted!");
// //     }).catch((error) => {
// //         console.error("Error removing document: ", error);
// //     });
// //   }
// // Edit Item
// function editItem(event) {
//   console.log(event);
//   var valueElement = event.target.parentElement.children[0];
//   console.log(valueElement);
//   document.getElementById("input").value = valueElement.innerHTML;
//   valueElement.setAttribute("id", "currentItem");

//   var button = document.getElementById("button");
//   var buttonValue = button.value;
//   console.log(buttonValue);
//   buttonValue.innerHTML = "Update";
//   button.setAttribute("onClick", "updateItem(event)");
//   console.log(buttonValue);
// }
// // UpdateItem
// function updateItem(event) {
//   var currInput = document.getElementById("input");
//   console.log(currInput);
//   var spanElement = document.getElementById("currentItem");
//   spanElement.innerHTML = currInput.value;
//   currInput.value = "";
//   var button = document.getElementById("button");
//   var buttonValue = button.value;
//   button.setAttribute("onClick", "addItem(event)");
//   buttonValue.innerHTML = "Add";
//   console.log(button);
// }
