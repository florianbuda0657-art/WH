const siteTranslations = {
    de: {
        brandTitle: 'WH - Wir Helfen!',
        homeInfoHeading: 'Wir sind für dich da',
        homeInfoText: 'Wir hören dir zu, wenn du eine schwierige Zeit durchmachst, und suchen gemeinsam mit dir nach passenden Lösungen. Unsere Unterstützung ist komplett kostenlos.',
        menuTitle: 'Menü',
        languageTitle: 'Sprache',
        infoLabel: 'Info',
        emailNavLabel: 'E-Mail',
        openMenu: 'Menü öffnen',
        closeMenu: 'Menü schließen',
        emailPage: 'Zur E-Mail-Seite',
        infoPage: 'Kontaktinformationen',
        homePage: 'Zur Startseite',
        infoTitle: 'Kontaktinformationen | WH - Wir Helfen!',
        infoHeading: 'Kontakt per E-Mail',
        infoText: 'Wenn du uns per E-Mail kontaktierst, teilen wir dir anschließend unseren Telegram-Kontakt mit, damit wir uns einfacher austauschen können.',
        infoEmailLink: 'E-Mail schreiben',
        contactTitle: 'Kontakt | WH - Wir Helfen!',
        contactHeading: 'Schreib uns',
        contactIntro: 'Füll das Formular aus, wir melden uns bei dir.',
        nameLabel: 'Name',
        emailLabel: 'E-Mail-Adresse',
        topicLegend: 'Worum geht es?',
        memberOption: 'Ich will Mitglied sein im WH-Team',
        helpOption: 'Ich brauche Hilfe',
        messageLabel: 'Dein Anliegen',
        submitButton: 'Absenden',
        categoryMember: 'Mitarbeiterbewerbung – Ich will Mitglied sein im WH-Team',
        categoryHelp: 'Hilfsanfrage – Ich brauche Hilfe',
        successMessage: 'Vielen Dank! Wir kontaktieren Sie per E-Mail.',
        connectionError: 'Formspree ist gerade nicht erreichbar. Prüfe deine Internetverbindung und versuche es erneut.',
        sendFailed: 'Senden fehlgeschlagen'
    },
    en: {
        brandTitle: 'WH - We Help!',
        homeInfoHeading: 'We are here for you',
        homeInfoText: 'We listen when times are hard and work with you to find solutions. Our support is completely free.',
        menuTitle: 'Menu',
        languageTitle: 'Language',
        infoLabel: 'Info',
        emailNavLabel: 'Email',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        emailPage: 'Go to the contact page',
        infoPage: 'Contact information',
        homePage: 'Go to the home page',
        infoTitle: 'Contact information | WH - We Help!',
        infoHeading: 'Contact by email',
        infoText: 'When you contact us by email, we will share our Telegram contact details so we can communicate more easily.',
        infoEmailLink: 'Send an email',
        contactTitle: 'Contact | WH - We Help!',
        contactHeading: 'Contact us',
        contactIntro: 'Fill out the form and we will get back to you.',
        nameLabel: 'Name',
        emailLabel: 'Email address',
        topicLegend: 'What is this about?',
        memberOption: 'I want to join the WH team',
        helpOption: 'I need help',
        messageLabel: 'Your message',
        submitButton: 'Send',
        categoryMember: 'Team membership application – I want to join the WH team',
        categoryHelp: 'Help request – I need help',
        successMessage: 'Thank you! We will contact you by email.',
        connectionError: 'Formspree is unavailable right now. Check your internet connection and try again.',
        sendFailed: 'Sending failed'
    },
    hu: {
        brandTitle: 'WH - Segítünk!',
        homeInfoHeading: 'Számíthatsz ránk',
        homeInfoText: 'Meghallgatunk, amikor nehéz időszakon mész keresztül, és közösen keresünk megoldásokat. Segítségünk teljesen ingyenes.',
        menuTitle: 'Menü',
        languageTitle: 'Nyelv',
        infoLabel: 'Info',
        emailNavLabel: 'E-mail',
        openMenu: 'Menü megnyitása',
        closeMenu: 'Menü bezárása',
        emailPage: 'Kapcsolat oldal megnyitása',
        infoPage: 'Kapcsolati információk',
        homePage: 'Vissza a főoldalra',
        infoTitle: 'Kapcsolati információk | WH - Segítünk!',
        infoHeading: 'Kapcsolat e-mailben',
        infoText: 'Ha e-mailben felveszed velünk a kapcsolatot, utána megadjuk a Telegram-elérhetőségünket, hogy könnyebben tudjunk beszélgetni.',
        infoEmailLink: 'E-mail írása',
        contactTitle: 'Kapcsolat | WH - Segítünk!',
        contactHeading: 'Írj nekünk',
        contactIntro: 'Töltsd ki az űrlapot, és felvesszük veled a kapcsolatot.',
        nameLabel: 'Név',
        emailLabel: 'E-mail-cím',
        topicLegend: 'Miben segíthetünk?',
        memberOption: 'Szeretnék a WH csapat tagja lenni',
        helpOption: 'Segítségre van szükségem',
        messageLabel: 'Üzeneted',
        submitButton: 'Küldés',
        categoryMember: 'Csapattagsági jelentkezés – Szeretnék a WH csapat tagja lenni',
        categoryHelp: 'Segítségkérés – Segítségre van szükségem',
        successMessage: 'Köszönjük! E-mailben felvesszük veled a kapcsolatot.',
        connectionError: 'A Formspree jelenleg nem érhető el. Ellenőrizd az internetkapcsolatot, majd próbáld újra.',
        sendFailed: 'A küldés nem sikerült'
    }
};

let currentSiteLanguage = 'de';
try {
    const savedLanguage = localStorage.getItem('wh-website-language');
    if (savedLanguage in siteTranslations) currentSiteLanguage = savedLanguage;
} catch {
    // Keep German as the default if browser storage is unavailable.
}

window.siteT = (key) => siteTranslations[currentSiteLanguage][key] ?? siteTranslations.de[key] ?? key;

window.applySiteLanguage = () => {
    document.documentElement.lang = currentSiteLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = window.siteT(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        element.setAttribute('aria-label', window.siteT(element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll('[data-language]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.language === currentSiteLanguage));
    });
};

document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
        currentSiteLanguage = button.dataset.language;
        try {
            localStorage.setItem('wh-website-language', currentSiteLanguage);
        } catch {
            // The selected language still applies for the current page.
        }
        window.applySiteLanguage();
    });
});

window.applySiteLanguage();
