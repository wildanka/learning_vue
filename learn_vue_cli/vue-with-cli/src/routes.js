import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import blogDetail from './components/blogDetail.vue';

export default [
    {path: '/', component: showBlogs},
    {path: '/add', component: addBlog},
    {path: '/blog/:blogId', component: blogDetail},
]