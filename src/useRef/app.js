
//allows creation of object that will keep reference between renders
//mutable values do not trigger a re-render when he state changes
function App(){
    
    const count = useRef(0)
    return (

        <Button onClick = {() => count.current++ }>
           {count.current}
        </Button>
    )
// useRef used to grab native HTML  elements from the DOM(JSX)
function Apps() {

    const btn = useRef(null)
    //referencing the click function
    const handleClick = () => btn.current.click()
    return (

        <Button ref = {btn}>
        </Button>
    )
}
}


