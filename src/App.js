import { Route, Routes, NavLink } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import PageNotFound from "./pages/PageNotFound"
import Post from './pages/Post'
import Footer from './components/Footer'
import './App.css';

function App()  {
     return (
    <div>

        <nav className='navigation'>
            <NavLink to ="/">Головна</NavLink>
            <NavLink to ="/about">Про нас</NavLink>
            <NavLink to ="/posts">Статті</NavLink>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/products/:postId' element={<Post />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>

        <footer><Footer/></footer>
      
    </div>
  )
}

export default App;
