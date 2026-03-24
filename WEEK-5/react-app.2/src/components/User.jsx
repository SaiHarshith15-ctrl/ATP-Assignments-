function User(props){
    let{user}=props;
    return <div className="m-1 rounded-2xl bg-amber-600 shadow-black">
        <h2 className=" text-2xl text-center">{user.name}</h2>
        <p className=" text-[20px] text-center">{user.email}</p>
        <img src={user.image} alt='' className=" mx-auto m-2 rounded-2xl"/>
    </div>
}

export default User