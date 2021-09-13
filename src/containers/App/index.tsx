import * as React from 'react'
import styles from './App.module.css'
import Header from '../Header'
import Footer from '../Footer'
import FirstSection from '../FirstSection'
import HistorySection from '../HistorySection'
import AboutSection from '../AboutSection'
import RoadmapSection from '../RoadmapSection'

class App extends React.Component {
  render() {

    return (
      <div className={styles.AppContainer}>
        <Header />
        <FirstSection />
        <HistorySection />
        <AboutSection />
        <RoadmapSection />
        <Footer />
      </div>
    )
  }
}

export default App
