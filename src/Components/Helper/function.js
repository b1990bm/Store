export const shorten=(title)=>{
    const splitTitle=title.split(" ");
    const newTitle=`${splitTitle[0]} ${splitTitle[1]}`;
    return newTitle;
}

export const isInCart =(state,id)=>{
    const result=state.selectedItems.find(item=>item.id===id)
    return result;
}
export const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}