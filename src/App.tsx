import { useEffect, useState } from "react";
import Container from "./components/container/container";
import Dropdown from "./components/dropdown/dropdown";
import Search from "./components/search";
import Table from "./components/table";
import { ITableBodyData } from "./components/table/table-body";
import ThemeSelector from "./components/theme-selector";
import Title from "./components/title/title";
import { useQueryStore, useSortStore } from "./lib/store";

function App(): JSX.Element {
  const sort = useSortStore((state) => state.sortType);
  const setQuery = useQueryStore((state) => state.setQuery);
  const setSort = useSortStore((state) => state.setSort);

  const [username, setUsername] = useState("");
  const [fetchedData, setFetchedData] = useState<
    ITableBodyData[] | undefined
  >();
  const [filteredProject, setFilteredProject] = useState<
    ITableBodyData[] | undefined
  >();

  const handleSortChange = (val: string) => {
    setSort(val);
  };

  /** Handle search input onChange
   * with Smart Label search, search query is not case sensitive
   *
   * Search field also support *case-insensitive* smart label searching
   * by `is:<ANY_ENUM_FIELD>` , `is:archived` , `not:<ANY_ENUM_FIELD>` ,
   * `not:archived` `after:<DATE>` . You can also come up with your own. Examples:
   * - ***is:archived is:testimonial is:completed*** will show archived videos of
   *   `type` "testimonial" and which have the `status` as `completed` or `COMPLETED`
   * - ***is:educational not:incomplete after:2022-06-02*** will show videos
   *   of `type` "educational", which have the `status` as **anything but**
   *   `incomplete` or `INCOMPLETE` and the `createdOn` is after the 2nd of June, 2022
   */
  const handleQueryChange = (val: string) => {
    setQuery(val);

    if (val === "") {
      setFilteredProject(
        fetchedData?.filter((project: ITableBodyData) => !project.archived),
      );
      return;
    }

    // Smart label search
    const isArchived = val.includes("is:archived");
    const isNotArchived = val.includes("not:archived");
    const isCompleted = val.includes("is:completed");
    const isNotCompleted = val.includes("not:completed");
    const isTestimonial = val.includes("is:testimonial");
    const isNotTestimonial = val.includes("not:testimonial");
    const isEducational = val.includes("is:educational");
    const isNotEducational = val.includes("not:educational");
    const isAfter = val.includes("after:");
    const isBefore = val.includes("before:");

    setFilteredProject(
      fetchedData?.filter((project) => {
        // Check if the project is archived
        if (isArchived && !project.archived) return false;
        if (isNotArchived && project.archived) return false;

        // Check if the project is completed
        if (isCompleted && project.status !== "completed") return false;
        if (isNotCompleted && project.status === "completed") return false;

        // Check if the project is testimonial
        if (isTestimonial && project.type !== "testimonial") return false;
        if (isNotTestimonial && project.type === "testimonial") return false;

        // Check if the project is educational
        if (isEducational && project.type !== "educational") return false;
        if (isNotEducational && project.type === "educational") return false;

        // Check if the project is created after a certain date
        if (isAfter) {
          const date = val.split("after:")[1];
          if (new Date(project.createdOn) < new Date(date)) return false;
        }

        // Check if the project is created before a certain date
        if (isBefore) {
          const date = val.split("before:")[1];
          if (new Date(project.createdOn) > new Date(date)) return false;
        }

        return true;
      }),
    );

    // Search by project name
    if (!val.includes("is:") && !val.includes("not:")) {
      setFilteredProject(
        fetchedData?.filter((project) =>
          project.name.toLowerCase().includes(val.toLowerCase()),
        ),
      );
    }
  };

  // execute only on first load
  useEffect(() => {
    document.title = "Awesome React Table";

    // Get random name
    fetch(
      `https://jsonplaceholder.typicode.com/users/${Math.floor(
        Math.random() * 10,
      )}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setUsername(res.name.split(" ")[0]);
      });

    // Get projects
    fetch(
      "https://raw.githubusercontent.com/ImBIOS/mock-projects-db/master/db.json",
    )
      .then((res) => res.json())
      .then((res) => {
        setFetchedData(res.data);
        setFilteredProject(res.data);
      });
  }, []);

  // execute on every sort change
  useEffect(() => {
    // Sort projects by sortType
    if (sort === "createdOn-asc") {
      setFilteredProject(
        filteredProject?.sort((a, b) =>
          new Date(a.createdOn) > new Date(b.createdOn) ? 1 : -1,
        ),
      );
    } else if (sort === "createdOn-desc") {
      setFilteredProject(
        filteredProject?.sort((a, b) =>
          new Date(a.createdOn) < new Date(b.createdOn) ? 1 : -1,
        ),
      );
    }
  }, [sort]);

  return (
    <Container>
      <header className="mx-8 mb-4">
        <Title>
          <b>Hello</b>
          {username ? `, ${username}` : ""}!
        </Title>
        <p>Here are the list of projects you submitted.</p>
      </header>
      <section className="rounded-lg bg-white bg-opacity-40 px-4 py-8 backdrop-blur-lg backdrop-filter dark:bg-gray-800 dark:bg-opacity-40">
        <section className="flex items-center justify-between">
          <Title className="ml-4">Recent Projects</Title>
          <section className="flex items-center justify-between">
            <Search handleQueryChange={handleQueryChange} />
            <Dropdown handleValueChange={handleSortChange} className="ml-8">
              Sort by
            </Dropdown>
            <ThemeSelector className="ml-4" />
          </section>
        </section>
        {filteredProject ? (
          <Table data={filteredProject} className="mt-4" />
        ) : null}
      </section>
    </Container>
  );
}

export default App;
