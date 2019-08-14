// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAq0wkR2NFSIrGF7DFiVkKcsgS9qhoMttE',
    authDomain: 'wordnet-electron.firebaseapp.com',
    projectId: 'wordnet-electron'
  });
  
  var db = firebase.firestore();

  function guardar(){
      //cambiar1
      var nombre = document.getElementById("nombre").value;
      var dir = document.getElementById("dir").value;
      var fa = document.getElementById("fa").value;
      var direccion = document.getElementById("direccion").value;
      var departamento = document.getElementById("departamento").value;
      var regist = document.getElementById("regist").value;
      var gi = document.getElementById("gi").value;
      var cp = document.getElementById("cp").value;
      var vc = document.getElementById("vc").value;
      var des = document.getElementById("des").value;
      var des2 = document.getElementById("des2").value;
      var des3 = document.getElementById("des3").value;
      var total = document.getElementById("total").value;
      var des4 = document.getElementById("des4").value;
      var des5 = document.getElementById("des5").value;
      var des6 = document.getElementById("des6").value;
      var des7 = document.getElementById("des7").value;
      var des8 = document.getElementById("des8").value;
      var des9 = document.getElementById("des9").value;
      var des10 = document.getElementById("des10").value;
      var des11 = document.getElementById("des11").value;
    

      
    db.collection("est").add({
        //cambiar2
        nombre: nombre,
        dir: dir,
        fa: fa,
        direccion: direccion,
        regist: regist,
        gi: gi,
        cp: cp,
        vc: vc,
        des: des,
        des2: des3,
        des4: des5,
        des6: des6,
        des7: des7,
        des8: des8,
        des9: des9,
        des10: des10,
        des11: des11
       
    })
    .then(function(docRef) {
        //cambiar3
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("dir").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("fa").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("resgist").value = "";
        document.getElementById("gi").value = "";
        document.getElementById("vc").value = "";
        document.getElementById("des").value = "";
        document.getElementById("des2").value = "";
        document.getElementById("des3").value = "";
        document.getElementById("des4").value = "";
        document.getElementById("des5").value = "";
        document.getElementById("des6").value = "";
        document.getElementById("des7").value = "";
        document.getElementById("des8").value = "";
        document.getElementById("des9").value = "";
        document.getElementById("des10").value = "";
        document.getElementById("des11").value = "";
      
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });test.firestore.js
  }

 //tabla de datos
 var tabla = document.getElementById('tabla');
 db.collection("est").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        //cambiar4
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().dir}</td>
        <td>${doc.data().fa}</td>
        <td>${doc.data().direccion}</td>
        <td>${doc.data().regist}</td>
        <td>${doc.data().gi}</td>
        <td>${doc.data().vc}</td>
        <td>${doc.data().des}</td>
        <td>${doc.data().des1}</td>
        <td>${doc.data().des2}</td>
        <td>${doc.data().des3}</td>
        <td>${doc.data().des4}</td>
        <td>${doc.data().des5}</td>
        <td>${doc.data().des6}</td>
        <td>${doc.data().des7}</td>
        <td>${doc.data().des8}</td>
        <td>${doc.data().des9}</td>
        <td>${doc.data().des10}</td>
        <td>${doc.data().des11}</td>
        <td><button class="btn btn-info"  onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().dir}'),'${doc.data().fa}'">Editar</button></td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
      </tr>
      `
    });
});

//borrar datos
function eliminar(id){
    db.collection("est").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });test.firestore.js
}

//edit

//cambiar5
function editar(id,nombre,dir,fa) {
//cambiar 6
  document.getElementById('nombre').value = nombre;
    document.getElementById('dir').value = dir;
    document.getElementById('fa').value = fa;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("est").doc(id);

        // Set the "capital" field of the city 'DC'
        ///cambiar8

        var nombre = document.getElementById('nombre').value;
        var dir = document.getElementById('dir').value;
        var fa = document.getElementById('fa').value;

        return washingtonRef.update({
            nombre: nombre,
            dir: dir,
            fa: fa
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });test.firestore.js
        
        }
    }

    
   



