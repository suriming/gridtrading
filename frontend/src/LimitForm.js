import { useState } from "react";

function LimitForm() {
  const t = useTranslate();
  const [values, setValues] = useState({
    upperPrice: 100,
    lowerPrice: 90,
  });
  //   const [upperPrice, setUppePrice] = useState("100");
  //   const [lowerPrice, setLowerPrice] = useState("90");
  // const handleUpperPriceChange = (e) => setUppePrice(e.target.value);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <form>
      <label htmlFor="upperPrice">상한</label>
      <input
        id="upperPrice"
        name="upperPrice"
        value={values.upperPrice}
        placeholder="상한"
        onChange={handleChange}
      />
    </form>
  );
}

export default LimitForm;
