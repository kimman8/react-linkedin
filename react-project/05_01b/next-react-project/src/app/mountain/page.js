async function getData() {
  const res = await fetch('https://snowtooth-api-rest.fly.dev');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <h1>List status info</h1>
      <table>
        <thead>
          <tr>
            <th>Lift name</th>
            <th>current status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
