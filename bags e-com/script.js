//humburger menu


const humburger =document.querySelector(".humbuger");
const navitems = document.querySelector(".navitems");

humburger.addEventListener("click",()=>{
	humburger.classList.toggle("active");
		navitems.classList.toggle("active");
})


document.querySelectorAll(".navlinks").forEach(n => n.
	addEventListener("click",() =>{
		humburger.classList.remove("active");
		navitems.classList.remove("active");
	})
)