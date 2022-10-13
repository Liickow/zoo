import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
//import HomePage from "./components/HomePage";
//import Footer from "./components/Footer";
//autres imports
import PageAffichage from "./PageAffichage/pageAffichage";
import PageAccueil from "./PageAccueil/PageAccueil";
import PageContact from "./PageContact/pageContact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<PageAccueil />} />
          <Route
            path="/espece/:id"
            element={
              <PageAffichage
                chemin="Famille,Espèce,Panda Géant"
                hrefs="/,/,/"
                image="https://cdn.pixabay.com/photo/2018/10/16/14/48/panda-3751598_960_720.jpg"
                type="espece"
                informations="Panda Géant,Ailuropoda Melanoleuca,Mammifère,Chine centrale,Bambou"
                paragraphe1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
                paragraphe2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
              />
            }
          />
          <Route
            path="/zoo/:id"
            element={
              <PageAffichage
                chemin="Pays,Zoo,Beauval"
                hrefs="/,/,/"
                image="https://st4.depositphotos.com/5092343/39033/i/450/depositphotos_390338944-stock-photo-beauval-zoo-park-signboard.jpg"
                type="zoo"
                informations="Zoo de Beauval,www.zoobeauval.com,44 hectares,34.00€,Avenue du Blanc 41110 Saint-Aignan,France"
                paragraphe1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
                paragraphe2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
              />
            }
          />
          <Route
            path="/individu/:id"
            element={
              <PageAffichage
                chemin="Individu,Pedro"
                hrefs="/,/"
                image="https://cdn.pixabay.com/photo/2018/10/16/14/48/panda-3751598_960_720.jpg"
                type="individu"
                informations="Pédro, Mâle,5m48,1,8 tonnes,25 decembre 2017,Panda Géant,Zoo de Beauval"
                paragraphe1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
                paragraphe2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
              />
            }
          />
          <Route
            path="/famille/:id"
            element={
              <PageAffichage
                chemin="Famille,Ursidae"
                hrefs="/,/"
                image="https://cdn.pixabay.com/photo/2018/10/16/14/48/panda-3751598_960_720.jpg"
                type="famille"
                informations="Urisdés,Ursidae"
                paragraphe1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
                paragraphe2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec cursus mi, sed finibus ipsum. Nulla venenatis commodo massa vitae mollis. Morbi non justo lorem. Donec non semper nulla. Vestibulum et sem quis mi placerat convallis. Mauris pharetra tempor elit, ut porta felis consectetur rhoncus. Sed id maximus arcu. Sed a nunc porta, egestas arcu eu, consectetur orci. Vestibulum vulputate varius placerat. Cras at enim luctus mi maximus rutrum in ac lacus. Ut eget suscipit odio. Fusce lacinia fringilla hendrerit. Quisque condimentum sed tortor in rhoncus"
              />
            }
          />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
          <Route path="/recherche" element={<Recherche />} />
          
          

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/zoo/:id" element={<AdminZoo />} />
          <Route path="/admin/individu/:id" element={<AdminIndividu />} />
          <Route path="/admin/espece/:id" element={<AdminEspece />} />

          <Footer />
          */
