import * as C from './styles'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

export const AddTask = ({ handleAddTask, newitem, setNewItem }) => {

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newitem) return
        handleAddTask(newitem)
        setNewItem('')
    }

    return (
        <C.AddTask>
            <C.AddTaskArea>
                <form onSubmit={handleSubmit}>
                    <FaPlus style={{ color: '#797A81', marginRight: 10, marginLeft: 10 }} />
                    <input
                        placeholder='Adicione uma tarefa'
                        type='text'
                        ref={inputRef}
                        value={newitem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                </form>
            </C.AddTaskArea>
        </C.AddTask>
    )
}
