import '@fontsource/inter';
import './styles/master.scss';
import TabGroup from './components/TabGroup';

function App() {
  return (
    <main style={{ padding: '4rem' }}>
      <p><b>Reordering Tabs —</b> Click and drag tabs to change their order per your liking. Your customised order will be persisted.</p>
      <br /><br /><br />
      <TabGroup allowReordering={true} />
    </main>
  )
}

export default App