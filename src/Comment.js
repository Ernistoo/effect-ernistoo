import { useState, useEffect } from "react";

function Comment(props) {
  const [com, setCom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Yo");
    async function getCom() {
      const com = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const data2 = await com.json();
      console.log(data2);
      setCom(data2);
      setLoading(false);
    }
    getCom();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>postId: {com.postId}</p>
          <p>id: {com.id}</p>
          <p>name: {com.name}</p>
          <p>email: {com.email}</p>
          <p>body: {com.body}</p>
        </>
      )}
    </>
  );
}

export default Comment;
