const data: {
    name: string
    experienceYears: string
    contact: {
        email: string
        phone: string
        linedin: string
        github: string
        www: string
    }
    aboutMe: string
    techSkils: [string, string][]
    experience: {
        name: string
        works: {
            date: string
            position: string
            company: string
            tasks: string[]
        }[][]
    }
    languages: [string, string][]
    education: {
        date: string
        field: string
        name: string
        spec: string
    }
    interests: string
} = {
    name: "Grzegorz Kocik",
    experienceYears: "10 lat doświadczenia",
    contact: {
        email: "grzegorz.kocik.pn@gmail.com",
        phone: "+48 516 804 511",
        linedin: "https://www.linkedin.com/in/grzegorz-kocik/",
        github: "https://github.com/typodgrafiki",
        www: "https://typodgrafiki.pl",
    },
    aboutMe:
        "Frontend developer o zapleczu graficznym z doświadczeniem w tworzeniu warstwy graficznej ecommerce. Szukam możliwości rozwoju przy projektach wykorzystujących nowe technologie (React)",
    techSkils: [
        [
            "Technologie",
            "HTML5, CSS3, Bootstrap, SCSS/LESS, JavaScript, jQuery, React",
        ],
        ["Narzędzia", "VSC, Terminal, Figma, Photoshop"],
        ["Inne", "SVN, Github, Jira"],
    ],
    experience: {
        name: "Doświadczenie zawodowe",
        works: [
            [
                {
                    date: "04.2012 - now",
                    position: "Frontend Developer / Web designer",
                    company: "SOTE / Poznań",
                    tasks: [
                        "Tworzenie projektów graficznych ecommerce zgodnej z dobrymi praktykami UX/UI,",
                        "Tworzenie warstwy frontend aplikacji w oparciu o silnik oprogramowania  SOTESHOP (bazując na projekcie graficznym),",
                        "Wykonywanie modyfikacji graficznych / frontend w sklepach klientów,",
                        "Uwzględnianie wymogów SEO,",
                        "Rozbudowa i ulepszanie oprogramowania SOTESHOP,",
                        "Projektowanie elementów graficznych,",
                        "Debugowanie i naprawa błędów na stronach klientów,",
                        "Technologie: Czysty HTML5/CSS3, JavaScript DOM, jQuery, Bootstrap, LESS",
                    ],
                },
            ],
            [
                {
                    date: "10.2013 - 03.2014",
                    position: "Junior Frontend Developer",
                    company: "AXI / Poznań",
                    tasks: [
                        "Tworzenie warstwy frontend aplikacji w oparciu o silnik oprogramowania  AXI (bazując na projekcie graficznym),",
                        "Debugowanie i naprawa błędów w istniejących stronach,",
                        "Rozbudowa skton klientów,",
                        "Technologie: HTML5, CSS3, jQuery",
                    ],
                },
            ],
        ],
    },
    languages: [
        ["polski", "ojczysty"],
        ["angielski", "A2"],
    ],
    education: {
        date: "09.2014 - 09.2017",
        field: "Grafika - studia zaoczne,",
        name: "Collegium da Vinci",
        spec: "Specjalizacja: Grafika wydawnicza",
    },
    interests: "podróże, trekking górski, działka moje hobby",
}

export default data
