import './index.css'

function Book(props) {
    const handleLearnMoreClick = () => {
        if (props.url) {
            window.open(props.url);
        }
    };

    return (
        <div className="book">
            <div className="book-image-container">
                <img src={props.image} alt={props.title} className="book-image" />
            </div>
            <div className="price">
                <p className="price-amount">{props.price}</p>
            </div>
            <button className="learn" onClick={handleLearnMoreClick}>
                Learn more
            </button>
        </div>
    );
}

export default Book;