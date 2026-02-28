/* Counter */
let count = 0;
const counterEl = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  if (count > 0) count--;
  counterEl.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  counterEl.textContent = count;
});

/* Users */
const usersGrid = document.getElementById("usersGrid");

document.getElementById("loadUsers").addEventListener("click", async () => {
  usersGrid.textContent = "Loading users...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    usersGrid.innerHTML = "";

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;
      usersGrid.appendChild(card);
    });
  } catch {
    usersGrid.textContent = "Failed to load users.";
  }
});

/* Theme Toggle */
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});