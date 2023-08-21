
var vegItems=["Margherita pizza","Farmhouse pizza","Corn cheese pizza","Mushroom pizza"," Onion Pizza ","Crisp Capsicum"," Jalapeno ","Paneer Pizza","Paradise Pizza"]
var vegItemsPrice=[199,249,249,299,249,299,249,299,249]
var nonVegItems=["Chicken pizza","Chicken cheese","Pepperoni pizza","Double chicken","Jerked Pizza","Meat Lovers Pizza","Gamberi Pizza","BBQ Chicken","Peri-Peri Chicken"]
var nonVegItemsPrice=[199,249,289,299,289,299,289,299,289]
var billHeader=["S.No.","Item-Name","N.Price","Qty.",""]
var addedItem=[]
var sNo=0
var count=1;
var utPrice="";var total=0;
var sumValue=[]
var checkoutItems=[0,addedItem,"",utPrice,sumValue]
var back=document.getElementById("back")
//global variables in the application
men= document.getElementsByClassName("menus");
cont= document.getElementsByTagName("b")
cont1=document.getElementsByClassName("XYZ")
preTag=document.getElementsByTagName("pre")
txt=document.getElementsByClassName("names")
gridSet=document.getElementsByClassName("grid")
var spc=" "
added=document.getElementsByClassName("add")
inputName=document.getElementsByTagName("input")
boldTxt=document.getElementsByClassName("bold")
boldMenu= document.getElementsByClassName("bd")
strongTxt=document.getElementsByTagName("strong")

next=document.getElementById("next")
back=document.getElementById("back")
bottomButtons=document.getElementById("bottomButtons")
search=document.getElementById("search")

//resuable Functions

function bldDisable() {
    for (let index = 0; index < boldTxt.length; index++) {
        boldTxt[index].style.display="none"                
    }
}function bldEnable() {
    for (let index = 0; index < boldTxt.length; index++) {
        boldTxt[index].style.display="inline"                
    }
}
function boldDisable() {
    for(index=0;index<boldMenu.length;index++){
    boldMenu[index].style.display="none"}
} function boldEnable() {
    for(index=0;index<boldMenu.length;index++){
    boldMenu[index].style.display="inline"}
}
function gridEnable() {
    for (let index = 0; index < gridSet.length; index++) {
        gridSet[index].style.display="block"                
    }
}function gridDisable() {
    for (let index = 0; index < gridSet.length; index++) {
        gridSet[index].style.display="none"                
    }
}
function inputDisable() {
    for(let i=0;i<inputName.length;i++){
        inputName[i].style.display="none"
    }
}function inputEnable() {
    for(let i=0;i<inputName.length;i++){
        inputName[i].style.display="inline"
    }
}
function addDisable() {
    for (let index = 0; index < added.length; index++) {
        added[index].style.display="none"                
    }
}function addEnable() {
    for (let index = 0; index < added.length; index++) {
        added[index].style.display="block"                
    }
}
function nameDiv(){
    for (let index = 0; index < txt.length; index++) {
        txt[index].style.backgroundColor=" rgb(188, 7, 22)"
        txt[index].style.height="45px"
        txt[index].style.width="180px"
    }
}
function menuItems(){
    for (let index = 0; index < cont1.length; index++) {
        cont1[index].style.width="180px";
        cont1[index].style.height="130px";
        cont1[index].style.display="block"
    }
}function activePanel() {
    for (let index = 0; index < men.length; index++) {
    men[index].style.backgroundImage="linear-gradient(white,white)"
   }
    document.getElementById("home").style.backgroundImage=" radial-gradient(cyan,rgb(50,50,255))"
}//to cart
ckd=document.getElementsByClassName("checked")
for(let i=0;i<cont.length;i++)
    {
        added[i].addEventListener("click",()=>
        {
            checkoutItems[1]=checkoutItems[1]+cont[i].innerText+"\n"
            checkoutItems[0]=checkoutItems[0]+(count++)+"\n"
            if(document.getElementById("hdrTxt").innerText=="Veg Menu"){
                checkoutItems[2]=checkoutItems[2]+(vegItemsPrice[i])+"\n"
            }if(document.getElementById("hdrTxt").innerText=="Non Veg Menu"){
                checkoutItems[2]=checkoutItems[2]+(nonVegItemsPrice[i])+"\n"
            }
            checkoutItems[3]=checkoutItems[3]+1+"\n"
            strongTxt[i].innerText=""
            ckd[i].style.display="block"
            setTimeout(()=>{ckd[i].style.display="none";strongTxt[i].innerText="+Add"},1000)
        })
    }
