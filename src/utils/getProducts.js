export const getProducts = async (obejct) => {
    console.log(obejct);
    const res = await fetch(`https://dummyjson.com/products`)
    console.log(res);
    return res
}

