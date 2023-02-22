async function loadFacts() {
  const res = await fetch(
    "https://arfwvmlzvrvdvxmttjej.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZnd2bWx6dnJ2ZHZ4bXR0amVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNjkxNDgsImV4cCI6MTk5MDg0NTE0OH0.JFnbaO6w8jqWF1FAREsvrR3IdNE0r61LHVu7AZoUPtU",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZnd2bWx6dnJ2ZHZ4bXR0amVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNjkxNDgsImV4cCI6MTk5MDg0NTE0OH0.JFnbaO6w8jqWF1FAREsvrR3IdNE0r61LHVu7AZoUPtU",
      },
    }
  );
  data = await res.json();
  console.log(data);
  createFactList(data);
}

loadFacts();

// fact form close button
const form = document.querySelector(".fact-form");
const btn = document.querySelector(".sp");
btn.addEventListener("click", (e) => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share fact";
  }
});
// clearing list
const factsList = document.querySelector(".facts-list");
factsList.innerHTML = "";

// facts display....
createFactList = (dataArray) => {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
    ${fact.fact}

    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(source)</a>
  </p>
  <span class="tag" style="background-color: #3b82f6"
    >${fact.catagory}</span>
  <div class="vote-buttons">
    <button>👍 ${fact.votesIntresting}</button>
    <button>👎 ${fact.votesFalse}</button>
    <button>⛔ ${fact.votesMindblowing}      </button>
  </div>
</li>`
  );
  html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
};
