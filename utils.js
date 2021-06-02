//return the element of the array based on the index
const findElement = (ar, index) => {
    return ar.find(element => {
        return element.id === Number(index)       
    })
};

const findIndexElement = (ar, index) => {
    return ar.findIndex(element => {
        return element.id === Number(index)       
    })
};

const updateElement = (ar, id, body) => {
    //ar = array de envelopes / index = id do envelope a ser atualizado / body = body do request
    const envelope = findElement(ar, id)
    return Object.assign(envelope, body)
};

const deleteElement = (ar, id) => {
    const envelope = findIndexElement(ar, id);
    ar.splice(envelope, 1)
}

module.exports = {
    findElement: findElement,
    findIndexElement: findIndexElement,
    updateElement: updateElement,
    deleteElement: deleteElement
}
