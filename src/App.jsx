import { useState } from "react";
import "./App.css";
import Compteur from "./components/Compteur";
import Navbar from "./components/Navbar";
import Post from "./components/Post";


 function App() {
  const [posts,setPosts] = useState([
    {
      id: 1,
      titre: "Loic Durand",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Annie versaire",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false, // lorsque l'element n'est pas liker par défaut c'est false.
    },
    {
      id: 6,
      titre: "Audy Bienvue",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 3,
      titre: "Jean lasalle",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 4,
      titre: "Pierre papier",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
  ])
  return (
  <div className="App">
    <Navbar />
    {
      posts.map((p=>
      <Post data={p} key={p.id} />
      ))}
  </div>
  );
}

export default App;



