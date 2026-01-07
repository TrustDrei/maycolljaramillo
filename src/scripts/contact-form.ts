type FormMessages = {
  sending: string;
  success: string;
  error: string;
  missing: string;
};

const DEFAULT_MESSAGES: Record<'es' | 'en', FormMessages> = {
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

const getMessages = (form: HTMLFormElement): FormMessages => {
  const lang = form.getAttribute('data-form-lang') === 'en' ? 'en' : 'es';
  return DEFAULT_MESSAGES[lang];
};

const ensureStatusElement = (form: HTMLFormElement): HTMLElement => {
  let status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) {
    status = document.createElement('p');
    status.setAttribute('data-form-status', 'true');
    status.setAttribute('aria-live', 'polite');
    status.className = 'mt-2 text-sm text-muted';
    form.append(status);
  }
  return status;
};

const setStatus = (status: HTMLElement, message: string) => {
  status.textContent = message;
};

const setBusyState = (
  form: HTMLFormElement,
  button: HTMLButtonElement | null,
  isBusy: boolean
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

const isHoneypotFilled = (form: HTMLFormElement) => {
  const honeypot = form.querySelector<HTMLInputElement>('[name="bot-field"]');
  return Boolean(honeypot?.value?.trim());
};

const getEndpoint = (form: HTMLFormElement) => {
  const dataEndpoint = form.getAttribute('data-form-endpoint');
  if (dataEndpoint) return dataEndpoint;
  const action = form.getAttribute('action');
  if (action) return action;
  return null;
};

const collectFormData = (form: HTMLFormElement) => {
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

const handleSubmit = async (event: SubmitEvent, form: HTMLFormElement) => {
  event.preventDefault();

  if (form.hasAttribute('data-form-sending')) return;
  if (isHoneypotFilled(form)) return;

  const messages = getMessages(form);
  const status = ensureStatusElement(form);
  const endpoint = getEndpoint(form);
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  if (!endpoint) {
    setStatus(status, messages.missing);
    return;
  }

  setBusyState(form, submitButton, true);
  setStatus(status, messages.sending);

  try {
    const payload = collectFormData(form);

    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    const payload = await response.json().catch(() => null);
    const ok = response.ok || payload?.ok === true;

    if (ok) {
      setStatus(status, messages.success);
      form.reset();
      return;
    }

    setStatus(status, messages.error);
    if (payload?.errors || payload?.message) {
      console.warn('Form submission error', payload?.errors ?? payload?.message ?? payload);
    }
  } catch (error) {
    console.warn('Form submission failed', error);
    setStatus(status, messages.error);
  } finally {
    setBusyState(form, submitButton, false);
  }
};

const initContactForms = () => {
  const forms = document.querySelectorAll<HTMLFormElement>('form[data-form-handler="contact"]');
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
