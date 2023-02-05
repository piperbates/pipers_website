import React, { useEffect, useState } from 'react';
import { Route } from "wouter";
import { ModalContext } from './components/Modal/ModalContext';

import './App.scss';
import { Header } from './components/Header/Header';
import { Page } from './components/Page/Page';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CreativePage } from './pages/CreativePage';
import { OnlineCV } from './pages/OnlineCV/OnlineCV';
import { Footer } from './components/Footer/Footer';
import { PageValues } from './PageValues';
import { headerImages } from './images/pageIdentifiers/'
import { FloatingLinks } from './components/FloatingLinks/FloatingLinks';
import { Modal } from './components/Modal/Modal';
import { cvData } from './pages/OnlineCV/cv-data';

function App() {  

  const { landingPage, codingProjectsPage, aboutPage, creativeProjectsPage } = headerImages;
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{}>({});

  useEffect(()=>{
    if(modalOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';

    }
  }, [modalOpen])

  return (
    
    <div className="App">
      {modalOpen && 
        <ModalContext.Provider 
          value={{
            modalOpen, 
            setModalOpen,
            modalContent,
            setModalContent
          }}
          >
            <Modal />
        </ModalContext.Provider>
        }

        <FloatingLinks />

        <Header />
        
        <Route path="/">
          <Page name={PageValues.TOP} image={landingPage.image} imageDescription={landingPage.imageDescription}>
            <LandingPage />
          </Page>
          <Page name={PageValues.PROJECTS} image={codingProjectsPage.image} imageDescription={codingProjectsPage.imageDescription}>
            <ModalContext.Provider value={{modalOpen,setModalOpen, setModalContent}}>
              <ProjectsPage />
            </ModalContext.Provider>
          </Page>
          <Page name={PageValues.ABOUT} image={aboutPage.image} imageDescription={aboutPage.imageDescription}>
            <AboutPage />
          </Page>
          <Page name={PageValues.CREATIVE} image={creativeProjectsPage.image} imageDescription={creativeProjectsPage.imageDescription}>
            <ModalContext.Provider value={{modalOpen,setModalOpen, setModalContent}}>
              <CreativePage />
            </ModalContext.Provider>
          </Page>
        <Footer />
      </Route>

      <Route path="/online_cv">
        <OnlineCV />
      </Route>
    </div>
  );
}

export default App;
