
type ButtonPropsType = {
    onClick: () => void
    name: string
}

export const Button = ({onClick, name}: ButtonPropsType) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}