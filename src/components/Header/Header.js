import * as C from './styles'

export const Header = ({title}) => {
    return(
        <C.Header>
            <h1>{title}</h1>
            <C.Line />
        </C.Header>
    )
}