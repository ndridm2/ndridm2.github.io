
//animation Portfolio
const timeLinePortfolio = gsap.timeline({scrollTrigger:"#Portfolio",defaults:{duration:4}})
timeLinePortfolio.fromTo('#Portfolio',{opacity:0},{opacity:1})

// create a pop up for showing portfolio images
const popup = document.querySelector(".portfolio-popup")
const popupImg = document.querySelector(".carousel")
const showImgProjects = document.querySelectorAll(".project-img")
const closePopUp = document.querySelector(".closePopUp")
const imgSrc = document.querySelectorAll(".carousel-item  img")

const projectsData = [
    {
        id: 1,
        projectImg1 : 'images/portfolio/Frame 1.png',
        projectImg2 : 'images/portfolio/Frame 1.png',
    },
    {
        id: 2,
        projectImg1 : 'images/portfolio/Frame 2.png',
        projectImg2 : 'images/portfolio/Frame 2.png',
    },
    {
        id: 3,
        projectImg1 : 'images/portfolio/Frame 3.png',
        projectImg2 : 'images/portfolio/Frame 3.png',
    },
    {
        id: 4,
        projectImg1 : 'images/portfolio/Frame 4.png',
        projectImg2 : 'images/portfolio/Frame 4.png',
    },
    {
        id: 5,
        projectImg1 : 'images/portfolio/Frame 5.jpeg',
        projectImg2 : 'images/portfolio/Frame 5.jpeg',
    },
    {
        id: 6,
        projectImg1 : 'images/portfolio/Frame 6.png',
        projectImg2 : 'images/portfolio/Frame 6.png',
    },
    {
        id: 7,
        projectImg1 : 'images/portfolio/Frame 7.png',
        projectImg2 : 'images/portfolio/Frame 7.png',
    },
    {
        id: 8,
        projectImg1 : 'images/portfolio/Frame 8.png',
        projectImg2 : 'images/portfolio/Frame 8.png',
    },
    {
        id: 9,
        projectImg1 : 'images/portfolio/Frame 9.png',
        projectImg2 : 'images/portfolio/Frame 9.png',
    },
    {
        id: 10,
        projectImg1 : 'images/portfolio/Frame 10.png',
        projectImg2 : 'images/portfolio/Frame 10.png',
    },
    {
        id: 11,
        projectImg1 : 'images/portfolio/Frame 11.png',
        projectImg2 : 'images/portfolio/Frame 11.png',
    },
    {
        id: 12,
        projectImg1 : 'images/portfolio/Frame 12.png',
        projectImg2 : 'images/portfolio/Frame 12.png',
    },

]

showImgProjects.forEach(element => {
    element.addEventListener("click",()=>{
        popup.classList.add("active")
        popupImg.classList.add("active")
        const currentItem = element.getAttribute("data-number");
        imgSrc[0].src = projectsData[currentItem - 1].projectImg1
        imgSrc[1].src = projectsData[currentItem - 1].projectImg2

    })
});
closePopUp.addEventListener("click",()=>{
    popup.classList.remove("active")
})

// loading page
// const spinner = document.querySelector(".spinner")
// window.addEventListener("load",()=>{
//     spinner.classList.add("active")
// })