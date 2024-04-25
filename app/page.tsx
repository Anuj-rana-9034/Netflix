
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Questions from './components/Questions'
import Sectionist from './components/Sectionist'
import Sectionsec from './components/Sectionsec'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Sectionist
        head="Enjoy on your TV"
        para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.        "
        img="/img/tv.png"     
        />
        <Sectionsec
         head="Download your shows to watch offline         "
         para="Save your favourites easily and always have something to watch.         "
         img="/img/mobile.jpg"
        />
         <Sectionist
        head="Watch everywhere    "
        para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.        "
        img="/img/appletv.png"  
        />
          <Sectionsec
         head="Create profiles for kids         "
         para="Send children on adventures with their favourite characters in a space made just for them—free with your membership.         "
         img="/img/childs.png"
        />
        <Questions/>
        <Footer/>
      
    </>
  )
}

export default Home