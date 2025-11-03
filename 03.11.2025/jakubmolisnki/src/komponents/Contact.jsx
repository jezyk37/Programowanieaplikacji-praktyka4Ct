function Contact(props){
    return(
        <>
        <div>
            <ul>
                <li>Email: {props.email}</li>
                <li>Tel: {props.tel}</li>
                <li>address: {props.adress}</li>
            </ul>
        </div>
        </>
    )
}
export default Contact;