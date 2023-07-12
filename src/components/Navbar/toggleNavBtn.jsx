export default function toggleNavBtn(){
    const navLinks = document.getElementsByClassName('navList')[0]
    const arrowRotation = document.getElementsByClassName('arrow-icon')[0]

    navLinks.classList.toggle('active')
    arrowRotation.classList.toggle('active')
}