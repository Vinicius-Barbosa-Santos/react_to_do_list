import * as C from './styles'

export const Search = ({ search, setSearch }) => {
    return (
        <C.Search>
            <input
                type='search'
                placeholder='Procurar Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </C.Search>
    )
} 