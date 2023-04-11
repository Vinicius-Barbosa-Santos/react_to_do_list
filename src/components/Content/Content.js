import * as C from './styles'
import { List } from '../List/List'

export const Content = ({ items, handleChecked, handleDelete }) => {
    return (
        <C.Content>
            <ul>
                {items.map((item) => (
                    <List item={item} key={item.id} handleChecked={handleChecked} handleDelete={handleDelete}/>
                ))}
            </ul>
        </C.Content>
    )
}