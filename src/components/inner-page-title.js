export default function InnerPageTitle(props) {
    return <>
        <div className="inner-page__subtitle">{props.subtitle}</div>
        <h1 className="inner-page__title">{props.title}</h1>
    </>
}