
const Order = (props) => {

    console.log(props)

    const {orders} = props

    return (

        <>

         {orders.map(order => (

            <div>  

                 <h3>{order.person}</h3>
                 <p>{`${order.person} is getting some plaza!!!`}</p>

            </div>   


         ))} 
            
    
        </>        

    )

} 

export default Order