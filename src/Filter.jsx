import { CATEGORIES } from "./catagories";
function Filter() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <button className="btn btn-large btn-all">all</button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <button
                className="btn btn-catagory"
                style={{ backgroundColor: cat.color }}
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
