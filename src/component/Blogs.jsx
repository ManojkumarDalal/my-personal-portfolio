import Tabs from './commonUI/Tabs';
import Title from './commonUI/Title';

const Blogs = () => {
  return (
    <section id="blogs" className='mx-auto py-16 bg-secondary'>
        <div className='container space-y-8'>
            <Title title="My Blogs" />
            <Tabs />
        </div>
    </section>
  )
}

export default Blogs;