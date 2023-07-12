export default function hideNav(){
    const navLinks = document.getElementsByClassName('navList')[0]

    navLinks.classList.remove('active')
}