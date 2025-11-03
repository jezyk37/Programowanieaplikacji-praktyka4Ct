function Contact(props){
    return(
        <>
        <div>
            <ul>
                <li>Imie: {props.imie}</li>
                <li>Nazwisko: {props.nazwisko}</li>
                <li>Email: {props.email}</li>
            </ul>
        </div>
        </>
    )
}
export default Contact;