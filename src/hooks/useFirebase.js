import React, { useContext, useEffect, useState } from "react";
import { db } from "../components/firebase/config";

 const useFirebase = (collection, condition) => {

  const [documents, setDocument] = useState([]);

  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt")

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
