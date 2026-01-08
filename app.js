const BASE =
  "https://raw.githubusercontent.com/k5m85c8s8x-svg/watch-hub/main";

async function loadSection(section) {
  const map = {
    watchfaces: "watchfaces/faces.json",
    firmware: "firmware/firmware.json",
    faq: "faq/faq.json"
  };

  const url = `${BASE}/${map[section]}`;
  const res = await fetch(url);
  const data = await res.json();

  render(section, data);
}

function render(section, data) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  if (section === "faq") {
    data.forEach(item => {
      content.innerHTML += `<p><b>${item.q}</b><br>${item.a}</p>`;
    });
  } else {
    data.forEach(item => {
      content.innerHTML += `
        <div>
          <b>${item.name || item.version}</b><br>
          ${item.description || ""}<br>
          <a href="${item.download}" target="_blank">Скачать</a>
        </div><hr>`;
    });
  }
}
