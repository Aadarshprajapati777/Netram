async function getData() {
  const res = await fetch("http://127.0.0.1:8000/api/api");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log("data is", data);
  return data;
}

export default async function Page() {
  const data = await getData();
  console.log("data is", data);

  //display the array of objects
  return (
    <div>
      <h1>Tasks</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.task}</h1>
        </div>
      ))}
    </div>
  );
}
