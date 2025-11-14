import { StrictMode, use, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StarRating } from "./components/StarRating.jsx";

function Test() {
  const [ratingMovie, setRatingMovie] = useState(0);
  return (
    <div>
      return
      <StarRating color="blue" maxRating={10} onSetRating={setRatingMovie} />
      <p>Этот фильм получил рейтинг {ratingMovie} звезд</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Ужасно", "Плохо", "Нормально", "Хорошо", "Изумительно"]}
    />
    <StarRating size={30} color="red" className="test" defaultRating={3} />
    <Test />
  </StrictMode>
);
