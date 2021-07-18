import { useEffect, useState } from "react";
import { db } from "../components/firebase/config";

 const useFirebase = (collection, condition, lastdocument) => {

  const [documents, setDocument] = useState([]);
  const [lastDoc, setLastDoc] = useState();

  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt").limit(2);

    if(lastdocument) {
      setLastDoc(lastdocument);
      collectionRef = db.collection(collection).orderBy("createAt").startAfter(lastDoc);
    }

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    };

    const unsubprice = collectionRef.onSnapshot((snapshot) => {
      const document = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocument(document);
    });

    return unsubprice;

  }, [collection, condition]);

  return documents;
}

export default useFirebase;
