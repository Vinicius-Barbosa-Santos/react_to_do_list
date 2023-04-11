import * as C from "./styles"
import { FaTrash } from 'react-icons/fa'

export const List = ({ item, handleChecked, handleDelete }) => {

    return (
        <C.List>
            <input
                type='checkbox'
                onChange={() => handleChecked(item.id)}
                checked={item.checked}
            />
            <C.ListItem onDoubleClick={() => handleChecked(item.id)} style={{textDecoration : item.checked ? ' line-through' : null}} >{item.item}</C.ListItem>
            <FaTrash className='trash' onClick={() => handleDelete(item.id)}/>
        </C.List>
    )
}