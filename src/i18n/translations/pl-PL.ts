import { Translations } from "@/types/i18n"

export const translations: Translations = {
    metadata: {
        title: "Grzegorz Kocik - Front-end Developer",
        description:
            "Frontend developer z doświadczeniem w projektowaniu i wdrażaniu interfejsów e-commerce. Łączę wiedzę z zakresu UI/UX z umiejętnościami programistycznymi, wykorzystując technologie takie jak React i Next.js. Skupiam się na tworzeniu responsywnych i dostępnych stron internetowych.",
        jobTitle: "Front-end Developer",
        schemaDescription:
            "Doświadczony front-end developer z doświadczeniem w e-commerce.",
    },
    menu: {
        about: "O mnie",
        portfolio: "Projekty",
        blog: "Blog",
        contact: "Kontakt",
        menuOpen: "Otwórz menu",
        menuClose: "Zamknij menu",
        toTop: "Wróć na górę",
    },
    main: {
        h2: "Tworzę innowacyjne i wydajne interfejsy użytkownika dla branży e-commerce. Poznaj moje projekty i dowiedz się, jak mogę pomóc Twojej firmie.",
        keywordsSection: "Umiejętności i technologie",
        seoText:
            "rozwój frontend, e-commerce, animacje, projektowanie stron internetowych, interfejs użytkownika (UI), responsywny design, optymalizacja wydajności, frameworki JavaScript, animacje CSS, HTML5, dostępność, projektowanie mobile-first, mikrointerakcje, optymalizacja współczynnika konwersji (CRO), headless e-commerce, integracje API, React, Shopify, systemy projektowe, projektowanie ruchu, skalowalność, kompatybilność cross-browser, web3, NFT, Ethereum, DeFi, Web3.js, platformy NFT,",
        skipToMain: "Przejdź do głównej treści",
    },
    about: {
        title: "O mnie",
        subtitle: "Mid Frontend Developer",
        text1: "Cześć, jestem Grzegorz Kocik – Frontend Developer z Polski, skupiający się na tworzeniu nowoczesnych, responsywnych i przyjaznych użytkownikowi aplikacji internetowych. Specjalizuję się w React, JavaScript i TypeScript, dostarczając rozwiązania z czystym kodem, które łączą estetyczny design z wyjątkowym doświadczeniem użytkownika.",
        text2: "Oprócz budowania komercyjnych aplikacji internetowych, aktywnie rozwijam się w przestrzeni Web3, pracując z technologiami blockchain i inteligentnymi kontraktami, aby tworzyć aplikacje zdecentralizowane (dApps). Podejmuję się wymagających projektów, które pozwalają mi łączyć wiedzę techniczną z kreatywnym rozwiązywaniem problemów, zapewniając, że każde rozwiązanie spełnia najwyższe standardy wydajności i dostępności.",
        text3: "Nieustannie rozwijam swoje umiejętności w zakresie frontend development poprzez praktyczne doświadczenie z nowoczesnymi frameworkami i narzędziami, wierząc, że dbałość o szczegóły i bycie na bieżąco z technologiami internetowymi tworzy wyjątkowe doświadczenia cyfrowe.",
        scrollToTop: "Przewiń na górę strony",
        technologies: "Technologie, których używam",
        tools: "Narzędzia, z którymi pracuję",
        scroll: "Przewiń",
    },
    projects: {
        title: "Projekty",
        button: "Kontakt po szczegóły",
        projectsList: "Lista projektów",
        showProjectImage: "Pokaż obraz projektu {name}",
        requestDetails: "Zapytaj o szczegóły projektu {name}",
        projectScope: "Zakres projektu: {scope}",
        projectImageAlt: "Podgląd projektu {name}",
        loading: "Ładowanie obrazu projektu",
        discipline: "Specjalizacja",
        disciplineText1: "Projektowanie UI",
        disciplineText2: "Rozwój kodu",
        tools: "Narzędzia",
        industry: "Branża",
        role: {
            brand: "Brand",
            design: "UI/UX",
            www: "Website",
            mobile: "Mobile Application",
            fullstack: "Fullstack developer",
        },
    },
    web3: {
        btnConnectWeb3: "Połącz portfel",
        btnWeb3Connected: "Portfel połączony",
        modalRequestTitle: "Prośba o połączenie",
        modalRequestText:
            "Otwórz rozszerzenie przeglądarki MetaMask, aby połączyć swój portfel",
        modalRequestRecent: "Ostatnie",
        btnTryAgain: "Spróbuj ponownie",
        install: "Zainstaluj",
        installText1: "Aby połączyć swój",
        installText2: "portfel, zainstaluj rozszerzenie przeglądarki.",
        installBtn: "Zainstaluj rozszerzenie",
        disconnect: "Rozłącz",
        loading: "Ładowanie...",
        mint: {
            buttonTop: "NFT",
            button1: "MINTUJ NFT",
            button2: "MINTUJ ZA DARMO",
            left: "Pozostało",
            switch: "Przełącz na Arbitrum",
            textSuccess: "Utworzono",
            contractAddress: "Adres kontraktu",
            buttonWaiting: "Oczekiwanie na portfel",
            buttonConfirming: "Potwierdzanie",
        },
    },
    blog: {
        title: "Blog",
        all: "wszystkie",
        listEmptyText: "Lista postów jest pusta",
        seeAllPosts: "Zobacz wszystkie posty",
        postBtn: "Zobacz więcej",
        tags: {
            anim: "animacje",
            react: "react",
            a11y: "dostępność",
            css: "css i układy",
            next: "next.js",
            web3: "web3",
        },
    },
    notFound: {
        title: "Ups!",
        subtitle: "Nie znaleziono strony",
        text: "Przepraszamy, strona której szukasz nie została znaleziona. Błąd 404.",
        button: "Wróć na stronę główną",
    },
    footer: {
        title: "Skontaktuj się ze mną",
        contactSectionLabel: "Opcje kontaktu",
        emailSubject: "Współpraca z kocik.dev",
        emailText: "Cześć. Porozmawiajmy o...",
        emailBtnLabel: "Wyślij do mnie email, aby omówić współpracę",
        emailBtnText: "Wyślij do mnie email",
        copyright: "Wszelkie prawa zastrzeżone",
        socialTwitter: "wcześniej znane jako Twitter",
        socialTwitterAria: "Śledź mnie na X (wcześniej Twitter)",
        socialInstagramAria: "Śledź mnie na Instagramie",
        socialLinkedinAria: "Połącz się ze mną na LinkedIn",
    },
    modal: {
        titleConnected: "Połączono",
        titleConnect: "Połącz portfel",
        titleNft: "Mintuj darmowe NFT",
    },
} as const
