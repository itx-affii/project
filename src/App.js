import DummySection from './component/DummySection';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Rainbow from './component/Rainbow';

const App = () => {
  return (
    <div className='bg-[#F1F1F2]'>
      <Navbar />
      <Rainbow />
      <Intro />
      <DummySection />
    </div>

  );
}

export default App;
