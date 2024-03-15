import React, {ButtonHTMLAttributes} from "react";
import s from './Button.module.css'


type ButtonPropsType = {
    title: string
    onClick: () => void
    children: React.ReactNode
    color?: string
    disabled?: boolean
}&ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({title,
                           color,
                           disabled,
                           onClick,
                           className,
                           children,
                           ...restButtonPropsType}: ButtonPropsType) => {

    const onClickHandler = () => {
        onClick()
    }

    // const FinalClassName: string = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (ClassName ? ' ' + ClassName : '')

    //const FinalClassName = s.button + ' ' + s.red

    //const FinalClassName = `${s.button}  ${s.red}`

    // const FinalClassName = `
    //     ${s.button}
    //         ${color === 'red' ? s.red : s.secondary}
    //         ${disabled ? s.disabled : ''}
    // `

    const FinalClassName = `
        ${s.button}
            ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
            ${disabled ? s.disabled : ''}
    `


    return (
        <button onClick={onClickHandler}
                className={FinalClassName}
                //{...restButtonPropsType}
        >
            {children}
        </button>
    )
}




//---------------------------------------------------------


// type ButtonPropsType = {
//     title: string
//     onClick: () => void
//     color: string
// }


// export const Button: React.FC<ButtonPropsType> = ({title, onClick, ...restButtonPropsType}) => {
//
//     console.log(restButtonPropsType.color)
//
//     const onClickHandler = () => {
//         onClick()
//     }
//
//     return (
//         <button onClick={onClickHandler}>
//             {title}
//         </button>
//     )
// }

//----------------------------------------------------------------

// type ButtonPropsType = {
//     title: string
//     onClick: () => void
// }


// export function Button (props: ButtonPropsType)  {
//
//     const onClickHandler = () => {
//         props.onClick()
//     }
//
//     return (
//         <button onClick={onClickHandler}>
//             {props.title}
//         </button>
//     )
// }