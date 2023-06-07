import Header from "./components/header";
import InnerPageTitle from "./components/inner-page-title";
import './App.css';
import Button from "./components/button";
import Carousel from "./components/carousel";


function App() {
  return (
    <div className="page-wrapper">
        <Header/>
        <InnerPageTitle subtitle="Testimonials" title="What our clients say about us"/>
        <Carousel/>
        <h2 className="inner-page__title inner-page__title--m20">Leave your feedback</h2>
        <p className="page-text">If you had a chance to work with us, please, leave your feedback and we’ll happily add it to our testimonials page. Thank you!</p>
        <Button text="leave your feedback"/>
    </div>
  );
}

export default App;
