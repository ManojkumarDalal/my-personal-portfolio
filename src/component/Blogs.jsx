import TabsWithBlogs from './TabsWithBlogs';
import Title from './ui/Title';

const Blogs = () => {
  return (
    <section id="blogs" className='mx-auto py-16 bg-secondary'>
        <div className='container'>
            <Title title="My Blogs" />
            <TabsWithBlogs />
        </div>
    </section>
  )
}

export default Blogs;