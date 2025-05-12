const Footer = () =>{
    return(
    <div className="bg-sky-900 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-libre bold tracking tight">
                BookStore.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Pivacy Policy</span>
                <span>Terms of service</span>
            </span>
        </div>
    </div>
    )

}

export default Footer;