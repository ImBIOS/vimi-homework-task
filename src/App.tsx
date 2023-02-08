import Container from "./components/container/container";
import Dropdown from "./components/dropdown/dropdown";
import Table from "./components/table";
import Title from "./components/title/title";
import data from "./data/db";

function App(): JSX.Element {
  return (
    <Container>
      <header className="mx-8 mb-4">
        <Title>
          <b>Hello</b> Gerard.
        </Title>
        <p>Here are the list of projects you submitted.</p>
      </header>
      <section className="rounded-lg bg-white bg-opacity-40 px-4 py-8 backdrop-blur-lg backdrop-filter">
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
