import "./MainContainer.sass";

export default function MainContainer({children}) {
    return (
        <section className="mainContainer">
            {children}
        </section>
    )
}