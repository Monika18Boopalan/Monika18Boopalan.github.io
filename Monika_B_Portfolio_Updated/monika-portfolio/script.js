const body=document.body;
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const themeToggle=document.getElementById("themeToggle");
const topBtn=document.getElementById("topBtn");
const form=document.getElementById("contactForm");
const status=document.getElementById("formStatus");

const savedTheme=localStorage.getItem("monika-theme");
if(savedTheme==="light"){body.classList.add("light");themeToggle.textContent="☾";}

menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

themeToggle.addEventListener("click",()=>{
  body.classList.toggle("light");
  const light=body.classList.contains("light");
  localStorage.setItem("monika-theme",light?"light":"dark");
  themeToggle.textContent=light?"☾":"☀︎";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>600));
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const subject=encodeURIComponent(`Portfolio enquiry from ${name}`);
  const bodyText=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:monikaboopalan24@gmail.com?subject=${subject}&body=${bodyText}`;
  status.textContent="Opening your email client…";
});
