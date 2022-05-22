import { db } from "../../firbase";
import { doc, getDoc } from "firebase/firestore";

async function subscribePlan(uid, priceId) {
  const customersDbRef = doc(db, "customers", uid);
  const querySnapshot = await getDoc(customersDbRef);
  if (querySnapshot.exists()) {
    console.log("Document data:", querySnapshot.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return querySnapshot.data();
}

export default subscribePlan;