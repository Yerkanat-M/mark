// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        const nav = document.querySelector('.nav');
        const toggle = document.querySelector('.menu-toggle');
        if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
            toggle.classList.remove('active');
            const menuIcon = toggle.querySelector('.menu-icon');
            const menuText = toggle.querySelector('.menu-text');
            if (menuIcon) menuIcon.textContent = '☰';
            if (menuText) menuText.textContent = 'Меню';
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav');
if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);
        const menuIcon = menuToggle.querySelector('.menu-icon');
        const menuText = menuToggle.querySelector('.menu-text');
        if (menuIcon) {
            menuIcon.textContent = isOpen ? '✕' : '☰';
        }
        if (menuText) {
            menuText.textContent = isOpen ? 'Закрыть' : 'Меню';
        }
    });
}

const translations = {
    ru: {
        navAbout: 'О нас',
        navServices: 'Услуги',
        navProcess: 'Этапы',
        navContacts: 'Контакты',
        whatsapp: 'Написать в WhatsApp',
        heroTitle: 'Регистрация товарного знака и защита авторских прав',
        heroSubtitle: '100% гарантия регистрации или возврат денег. Зарегистрировали более 500 брендов. Работаем по всему Казахстану.',
        heroCta: 'БЕСПЛАТНАЯ ПРОВЕРКА',
        aboutTitle: 'О компании Markly',
        aboutText: 'Markly - это команда профессионалов, специализирующихся на регистрации и защите товарных знаков. Мы помогаем бизнесам защитить свои бренды, логотипы и название компании на национальном и международном уровнях. Наша цель - обеспечить максимальную защиту интеллектуальной собственности вашей компании.',
        service1Title: 'Регистрация товарного знака',
        service1Text: 'Сопровождение этапов подачи заявки и получения официального свидетельства.',
        service2Title: 'Проверка уникальности',
        service2Text: 'Анализ обозначения и поиск схожих зарегистрированных знаков.',
        service3Title: 'Подготовка документов',
        service3Text: 'Полный пакет документов, заполнение заявок и сопровождение подачи.',
        service4Title: 'Международное оформление',
        service4Text: 'Поддержка регистрации бренда через международные системы.',
        service5Title: 'Защита прав',
        service5Text: 'Консультации и помощь в случае споров по использованию вашего знака.',
        service6Title: 'Персональная поддержка',
        service6Text: 'Помогаем выбрать лучший путь регистрации для вашего бизнеса.',
        processTitle: 'Наш подход',
        process1Title: 'Анализ бренда',
        process1Text: 'Оцениваем предложение, изучаем категорию и определяем оптимальную стратегию защиты.',
        process2Title: 'План действий',
        process2Text: 'Согласовываем правильный механизм регистрации и готовим пошаговый маршрут.',
        process3Title: 'Оформление заявки',
        process3Text: 'Готовим документы, подаем заявку и сопровождаем всю коммуникацию с регистратором.',
        process4Title: 'Контроль результата',
        process4Text: 'Отслеживаем статус, информируем вас и передаем готовое свидетельство.',
        ctaTitle: 'Защитите ваш бренд уже сегодня',
        ctaText: 'Гарантируем получение товарного знака или бесплатная повторная подача заявки',
        ctaButton: 'НАПИСАТЬ В WHATSAPP',
        ctaOtherContacts: 'ДРУГИЕ КОНТАКТЫ',
        servicesTitle: 'Наши услуги',
        contactsTitle: 'Контакты',
        contactTitleWhatsapp: 'WhatsApp',
        contactTitleEmail: 'Email',
        contactTitleHours: 'Время работы',
        contactHoursText: 'Пн-Пт: 09:00 - 18:00<br>Сб-Вс: По договорённости',
        contactDescription: 'Все заявки и консультации принимаются через WhatsApp. Пожалуйста, напишите нам - мы оперативно ответим и поможем с регистрацией вашего бренда.',
        contactFormTitle: 'Оставьте заявку',
        placeholderName: 'Ваше имя',
        placeholderEmail: 'Ваш email',
        placeholderMessage: 'Описание вашего проекта',
        contactSubmit: 'ОТПРАВИТЬ',
        stat1Description: 'Товарных знаков зарегистрировано',
        stat2Description: 'Довольных клиентов',
        stat3Description: 'Гарантия результата',
        langLabelShort: 'RU'
    },
    kk: {
        navAbout: 'Біз туралы',
        navServices: 'Қызметтер',
        navProcess: 'Кезеңдер',
        navContacts: 'Байланыс',
        whatsapp: 'WhatsApp-қа жазу',
        heroTitle: 'Тауар таңбасын тіркеу және авторлық құқықты қорғау',
        heroSubtitle: 'Тіркеуге 100% кепілдік немесе ақшаны қайтару. 500-ден астам бренд тіркелді. Қазақстан бойынша қызмет көрсетеміз.',
        heroCta: 'ТЕГІН ТЕКСЕРУ',
        aboutTitle: 'Markly компаниясы туралы',
        aboutText: 'Біз тауар таңбаларын тіркеу және авторлық құқықты қорғау саласында маманданамыз. 500-ден астам бренд тіркелді, Қазақстан бойынша жұмыс істейміз, толық қолдау көрсетеміз - бірегейлікті тексеруден бастап куәлік алуға дейін. Нәтиже кепілдігі: тіркеуге 100% кепілдік немесе ақшаны қайтару. Тегін тексеру үшін WhatsApp арқылы жазыңыз.',
        service1Title: 'Тауар таңбасын тіркеу',
        service1Text: 'Өтінім беру және ресми куәлік алу кезеңдерін сүйемелдеу.',
        service2Title: 'Таңбаның бірегейлігін тексеру',
        service2Text: 'Белгілеуді талдап, тіркелген ұқсас таңбаларды іздейміз.',
        service3Title: 'Құжаттарды дайындау',
        service3Text: 'Толық құжат пакетін дайындап, өтінімді толтырамыз және өтінімді сүйемелдейміз.',
        service4Title: 'Халықаралық тіркеу',
        service4Text: 'Брендті халықаралық жүйелер арқылы тіркеуге қолдау.',
        service5Title: 'Құқықтарды қорғау',
        service5Text: 'Белгілеуді пайдалану бойынша даулар болған жағдайда кеңес беру және көмек көрсету.',
        service6Title: 'Жеке қолдау',
        service6Text: 'Сіздің бизнесіңізге ең жақсы тіркеу жолын таңдауға көмектесеміз.',
        processTitle: 'Біздің тәсіл',
        process1Title: 'Брендті талдау',
        process1Text: 'Ұсынысты бағалап, санатты талдап және ең тиімді қорғау стратегиясын анықтаймыз.',
        process2Title: 'Әрекет жоспары',
        process2Text: 'Тіркеудің дұрыс механизмін келісіп, кезеңдік маршрут дайындаймыз.',
        process3Title: 'Өтінімді рәсімдеу',
        process3Text: 'Құжаттарды дайындап, өтінімді тіркеуші органға жіберіп, бүкіл коммуникацияны сүйемелдейміз.',
        process4Title: 'Нәтижені бақылау',
        process4Text: 'Құжаттың мәртебесін бақылаймыз, сізді хабардар етеміз және дайын куәлікті табыстаймыз.',
        ctaTitle: 'Брендіңізді бүгін қорғаймыз',
        ctaText: 'Тауар таңбасын алу кепілдігі немесе өтінімді қайта жіберу тегін',
        ctaButton: 'WHATSAPP-ҚА ЖАЗУ',
        ctaOtherContacts: 'БАСҚА БАЙЛАНЫСТАР',
        servicesTitle: 'Қызметтеріміз',
        contactsTitle: 'Байланыс',
        contactTitleWhatsapp: 'WhatsApp',
        contactTitleEmail: 'Email',
        contactTitleHours: 'Жұмыс уақыты',
        contactHoursText: 'Дс-Жм: 09:00 - 18:00<br>Сб-Жк: Келісім шарты бойынша',
        contactDescription: 'Барлық өтініштер және консультациялар WhatsApp арқылы қабылданады. Өтінішті өзіңізге жазуды сұраймыз — біз жылдам жауап бере аламыз және сіздің брендінің тіркеуіне көмектесе аламыз.',
        contactFormTitle: 'Өтініш қалдыру',
        placeholderName: 'Атыңыз',
        placeholderEmail: 'Email-іңіз',
        placeholderMessage: 'Жобаңыз туралы қысқаша сипаттама',
        contactSubmit: 'ЖІБЕРУ',
        stat1Description: 'Тау та таңбасы тіркелген',
        stat2Description: 'Қанағаттанған клиенттер',
        stat3Description: 'Нәтиже кепілі',
        langLabelShort: 'KZ'
    },
    en: {
        navAbout: 'About',
        navServices: 'Services',
        navProcess: 'Steps',
        navContacts: 'Contacts',
        whatsapp: 'Write on WhatsApp',
        heroTitle: 'Trademark registration and copyright protection',
        heroSubtitle: '100% registration guarantee or your money back. Over 500 brands registered. Serving all Kazakhstan.',
        heroCta: 'FREE CHECK',
        aboutTitle: 'About Markly',
        aboutText: 'We specialize in trademark registration and copyright protection. We have registered over 500 brands, serve clients across Kazakhstan, and provide full support — from uniqueness checks to receiving the certificate. We guarantee results: 100% registration or your money back. For a free brand check, write to us on WhatsApp.',
        service1Title: 'Trademark registration',
        service1Text: 'Support through filing and receiving an official certificate.',
        service2Title: 'Uniqueness check',
        service2Text: 'We analyze the mark and search for similar registered trademarks.',
        service3Title: 'Document preparation',
        service3Text: 'Complete document package, application completion and submission support.',
        service4Title: 'International registration',
        service4Text: 'Support for registering your brand through international systems.',
        service5Title: 'Rights protection',
        service5Text: 'Advice and assistance if disputes arise over the use of your mark.',
        service6Title: 'Personal support',
        service6Text: 'We help choose the best registration path for your business.',
        processTitle: 'Our approach',
        process1Title: 'Brand analysis',
        process1Text: 'We evaluate the proposal, study the category, and determine the optimal protection strategy.',
        process2Title: 'Action plan',
        process2Text: 'We agree on the right registration approach and prepare a step-by-step route.',
        process3Title: 'Application filing',
        process3Text: 'We prepare documents, file the application, and support all communication with the registrar.',
        process4Title: 'Result monitoring',
        process4Text: 'We track the status, keep you informed, and deliver the final certificate.',
        ctaTitle: 'Protect your brand today',
        ctaText: 'We guarantee trademark registration or a free re-filing of the application',
        ctaButton: 'WRITE ON WHATSAPP',
        ctaOtherContacts: 'OTHER CONTACTS',
        servicesTitle: 'Our services',
        contactsTitle: 'Contacts',
        contactTitleWhatsapp: 'WhatsApp',
        contactTitleEmail: 'Email',
        contactTitleHours: 'Office hours',
        contactHoursText: 'Mon-Fri: 09:00 - 18:00<br>Sat-Sun: By appointment',
        contactFormTitle: 'Leave a request',
        placeholderName: 'Your name',
        placeholderEmail: 'Your email',
        placeholderMessage: 'Describe your project',
        contactSubmit: 'SEND',
        menuButtonOpen: 'Menu',
        menuButtonClose: 'Close',
        menuButtonOpen: 'Menu',
        menuButtonClose: 'Close',
        stat1Description: 'Trademarks registered',
        stat2Description: 'Satisfied clients',
        stat3Description: 'Success guarantee',
        langLabelShort: 'EN'
    }
};

