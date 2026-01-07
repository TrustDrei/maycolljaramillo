const DEFAULT_MESSAGES = {
  es: {
    sending: 'Enviando...',
    success: 'Gracias. Te respondere en menos de 24h.',
    error: 'No se pudo enviar. Intenta de nuevo.',
    missing: 'Falta configurar el endpoint de envio.'
  },
  en: {
    sending: 'Sending...',
    success: "Thanks. I'll reply within one business day.",
    error: 'Unable to send. Please try again.',
    missing: 'Missing form endpoint.'
  }
};

const getMessages = (form) => {
  const lang = form.getAttribute('data-form-lang') === 'en' ? 'en' : 'es';
  return DEFAULT_MESSAGES[lang];
};

const ensureStatusElement = (form) => {
  let status = form.querySelector('[data-form-status]');
  if (!status) {
    status = document.createElement('p');
    status.setAttribute('data-form-status', 'true');
    status.setAttribute('aria-live', 'polite');
    status.className = 'mt-2 text-sm text-muted';
    form.append(status);
  }
  return status;
};

const setStatus = (status, message) => {
  status.textContent = message;
};

const setBusyState = (
  form,
  button,
  isBusy
) => {
  if (isBusy) {
    form.setAttribute('aria-busy', 'true');
    form.setAttribute('data-form-sending', 'true');
  } else {
    form.removeAttribute('aria-busy');
    form.removeAttribute('data-form-sending');
  }

  if (button) {
    button.disabled = isBusy;
  }
};

const isHoneypotFilled = (form) => {
  const honeypot = form.querySelector('[name="bot-field"]');
  return Boolean(honeypot?.value?.trim());
};

const getEndpoint = (form) => {
  const dataEndpoint = form.getAttribute('data-form-endpoint');
  if (dataEndpoint) return dataEndpoint;
  const action = form.getAttribute('action');
  if (action) return action;
  return null;
};

const collectFormData = (form) => {
  const formData = new FormData(form);
  return {
    name: formData.get('name')?.toString().trim() ?? '',
    email: formData.get('email')?.toString().trim() ?? '',
    project: formData.get('project')?.toString().trim() ?? '',
    message: formData.get('message')?.toString().trim() ?? '',
    locale: formData.get('locale')?.toString().trim() ?? form.getAttribute('data-form-lang') ?? 'es',
    access_key: formData.get('access_key')?.toString().trim() ?? '',
    captcha: formData.get('captcha')?.toString().trim() ?? '',
    'bot-field': formData.get('bot-field')?.toString().trim() ?? ''
  };
};

const handleSubmit = async (event, form) => {
  event.preventDefault();

  if (form.hasAttribute('data-form-sending')) return;
  if (isHoneypotFilled(form)) return;

  const messages = getMessages(form);
  const status = ensureStatusElement(form);
  const endpoint = getEndpoint(form);
  const submitButton = form.querySelector('button[type="submit"]');

  if (!endpoint) {
    setStatus(status, messages.missing);
    return;
  }

  setBusyState(form, submitButton, true);
  setStatus(status, messages.sending);

  try {
    const requestPayload = collectFormData(form);

    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(requestPayload),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    const responsePayload = await response.json().catch(() => null);
    const ok = response.ok || responsePayload?.ok === true;

    if (ok) {
      setStatus(status, messages.success);
      form.reset();
      return;
    }

    setStatus(status, messages.error);
    if (responsePayload?.errors || responsePayload?.message) {
      console.warn(
        'Form submission error',
        responsePayload?.errors ?? responsePayload?.message ?? responsePayload
      );
    }
  } catch (error) {
    console.warn('Form submission failed', error);
    setStatus(status, messages.error);
  } finally {
    setBusyState(form, submitButton, false);
  }
};

const initContactForms = () => {
  const forms = document.querySelectorAll('form[data-form-handler="contact"]');
  if (!forms.length) return;

  forms.forEach((form) => {
    ensureStatusElement(form);
    form.addEventListener('submit', (event) => handleSubmit(event, form));
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForms);
} else {
  initContactForms();
}
