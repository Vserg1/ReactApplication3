import React from "react";
import "./styles.css";

const movie = {
  title: "Title new",
  vote_average: 10.1,
  image: "http://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
};

function Image(propc) {
  console.log("Image propc", propc);
  return <img src={propc.src} alt={propc.alt} />;
}

function MovieItem(propc) {
  console.log("propc=", propc);
  const {
    data: { title, vote_average, image }
  } = propc;

  return (
    <div>
      <Image src={image} alt={title} />
      <p>{title}</p>
      <p>{vote_average}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}
