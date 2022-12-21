export default function ItemListContainer(props) {
    console.log(props)
    return (

        <div>
            <p style={{backgroundColor:props.color}}>{props.greeting}</p>
        </div>
    )
}

