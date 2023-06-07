import ReactOwlCarousel from "react-owl-carousel";
import Testimonial from "./testimonial";
import man from "../images/man.jpg";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function Carousel() {
    return (
        <>
            <ReactOwlCarousel className="owl-theme"
                              items={1}
                              nav={true}
                              dots={false}
                              navText={["<div class='testimonial__button testimonial__button--prev'>‹</div>", "<div class='testimonial__button testimonial__button--next'>›</div>"]}
            >
                <Testimonial author="Wolfgang Männel" info="Founder and Managing Director" description="Fotografen365" image={man} alt="man">
                    <p className="testimonial__paragraph">I have worked with a number of software developers before but none of them quite reached the level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team. They are incredibly easy to work with and almost always find great programming solutions to our requirements.</p>
                    <p className="testimonial__paragraph">What I especially liked about the SoftFormance team is their passion and understanding for our project. It’s like working with friends. Friends that deliver on their promises. I have nothing but praise for the work of SoftFormance team and look forward to working with this agency in the future.</p>
                </Testimonial>
                <Testimonial author="Wolfgang Männel" info="Founder and Managing Director" description="Fotografen365" image={man} alt="man">
                    <p className="testimonial__paragraph">I have worked with a number of software developers before but none of them quite reached the level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team. They are incredibly easy to work with and almost always find great programming solutions to our requirements.</p>
                    <p className="testimonial__paragraph">What I especially liked about the SoftFormance team is their passion and understanding for our project. It’s like working with friends. Friends that deliver on their promises. I have nothing but praise for the work of SoftFormance team and look forward to working with this agency in the future.</p>
                </Testimonial>
                <Testimonial author="Wolfgang Männel" info="Founder and Managing Director" description="Fotografen365" image={man} alt="man">
                    <p className="testimonial__paragraph">I have worked with a number of software developers before but none of them quite reached the level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team. They are incredibly easy to work with and almost always find great programming solutions to our requirements.</p>
                    <p className="testimonial__paragraph">What I especially liked about the SoftFormance team is their passion and understanding for our project. It’s like working with friends. Friends that deliver on their promises. I have nothing but praise for the work of SoftFormance team and look forward to working with this agency in the future.</p>
                </Testimonial>
            </ReactOwlCarousel>
        </>
    )
}