window.onload = () => {
  document.getElementById("wrap")
  console.log("page is fully loaded");
};
document.getElementById("h1").style.filter="none"
document.getElementById("h1").style.opacity=1;
document.getElementById("para").style.filter="none"
document.getElementById("para").style.opacity=1;
const bod=document.querySelector('.body')
const targetElement1 = document.querySelector('.one');
const observer1 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // targetElement.style.opacity=1;
    entries.forEach(element => {
    //   element.target.classList.toggle("show",element.isIntersecting)
    bod.classList.toggle("scrollpur",element.isIntersecting)
    console.log("one")
    bod.classList.remove("scrollblue")
    });
  }
},{
  threshold: 0.2
}
);
observer1.observe(targetElement1);

const targetElement2 = document.querySelector('.two');
const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // targetElement.style.opacity=1;
    entries.forEach(element => {
    //   element.target.classList.toggle("show",element.isIntersecting)
    bod.classList.toggle("scrollblue",element.isIntersecting)
    console.log("two")
    bod.classList.remove("scrollpur")
    });
  }
},{
  threshold: 0.2
}
);
observer2.observe(targetElement2);

const targetElement3 = document.querySelector('.event');
// const reveal=document.querySelector('.event')
const observer3 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // targetElement.style.opacity=1;
    entries.forEach(element => {
      targetElement3.classList.toggle("show",element.isIntersecting)
    
    });
  }
},{
  threshold: 0.1
}
);
observer3.observe(targetElement2);