// Note: query for `[data-key]` and `[data-placeholder-key]` is done inside
// `applyLanguage()` so translations are applied reliably regardless of
// script load timing or where `data-key` attributes are placed in the DOM.
const langMenu = document.querySelector('.lang-menu');
const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
const langOptions = document.querySelectorAll('.lang-option');

function closeLanguageMenu() {
    if (langMenu) {
        langMenu.classList.remove('open');
    }
    if (langDropdownBtn) {
        langDropdownBtn.setAttribute('aria-expanded', 'false');
    }
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const textElements = document.querySelectorAll('[data-key]');
    const placeholderElements = document.querySelectorAll('[data-placeholder-key]');

    textElements.forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    placeholderElements.forEach(el => {
        const key = el.dataset.placeholderKey;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const langLabel = document.querySelector('.lang-label');
    if (langLabel && translations[lang] && translations[lang].langLabelShort) {
        langLabel.textContent = translations[lang].langLabelShort;
    }
    closeLanguageMenu();
    localStorage.setItem('siteLanguage', lang);
}

if (langDropdownBtn) {
    langDropdownBtn.addEventListener('click', event => {
        event.stopPropagation();
        if (langMenu) {
            const isOpen = langMenu.classList.toggle('open');
            langDropdownBtn.setAttribute('aria-expanded', isOpen.toString());
        }
    });
}

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang);
    });
});

document.addEventListener('click', event => {
    if (!event.target.closest('.lang-dropdown')) {
        closeLanguageMenu();
    }
});

const savedLanguage = localStorage.getItem('siteLanguage') || 'ru';
applyLanguage(savedLanguage);


// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-card, .process-step, .contact-item').forEach(el => {
    el.classList.add('animated-element');
    observer.observe(el);
});

// Animate stats on scroll
const statsSection = document.querySelector('.about');
let statsAnimated = false;

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (isNaN(target)) return;
        
        const increment = target / 50;
        let current = 0;
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '');
            }
        }, 30);
    });
}

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 5px 20px rgba(0, 82, 204, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 82, 204, 0.1)';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            message: this.querySelector('textarea').value
        };
        
        // Show success message
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'СООБЩЕНИЕ ОТПРАВЛЕНО!';
        button.style.backgroundColor = '#4CAF50';
        
        // Reset form
        this.reset();
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 3000);
        
        // You can send the data to your backend here
        console.log('Form submitted:', formData);
    });
}

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add animation class on page load
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.animation = 'fadeInDown 0.8s ease-in-out';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});