function totalValue(){
   addedItem= checkoutItems[2].split("\n")
   console.log(addedItem);
   for (let index = 0; index < addedItem.length-1; index++) {
    total=total+"+"+addedItem[index];
   }
    console.log(eval(total));
}
//main Script for exection
hdrTxt=document.getElementById("hdrTxt")
function nextButton(){
    if (hdrTxt.innerText=="HOME") {
        vegMenu();
    }else if (hdrTxt.innerText=="Veg Menu") {
        nVegMenu();
    }else if (hdrTxt.innerText=="Non Veg Menu") {
        checkout();
    }else if (hdrTxt.innerText=="CheckOut") {
        vegMenu();
    }
}function backButton(){
    if (hdrTxt.innerText=="HOME") {
        vegMenu();
    }else if (hdrTxt.innerText=="Veg Menu") {
        checkout();
    }else if (hdrTxt.innerText=="Non Veg Menu") {
        vegMenu();
    }else if (hdrTxt.innerText=="CheckOut") {
        nVegMenu();
    }
}
function minimize(){
    document.getElementById("displayPg").style.height="720px";
    document.getElementById("displayPg").style.width="0px";
    document.getElementById("front").style.visibility="hidden"
    mainMenuPg();
}function mainMenuPg(){
    bottomButtons.style.display="block"
    next.style.display="inline"
    back.style.display="inline"
   document.getElementById("hdrTxt").innerText="HOME"
   activePanel();
   boldEnable();
   bldEnable();
   for(let i=0;i<ckd.length;i++){
   ckd[i].style.display="none"}
   men[0].style.backgroundImage="linear-gradient(cyan,rgb(50,50,255))"
   cont= document.getElementsByTagName("b")
   for (let index = 0; index < 3; index++) {
        cont1[index].style.backgroundColor="white"
        cont1[index].style.width="63%"
        cont1[index].style.height="80px"
        cont1[index].style.backgroundImage="none"
   }for (let index = 3; index < cont1.length; index++) {
        cont1[index].style.display="none"
   }
   cont[0].innerText="Operator Name"
   cont[0].innerText="Operator Name"
    cont[1].innerText="Costumer Name"
    cont[2].innerText="Mobile No."
    for (let index = 3; index < cont.length; index++) {
        cont[index].innerText=""   
    }
   nameDiv();
   addDisable();
   gridDisable();
   document.getElementById("cName").style.display="inline"
   document.getElementById("mNo").style.display="inline"
   document.getElementById("oName").style.display="inline"
   search.style.display="none"


}function vegMenu(){
    bottomButtons.style.display="block"
    next.style.display="inline"
    back.style,display="inline"
    document.getElementById("hdrTxt").innerText="Veg Menu"
    activePanel();
    boldEnable();
    bldEnable();
    men[1].style.backgroundImage="linear-gradient(cyan,rgb(50,50,255))"
    for (let index = 0; index < vegItems.length; index++) {
        cont[index].innerText=vegItems[index]
    }
    menuItems();
    for (let index = 0; index < cont1.length; index++) {
        cont1[index].style.backgroundImage="url(./vegMenu/vm"+(index+1)+".jpg)";
        cont1[index].style.display="block"
        ckd[index].style.display="none"
   }
   nameDiv();
   addEnable();
   inputDisable();
   gridDisable();
   search.style.display="inline"
}function nVegMenu(){
    bottomButtons.style.display="block"
    next.style.display="inline"
    back.style.display="inline"
   document.getElementById("hdrTxt").innerText="Non Veg Menu"
   activePanel();
   boldEnable();
   bldEnable();
   men[2].style.backgroundImage="linear-gradient(cyan,rgb(50,50,255))"
   menuItems();     
    for (let index = 0; index < nonVegItems.length; index++) {
        cont[index].innerText=nonVegItems[index]
    }
    for (let index = 0; index < cont1.length; index++) {
        cont1[index].style.backgroundImage="url(./nonVegMenu/nvm"+(index+1)+".jpg)";
        cont1[index].style.display="block"
   }
   nameDiv(); addEnable();inputDisable();gridDisable();
   search.style.display="inline"


}function checkout(){
    bottomButtons.style.display="block"
    next.style.display="inline"
    back.style.display="inline"
    activePanel();
    gridEnable();
    bldDisable();
   document.getElementById("hdrTxt").innerText="CheckOut"
   for (let index = 0; index < 4; index++) {
    if(index>=0&&index<=1||index==4){
        cont1[index].style.backgroundColor="white"            
        cont1[index].style.width="95%";
        cont1[index].style.height="50px"  
        cont1[index].style.backgroundImage="none"
        cont1[index].style.display="block"

    }else{
        cont1[index].style.backgroundColor="white"            
        cont1[index].style.width="95%";
        cont1[index].style.height="240px"
        cont1[index].style.backgroundImage="none"
        cont1[index].style.display="block"
    }
   }for (let index = 4; index < cont1.length; index++) {
        cont1[index].style.display="none"
        cont[index].innerText="";           
   }
   men[3].style.backgroundImage="linear-gradient( cyan,rgb(50,50,255))" 
   addDisable();inputDisable();
   operatorName=document.getElementById("oName").value
   costumerName=document.getElementById("cName").value
   mobileNo=document.getElementById("mNo").value
   costumerDetails=["Costumer Name",costumerName,"Mobile No:",mobileNo,""]    
   for (let index = 0; index < 5; index++) {
    if(index==4){
        gridSet[index].style.display="none"
    }else{
        gridSet[index].style.width="110px"
        }            
   }
   console.log(costumerName+"+++"+mobileNo);
   console.log(costumerDetails);

    for (let index = 5; index < gridSet.length; index++) {

        if (index%5==0) {
            gridSet[index].style.width="30px"                    
        }else if((index-1)%5==0){
            gridSet[index].style.width="190px"
        }else if((index-2)%5==0){
            gridSet[index].style.width="80px"
        }else if((index-3)%5==0){
            gridSet[index].style.width="30px"
        }else if((index-4)%5==0){
            gridSet[index].style.width="90px"
        }
    }
    gridSet[1].style.backgroundColor="rgb(255,255,255,0.5)"
    gridSet[3].style.backgroundColor="rgb(255,255,255,0.5)"

        console.log(txt.length);
    for (let index = 0; index < 4; index++) {
        if(index>=0&&index<=1){
         txt[index].style.backgroundColor=" rgb(188, 7, 22)"
         txt[index].style.height="50px"
         txt[index].style.width="100%"
        }else{
         txt[index].style.backgroundColor="white"
         txt[index].style.height="240px"
         txt[index].style.width="100%"
        }   
   }
        txt[3].style.backgroundColor="green"
        cont1[3].style.backgroundColor="white"            
        cont1[3].style.width="95%";
        cont1[3].style.height="50px"  
        cont1[3].style.backgroundImage="none"
        txt[3].style.backgroundColor=" rgb(188, 7, 22)"
        txt[3].style.height="50px"
        txt[3].style.width="100%"
        console.log(checkoutItems);
       boldEnable();
//-------------------------------------------------------
function checkVegItems() {
    for (let i = 0; i < addedItem.length; i++) {
        for (let j = 0; j < vegItems.length; j++) {
            if(addedItem[i]==vegItems[j]){
                sumValue.push(j)
                console.log(j);
            }    
        }
    }
}
checkVegItems();
setPrice();
console.log(sumValue);
function setPrice() {
    for (let i = 0; i < sumValue.length; i++) {
        for(j=0;j<vegItemsPrice.length;j++)
        if (sumValue[i]=j) {
            sumValue[i]=vegItemsPrice[i]
        }
    }
    console.log(sumValue)
}
console.log(checkVegItems);
//-------------------------------------------------------
    for (let index = 0; index < billHeader.length; index++) {
        boldMenu[index+5].innerText=billHeader[index]
    }for (let index = 0; index < checkoutItems.length; index++) {
        boldMenu[index+10].innerText=checkoutItems[index]
    }for (let index = 0; index < checkoutItems.length; index++) {
        boldMenu[index+10].innerText=checkoutItems[index]
    }for (let index = 0; index < 5; index++) {
        boldMenu[index].innerText=costumerDetails[index]
    }
    totalValue();
    boldMenu[16].innerText="total"
    boldMenu[17].innerText=eval(total)
    boldMenu[19].innerText="Print"
    gridSet[19].style.backgroundColor="rgb(255,255,255,0.5)"
    console.log(total);
    console.log(checkoutItems[1]);
    store();
}

