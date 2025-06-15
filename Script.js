 // Grab elements once
const regForm    = document.getElementById('regForm');
const messageDiv = document.getElementById('message');
const entries    = document.getElementById('entriesList');
const clearBtn   = document.getElementById('clearBtn');

// Simple email regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ───────── Submit handler ───────── */
regForm.addEventListener('submit', e => {
  e.preventDefault();

  // Values
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Reset message styles
  messageDiv.textContent = '';
  messageDiv.classList.remove('error', 'success');

  /* Validation */
  if (!name || !email || !phone) {
    showMsg('Please fill out all fields.', 'error');
    return;
  }
  if (!emailPattern.test(email)) {
    showMsg('Please enter a valid email address.', 'error');
    return;
  }

  /* Passed!  → 1) show success  2) append entry  3) reset form */
  showMsg('Registration successful!', 'success');
  appendEntry({ name, email, phone });
  regForm.reset();
});

/* ───────── “Clear” button ───────── */
clearBtn.addEventListener('click', () => {
  regForm.reset();               // empties inputs
  showMsg('', '');               // clear message
});

/* Helper: display message */
function showMsg(text, type) {
  messageDiv.textContent = text;
  messageDiv.className   = `message ${type || ''}`.trim();
}

/* Helper: add <li> to list */
function appendEntry({ name, email, phone }) {
  const li = document.createElement('li');
  li.className = 'entry-item';
  li.innerHTML = `<strong>Name:</strong> ${name} |
                  <strong>Email:</strong> ${email} |
                  <strong>Phone:</strong> ${phone}`;
  entries.appendChild(li);
}
