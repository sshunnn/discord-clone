import { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelector } from "../app/hooks";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photoUrl: string;
    email: string;
    displayName: string;
  };
}

const useSubCollection = (
    collectionName: string, subCollectionName: string
) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelector((state) => state.channel.channelId);

  useEffect(() => {
    let collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "asc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [channelId]);

  return { subDocuments };
};

export default useSubCollection;
