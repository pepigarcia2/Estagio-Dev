var info = document.getElementById("informacao")
var numHemisferioSul = document.getElementById("hemisferioSul")

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://jsonplaceholder.typicode.com/users');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData)
 };
 ourRequest.send();   


function renderHTML(data){
    var htmlString = "";
    var htmlDouble = 0.00;
    for (i = 0; i < data.length; i++){
        if(!(data[i].username == "Samantha")){
            htmlString += "<p>Username: <b>"+ data[i].username + "</b> - Website: " + data[i].website + "</p>";           
        }else{
            htmlString += "<p>Username: <b>"+ data[i].username + " </b> - Website: " + data[i].website + " - E-mail: " + data[i].email + "</p>";
        }
        if(data[i].address.geo.lat < 0.00){
            htmlDouble++;
        }    
    }
    info.insertAdjacentHTML('beforeend', htmlString);
    numHemisferioSul.insertAdjacentHTML('afterend', "Total de usuários no hemisfério sul: " + htmlDouble);
}

