export const api = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw Error('Recarregue a Página!')
    } catch (e) {
        errMsg = e.message
    } finally {
        return errMsg
    }
}