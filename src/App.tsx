import Container from "./components/container";
import Title from "./components/title";
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
      <section className="px-4 py-8">
        <section className="flex justify-between">
          <Title>
            <b>Recent Projects</b>
          </Title>
          <div>Sort by v</div>
        </section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Created</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project 1</td>
              <td>Project Type 1</td>
              <td>Project Status 1</td>
              <td>Project Date 1</td>
              <td>Manage</td>
            </tr>
            {data.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.type}</td>
                <td>{project.status}</td>
                <td>{project.createdOn}</td>
                <td>Manage</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Container>
  );
}

export default App;
