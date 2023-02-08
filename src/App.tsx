import Container from "./components/container/container";
import Dropdown from "./components/dropdown/dropdown";
import Table from "./components/table";
import Title from "./components/title/title";
import data from "./data/db";

function App() {
  return (
    <Container>
      <header className="mx-8 mb-4">
        <Title>
          <b>Hello</b> Gerard.
        </Title>
        <p>Here are the list of projects you submitted.</p>
      </header>
      <section className="px-4 py-8 backdrop-filter bg-opacity-40 rounded-lg backdrop-blur-lg bg-white">
        <section className="flex justify-between">
          <Title className="ml-4">Recent Projects</Title>
          <Dropdown>Sort by</Dropdown>
        </section>
        <Table data={data} className="mt-4" />
      </section>
    </Container>
  );
}

export default App;
