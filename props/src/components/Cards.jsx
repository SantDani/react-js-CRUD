export default function Card(props){
    const {image, title, text} = props;

    return (
        <div className="card" style={{width: "15rem"}}>
            {/* <img src={image} className="" /> */}
            <img src={image} alt="" srcset=""
                className="card-img-top img-thumbnail" 
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">More info</a>
            </div>
        </div>
    )
}