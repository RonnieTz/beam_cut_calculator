import Form from './components/Form';
import RafterSideView from './components/RafterView';
import SpactatorView from './components/SpactatorView';

export default function Home() {
  return (
    <main>
      <SpactatorView />
      <RafterSideView />
      <Form />
    </main>
  );
}
