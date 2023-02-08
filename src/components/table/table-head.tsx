type Props = {};

const TableHead = (props: Props) => {
  return (
    <section className="w-full bg-gray-100 text-left rounded-lg mb-4 font-semibold">
      <div className="grid grid-cols-6 gap-4 mx-4 pr-2 py-3 pl-4">
        <div className="col-span-1 lg:col-span-2">Name</div>
        <div>Type</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2 lg:col-span-1">Created</div>
        <div className="col-start-8 lg:col-start-7">Manage</div>
      </div>
    </section>
  );
};

export default TableHead;
