export default function Testimonial(props) {
    return (
        <div className="testimonial">
            <div className="testimonial__content">
                {props.children}
                <figcaption className="testimonial__figcaption">
                    <b className="testimonial__author">{props.author}</b>
                    <cite className="testimonial__info">{props.info}, <span className="testimonial__description">{props.description}</span></cite>
                </figcaption>
            </div>
            <div  className="testimonial__image">
                <img  src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}