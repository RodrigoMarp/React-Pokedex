export default function Card({ name, type, img }) {
    return (
        <div>
            
            <div className='App-card'>
            <img src={img}></img>
            { name } { type }
            </div>
        </div>
    );
}
