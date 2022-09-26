import Article from "./Article";
import CurrentDay from "./CurrentDay";




const Grid = () => {

    const articles = [
        'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday'
    ];

    return (
        <div className="weather-grid">
            <CurrentDay />
            {articles.map(article => (
                <Article key = {article}/>
            ))}
            </div>
    )
}

export default Grid

