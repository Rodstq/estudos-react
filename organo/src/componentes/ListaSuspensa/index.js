import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    let itens = [
        "",
        ...props.itens
    ]

    return(
        <div className='lista-suspensa'>
            <label htmlFor="">{props.label}</label>
            <select required={props.obrigatorio} name="" id="">
                {itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa