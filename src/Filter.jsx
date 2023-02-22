import { CATEGORIES } from "./catagories";
function Filter({ setCata }) {
  return (
    <>
      <aside>
        <ul>
          <li>
            <button
              className="btn btn-large btn-all"
              onClick={() => setCata("all")}
            >
              all
            </button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <button
                className="btn btn-catagory"
                style={{ backgroundColor: cat.color }}
                onClick={() => setCata(cat.name)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Filter;
