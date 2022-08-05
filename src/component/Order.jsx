
const Order = (props) => {

    console.log(props)

    const {orderInStuff} = props

    return (

        <>

         {orderInStuff.map(ordering => (

            <div>  

                 <h3>{ordering.person}</h3>
                 <p>{`${ordering.person} is getting some plaza!!!`}</p>

            </div>   


         ))} 
            
    
        </>        

    )

} 

export default Order