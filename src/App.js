import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Rainbow from './component/Rainbow';

const App = () => {
  return (
    <div className='bg-[#EFEFEF]'>
      <Navbar />
      <Rainbow />
      <Intro />
    </div>

  );
}

export default App;
