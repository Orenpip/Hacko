// Create a floating grade widget
const widget = document.createElement("div");
widget.id = "canvas-grade-widget";
widget.style.position = "fixed";
widget.style.bottom = "20px";
widget.style.right = "20px";
widget.style.width = "260px";
widget.style.maxHeight = "350px";
widget.style.overflowY = "auto";
widget.style.background = "white";
widget.style.border = "1px solid #ccc";
widget.style.borderRadius = "10px";
widget.style.padding = "12px";
widget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.25)";
widget.style.zIndex = "999999";
widget.style.fontFamily = "Arial, sans-serif";
widget.innerHTML = "<strong>Loading grades...</strong>";

document.body.appendChild(widget);

async function loadGradesOnPage() {
  const data = await chrome.storage.sync.get("token");

  if (!data.token) {
    widget.innerHTML = "<strong>No API token saved.</strong><br>Open extension popup.";
    return;
  }

  const token = data.token;

  const canvasBase = "https://canvas.its.virginia.edu/api/v1";

  try {
    const courses = await fetch(
      `${canvasBase}/courses?enrollment_state=active`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then(r => r.json());

    widget.innerHTML = "<strong>Your Grades</strong><br>";

    courses.forEach(course => {
      const grade =
        course.enrollments?.[0]?.computed_current_score ?? "N/A";

      const div = document.createElement("div");
      div.style.marginTop = "8px";
      div.style.padding = "6px";
      div.style.borderBottom = "1px solid #eee";
      div.innerHTML = `<strong>${course.name}</strong><br>Grade: ${grade}`;
      widget.appendChild(div);
    });
  } catch (e) {
    widget.innerHTML = "<strong>Error loading grades.</strong>";
    console.error(e);
  }
}

loadGradesOnPage();
