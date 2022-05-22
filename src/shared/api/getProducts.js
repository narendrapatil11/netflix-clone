import { db } from "../../firebase";

async function getProducts(callback) {
  const data = [];
  const querySnapshot = await db.collection("products").get();
  querySnapshot.forEach((productDoc) => {
    // const priceSnap = await productDoc.ref.collection('prices').get();
    // const { id: priceId } = priceSnap.docs.pop();
    const { name, description, role: priceId } = productDoc.data();
    data.push({
      id: productDoc.id,
      name,
      description,
      priceId
    })
  })
  return data;
}

export default getProducts;