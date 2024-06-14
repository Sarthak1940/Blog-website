import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/Appcontext';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { TagPage } from './Pages/TagPage';
import { CategoryPage } from './Pages/CategoryPage';
import {BlogPage}  from './Pages/BlogPage';

function App() {

  const {fetchBlogData} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogData(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogData(Number(page), category);
    }
    else {
      fetchBlogData(Number(page));
    }
  }, [location.pathname, location.search]);
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>

    </Routes>
  );
}

export default App;
