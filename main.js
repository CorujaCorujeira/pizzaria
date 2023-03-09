var menuListArray = ["Pizza Vegetariana",
"Calabresa",
"Vegana",
"Marguerita",
"Peperoni",
"Abacaxi com Queijo",
"Brasileira",
"Portuguesa"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sport();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById('displayAddedMenu').innerHTML=htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="iml" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""

}

function addTop(){
//Completar o código
}