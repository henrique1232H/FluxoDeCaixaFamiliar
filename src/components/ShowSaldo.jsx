import "./style.css"

export function Show({result}) {

    return (
        <div className="containerShow">
            <h1>
                {result}
            </h1>
        </div>
    )
}