import "./styles/Cart.css"


export default function Cart({ id, img, title, description, price,handelProductClick }) {
    return (
        <div className="card" style={{ color: "white" }} onClick={handelProductClick}>
            <section className="img-container">
            <img src={img} className="card__img" alt={title} />
            </section>
            <div className="card__body">
                <h3 className="card__price">₹{price}</h3>

                <section className="texts">
                    <h2 className="card__title">{title}</h2>
                    <p className="card__description">{description}</p>
                </section>
                <button className="card__btn">
                    BOOK NOW
                </button>
            </div>
        </div>
    )
}
