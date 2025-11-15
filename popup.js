document.getElementById("saveToken").onclick = async () => {
  const t = document.getElementById("token").value;
  chrome.storage.sync.set({ token: t });
  alert("Token saved!");
  loadGrades();
};

async function loadGrades() {
  const data = await chrome.storage.sync.get("token");
  const container = document.getElementById("grades");

  if (!data.token) {
    container.innerHTML = "<p>No token saved.</p>";
    return;
  }

  const token = data.token;

  const canvasBase = "https://canvas.its.virginia.edu/api/v1";

  const courses = await fetch(
    `${canvasBase}/courses?enrollment_state=active`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  ).then(r => r.json());

  container.innerHTML = "";

  courses.forEach(course => {
    const grade =
      course.enrollments?.[0]?.computed_current_score ?? "N/A";

    const div = document.createElement("div");
    div.className = "course";
    div.innerHTML = `<strong>${course.name}</strong><br>Grade: ${grade}`;
    container.appendChild(div);
  });
}

loadGrades();
