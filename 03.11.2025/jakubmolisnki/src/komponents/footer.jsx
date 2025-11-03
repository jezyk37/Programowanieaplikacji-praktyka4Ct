import Contact from "./Contact";
function Footer(){
    return(
        <>
        <footer style={{width:'100%', height:'150px', background:'purple', color:'white'}}>
            <h4>TO JEST FOOTER</h4>
            <Contact 
            email='kubusjezyk69@gmail.com'
            tel='123456789'
            adress = "Pszczyna"
            />
        </footer>
        </>
    )
}
export default Footer;