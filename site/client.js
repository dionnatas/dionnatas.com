const theme = document.querySelector('[data-theme-switch]');
const root = document.documentElement;
const dark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = () => { try { return localStorage.getItem('portfolio-theme'); } catch { return null; } };
const setTheme = (value) => {
  root.dataset.theme = value;
  theme.textContent = value === 'dark' ? 'Tema claro' : 'Tema escuro';
};
if (theme) {
  setTheme(savedTheme() || (dark.matches ? 'dark' : 'light'));
  theme.hidden = false;
  theme.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch { /* Keep the current theme. */ }
  });
  dark.addEventListener('change', () => {
    if (!savedTheme()) setTheme(dark.matches ? 'dark' : 'light');
  });
}

const contact = document.querySelector('[data-contact]');
if (contact) {
  const status = document.querySelector('#form-status');
  const submit = contact.querySelector('button[type=submit]');
  contact.hidden = false;
  contact.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    const fields = Object.fromEntries(new FormData(contact));
    const from_name = fields.name.trim();
    const from_email = fields.email.trim();
    const message = fields.message.trim();
    if (!from_name || !from_email || !message) {
      status.dataset.state = 'error';
      status.textContent = 'Preencha nome, e-mail e mensagem.';
      return;
    }
    submit.disabled = true;
    status.dataset.state = 'pending';
    status.textContent = 'Enviando…';
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(12000),
        body: JSON.stringify({
          service_id: 'service_3q36vhi',
          template_id: 'template_yvh2d79',
          user_id: '6H2yPPRpIAjMRpTof',
          template_params: { from_name, from_email, subject: fields.subject.trim(), message, to_name: 'Dionnatas', reply_to: from_email },
        }),
      });
      if (!response.ok) throw new Error('Não foi possível enviar.');
      contact.reset();
      status.dataset.state = 'success';
      status.textContent = 'Mensagem enviada.';
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'Não foi possível enviar agora. Tente novamente ou use o link de e-mail.';
    } finally {
      submit.disabled = false;
    }
  });
}
