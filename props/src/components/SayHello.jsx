export default function SayHello(props){
    console.log(props);

    const {name} = props; // Object destructuring

    return (
        <h1>Hello {name}</h1>
    )
}