function store() {
    a=boldMenu[11].innerText
    localStorage.setItem("CheckoutItems",a)
    localStorage.setItem("coustmer name",costumerName)
    localStorage.setItem("phone No",mobileNo)
    localStorage.setItem("operator name",operatorName)
    localStorage.setItem("order id","CN"+Date())
    localStorage.setItem("bill",eval(total))
}
searches=document.getElementsByClassName("searches")
search.value
searchTab=document.getElementById("searchItem")

function searchMenu() {
    for (let index = 0; index < searches.length; index++){
        if (search.value=="") {
            searches[index].style.display="none"
        }
    }
}

function searchBar() {c=0;

    for (let index = 0; index < searches.length; index++){
        searches[index].innerText=""
    }
    for (let index = 0; index < vegItems.length; index++){
        if((vegItems[index].toUpperCase()).includes((search.value).toUpperCase())) {
            searches[c++].innerText=vegItems[index]
            console.log(vegItems[index]);
        }if (searches[index].innerText=="") {
            searches[index].style.display="none"
        }else{}
    }
    for (let index = 0; index < nonVegItems.length; index++){
        if((nonVegItems[index].toUpperCase()).includes((search.value).toUpperCase())&&c<10) {
            searches[c++].innerText=nonVegItems[index]
            console.log(nonVegItems[index]);
        }if (searches[index].innerText=="") {
            searches[index].style.display="none"
        }else{searches[index].style.display="block"}
    }
}
a="sharath"
b="kjhvkjf"
console.log(a.includes(b));

for(let i=0;i<searches.length;i++)
    {
        searches[i].addEventListener("click",()=>
        {
            if (!(checkoutItems[1].includes(searches[i].innerText))) {
            checkoutItems[1]=checkoutItems[1]+searches[i].innerText+"\n"
            checkoutItems[0]=checkoutItems[0]+(count++)+"\n"
            }
            //price selection
            if(vegItems.includes(searches[i].innerText)){
                checkoutItems[2]=checkoutItems[2]+(vegItemsPrice[i])+"\n"
            }else if(nonVegItems.includes(searches[i].innerText)){
                checkoutItems[2]=checkoutItems[2]+(nonVegItemsPrice[i])+"\n"
            }
            //Quantity selection
            qty=1
            if (checkoutItems[1].includes(searches[i].innerText)) {
                checkoutItems[3]=checkoutItems[3]+qty++ +"\n"
            }else{
            checkoutItems[3]=checkoutItems[3]+1+"\n"
            }
            itm=searches[i].innerText
            searches[i].innerText="<---Item is Added--->"
            setTimeout(()=>{
                searches[i].innerText=itm
            },500)

            
        })
    }