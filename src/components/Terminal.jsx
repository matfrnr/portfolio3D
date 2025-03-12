import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Bienvenue sur mon Terminal Portfolio!\nTapez \'help\' pour voir les commandes disponibles.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    // Liste des commandes disponibles
    const commands = {
        'help': 'Affiche la liste des commandes disponibles',
        'about': 'À propos de moi',
        'skills': 'Mes compétences',
        'projects': 'Mes projets',
        'contact': 'Mes informations de contact',
        'experience': 'Mon expérience professionnelle',
        'education': 'Mon parcours éducatif',
        'clear': 'Efface le terminal',
        'ls': 'Liste les fichiers disponibles',
        'cat': 'Affiche le contenu d\'un fichier (usage: cat <filename>)',
        'date': 'Affiche la date et l\'heure actuelles',
        'whoami': 'Qui êtes-vous?'
    };

    // Contenu des commandes
    const commandContents = {
        'about': `
Je suis un développeur web passionné par la création d'expériences utilisateur uniques et interactives.
J'aime résoudre des problèmes complexes et créer des solutions élégantes.`,

        'skills': `
LANGAGES:
- HTML5, CSS3, JavaScript (ES6+)
- PHP, Python, SQL

FRAMEWORKS & BIBLIOTHÈQUES:
- React, Vue.js, Node.js
- Bootstrap, Tailwind CSS

OUTILS:
- Git, Docker, VS Code
- Figma, Adobe XD`,

        'projects': `
1. E-COMMERCE RESPONSIVE
   Un site e-commerce complet avec panier et paiement
   Tech: React, Node.js, MongoDB

2. APPLICATION MÉTÉO
   Application météo en temps réel avec géolocalisation
   Tech: JavaScript, API OpenWeather

3. PORTFOLIO TERMINAL
   Ce terminal interactif que vous utilisez actuellement
   Tech: React, Tailwind CSS`,

        'contact': `
EMAIL: exemple@monportfolio.com
LINKEDIN: linkedin.com/in/monprofil
GITHUB: github.com/monprofil
TWITTER: @monprofil`,

        'experience': `
DÉVELOPPEUR FRONTEND | Entreprise XYZ | 2022-Présent
- Développement d'interfaces utilisateur réactives
- Optimisation des performances web
- Collaboration avec des designers UX/UI

DÉVELOPPEUR WEB | Startup ABC | 2020-2022
- Création de sites web complets
- Maintenance et mise à jour de plateformes existantes
- Intégration de systèmes de paiement`,

        'education': `
MASTER EN DÉVELOPPEMENT WEB | Université XYZ | 2018-2020
- Spécialisation en technologies frontend
- Projet de fin d'études: Plateforme e-learning

LICENCE INFORMATIQUE | Université ABC | 2015-2018
- Fondamentaux de la programmation
- Bases de données et algorithmes`,

        'ls': `
about.txt
skills.md
projects.json
contact.txt
resume.pdf
photo.jpg`,

        'whoami': `visiteur`,

        'cat': {
            'about.txt': `Je suis un développeur web passionné, spécialisé en React et technologies front-end modernes.`,
            'skills.md': `# Compétences\n- React/Next.js\n- Tailwind CSS\n- TypeScript\n- Node.js\n- Git`,
            'projects.json': `{\n  "projet1": {\n    "nom": "E-commerce",\n    "techno": ["React", "Node.js", "MongoDB"]\n  },\n  "projet2": {\n    "nom": "Terminal Portfolio",\n    "techno": ["React", "Tailwind"]\n  }\n}`,
            'contact.txt': `Email: exemple@monportfolio.com\nTel: +33 6 12 34 56 78`,
            'default': `Fichier non trouvé. Utilisez 'ls' pour voir la liste des fichiers disponibles.`
        }
    };

    // Fonction pour faire défiler automatiquement vers le bas
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Supprimez l'écouteur d'événement global sur document
    useEffect(() => {
        // Focus initial une seule fois
        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Ne pas ajouter d'écouteur d'événement global sur document
    }, []);

    // Gardez uniquement la fonction handleTerminalClick qui sera appelée
    // uniquement quand on clique sur le terminal lui-même
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Traitement de la commande
    const handleCommand = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') return;

        // Ajouter la commande à l'historique
        const newHistoryItem = { type: 'command', content: inputValue.trim() };
        setHistory([...history, newHistoryItem]);

        // Traiter la commande
        processCommand(inputValue.trim());

        // Réinitialiser l'input
        setInputValue('');
    };

    // Logique de traitement des commandes
    const processCommand = (cmd) => {
        const cmdLower = cmd.toLowerCase();
        const cmdParts = cmdLower.split(' ');
        const mainCmd = cmdParts[0];

        if (mainCmd === 'clear') {
            setHistory([
                { type: 'output', content: 'Terminal effacé.' }
            ]);
            return;
        }

        if (mainCmd === 'date') {
            const now = new Date();
            addToHistory('output', now.toLocaleString());
            return;
        }

        if (mainCmd === 'cat' && cmdParts.length > 1) {
            const filename = cmdParts[1];
            const fileContent = commandContents['cat'][filename] || commandContents['cat']['default'];
            addToHistory('output', fileContent);
            return;
        }

        if (commands.hasOwnProperty(mainCmd)) {
            const content = commandContents[mainCmd];
            addToHistory('output', content);
        } else {
            addToHistory('error', `Commande non reconnue: ${mainCmd}. Tapez 'help' pour voir les commandes disponibles.`);
        }

        // Commande spéciale 'help'
        if (mainCmd === 'help') {
            let helpText = 'Commandes disponibles:\n\n';
            for (const [cmd, desc] of Object.entries(commands)) {
                helpText += `${cmd.padEnd(10)} - ${desc}\n`;
            }
            addToHistory('output', helpText);
        }
    };

    // Ajouter un élément à l'historique
    const addToHistory = (type, content) => {
        setHistory(prev => [...prev, { type, content }]);
    };

    return (
        <div className="w-full h-full max-w-4xl mx-auto overflow-hidden flex flex-col bg-gray-900 rounded-md shadow-xl border border-gray-700" onClick={handleTerminalClick}>
            {/* Barre de titre du terminal */}
            <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
                <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono mx-auto">visiteur@portfolio: ~</div>
            </div>

            {/* Contenu du terminal */}
            <div
                ref={terminalRef}
                className="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed bg-gray-900 text-gray-200"
            >
                {history.map((item, index) => (
                    <div key={index} className={`mb-2 ${item.type === 'error' ? 'text-red-400' : ''}`}>
                        {item.type === 'command' ? (
                            <div className="flex">
                                <span className="text-green-400 mr-2">visiteur@portfolio:~$</span>
                                <span className="text-white">{item.content}</span>
                            </div>
                        ) : (
                            <div className={`ml-0 whitespace-pre-wrap ${item.type === 'output' ? 'text-green-300' : ''}`}>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}

                {/* Ligne d'entrée */}
                <form onSubmit={handleCommand} className="flex items-center mt-1">
                    <span className="text-green-400 mr-2">visiteur@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-white caret-white font-mono"
                        autoFocus
                        aria-label="Terminal input"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;