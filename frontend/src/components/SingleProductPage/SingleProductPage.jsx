import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function SingleProductPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>{loading ? <div>Success</div> : <img src={data.image}></img>}</div>
  );
}

export default SingleProductPage;
