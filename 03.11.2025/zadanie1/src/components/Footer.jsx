import Contact from "./Contact";
function Footer(){
    return(
        <>
        <footer style={{width:'100%', height:'150px', background:'blue', color:'white'}}>
            <h4>Kontakt do mnie:</h4>
            <Contact 
            imie='Jakub'
            nazwisko='Moliński'
            email ='kubusjezyk69@gmail.com'
            />
        </footer>
        </>
    )
}
export default Footer;