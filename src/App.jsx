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

  const liker = (data) => {
    const  donneeCopier = [...posts];
    const index = posts.indexOf(data)
    donneeCopier[index] = {...posts[index],
      liker: !posts[index].liker };
      setPosts(donneeCopier);
      console.log(donneeCopier);
  };
  const effacerPost = (id) =>{
    const nouvelledonne = posts.filter((p) => p.id != id)
    setPosts(nouvelledonne);
  };

  const nombreLiker = posts.filter((p) => p.liker);

  return (
  <div className="App">
    <Navbar nombreLike={nombreLiker.length} />
    {posts.map((p=>
      <Post data={p} key={p.id} liker={liker}
      supression={effacerPost} />
      ))}
  </div>
  );
}

export default App;



