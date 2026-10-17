const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const statusMessage = document.querySelector('#form-status');
    const submitButton = contactForm.querySelector('.contact-submit');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = contactForm.elements.name.value.trim();
        const choice = contactForm.querySelector('input[name="Auswahl"]:checked');

        document.querySelector('#email-subject').value = name;
        document.querySelector('#request-type-value').value = choice.value === 'help'
            ? window.siteT('categoryHelp')
            : window.siteT('categoryMember');

        const formData = new FormData(contactForm);

        submitButton.disabled = true;
        statusMessage.textContent = '';
        statusMessage.className = 'form-status';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData
            });

            const result = await response.json().catch(() => null);
            const serviceErrors = Array.isArray(result?.errors)
                ? result.errors.map((item) => item.message).filter(Boolean).join(' ')
                : '';

            if (!response.ok || result?.ok === false || serviceErrors) {
                throw new Error(serviceErrors || result?.error || result?.message || `Formspree antwortet mit Fehler ${response.status}.`);
            }

            contactForm.hidden = true;
            statusMessage.textContent = window.siteT('successMessage');
            statusMessage.classList.add('is-success');
        } catch (error) {
            statusMessage.textContent = error instanceof TypeError
                ? window.siteT('connectionError')
                : `${window.siteT('sendFailed')}: ${error.message}`;
            statusMessage.classList.add('is-error');
            submitButton.disabled = false;
        }
    });
}
