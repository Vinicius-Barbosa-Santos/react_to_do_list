import * as C from './AppStyles.js'
import { Global } from './styles/Global.js'
import { Header } from './components/Header/Header.js'
import { AddTask } from './components/AddTask/AddTask.js'
import { Content } from './components/Content/Content.js'
import { useEffect, useState } from 'react'
import { Search } from './components/Search/Search.js'
import { api } from './api/api.js'

const App = () => {
  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])
  const [newitem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetchItems()
    }, 2000)
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw Error('Requisição Negada')
      const listItems = await response.json()
      setFetchError(null)
      setItems(listItems)
    } catch (e) {
      setFetchError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChecked = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }

    const reqUrl = `${API_URL}/${id}`
    const result = await api(reqUrl, updateOptions)
    if(result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    const deleteOptions = {
      method : 'DELETE'
    }

    const reqUrl = `${API_URL}/${id}`
    const result = await api(reqUrl, deleteOptions)
    if(result) setFetchError(result)
  }

  const handleAddTask = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await api(API_URL, postOptions)

    if (result) {
      setFetchError(result)
    }
  }

  return (
    <>
      <C.Container>
        <main>
          <Header title={'Lista de Tarefas'} />
          <Search
            search={search}
            setSearch={setSearch}
          />
          <AddTask
            newitem={newitem}
            setNewItem={setNewItem}
            handleAddTask={handleAddTask}
          />

          {loading &&
            <p style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>Carregando Items...</p>
          }

          {fetchError &&
            <p style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>{fetchError}</p>
          }

          {items.length > 0 &&
            <>
              <Content
                items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
              />
            </>
          }

          {items.length <= 0 && !loading && !fetchError &&
            <C.EmptyList>Sua lista está vazia</C.EmptyList>
          }
        </main>
      </C.Container>
      <Global />
    </>
  )
}

export default App