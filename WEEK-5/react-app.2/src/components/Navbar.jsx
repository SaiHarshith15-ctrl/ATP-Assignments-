function Navbar(){
    return(
        <div class=" flex justify-around p-3.5 text-center bg-green-300">
            <h1 class="text-4xl"> Logo</h1>
            <ul className=" flex justify-around gap-10">
                <li>
                    <a href="" className=" hover:">Home</a>
                </li>
                <li>
                    <a href="">register</a>
                </li>
                <li>
                    <a href="">login</a>
                </li>
            </ul>
        </div>
    )

}

export default Navbar