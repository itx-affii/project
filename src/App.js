import DummySection from './component/DummySection';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Scroller from './component/Scroller';

const App = () => {
  return (
    <div className='bg-[#F1F1F2]'>
      <Navbar />
      {/* <Rainbow /> */}
      <Intro />
      <DummySection />
      <Scroller />
    </div>

  );
}

export default App;
