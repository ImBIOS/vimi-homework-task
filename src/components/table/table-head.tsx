type Props = Record<string, unknown>;

const TableHead = (props: Props): JSX.Element => (
  <section className="mb-4 w-full rounded-lg bg-gray-100 text-left font-semibold">
    <div className="mx-4 grid grid-cols-6 gap-4 py-3 pr-2 pl-4">
      <div className="col-span-1 lg:col-span-2">Name</div>
      <div>Type</div>
      <div className="col-span-2">Status</div>
      <div className="col-span-2 lg:col-span-1">Created</div>
      <div className="col-start-8 lg:col-start-7">Manage</div>
    </div>
  </section>
);

export default TableHead;
