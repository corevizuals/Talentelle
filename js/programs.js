const listViewBtn = document.getElementById("list-view");
const gridViewBtn = document.getElementById("grid-view");
const courseList = document.querySelector(".course-list");

// Event listener for List View
listViewBtn.addEventListener("click", () => {
  courseList.classList.add("list-layout");
  courseList.classList.remove("grid-layout");
  listViewBtn.classList.add("active");
  gridViewBtn.classList.remove("active");
});

// Event listener for Grid View
gridViewBtn.addEventListener("click", () => {
  courseList.classList.add("grid-layout");
  courseList.classList.remove("list-layout");
  gridViewBtn.classList.add("active");
  listViewBtn.classList.remove("active");
});