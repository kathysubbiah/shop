(function(){
const cartBtn = document.querySelectorAll(".store-item-icon");
cartBtn.forEach(function(btn){
btn.addEventListener("click", function(event){
if(event.target.parentElement.classList.contains("store-item-icon"))
{
console.log(event.target.parentElement);
}
});
});
})();

if