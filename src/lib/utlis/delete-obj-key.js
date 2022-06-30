export const DeleteObjKey = async (data,key =[])=> {
    if(typeof(data) !== "undefined" && typeof(data) === "object"){
        for(let i = 0; i < key.length;i++){
            Reflect.deleteProperty(data,key[i])
        }
        return data

    }
}
