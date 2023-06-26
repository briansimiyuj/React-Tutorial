const Home = () =>{

    let name = 'Brian'

    const handleClick = () =>{
    
        name = 'Simiyu'

        console.log(name)
        
    }


    return(

        <div className="home">

            <h2>Homepage</h2>

            <p>{name}</p>

            <button onClick={handleClick}>Click me</button>

        </div>

    )

}

export default Home