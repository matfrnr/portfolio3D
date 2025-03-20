import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Bienvenue sur mon Terminal Portfolio !\nTapez \'help\' pour voir les commandes disponibles.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [usedJokeIndices, setUsedJokeIndices] = useState([]);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const commands = {
        'help': 'Affiche la liste des commandes disponibles',
        'clear': 'Efface le terminal',
        'contact': 'Me contacter',
        'cv': 'Télécharger mon CV',
        'portfolio': 'En savoir plus sur ce portfolio',
        'liens': 'Les liens utiles',
        'date': 'Affiche la date et l\'heure actuelles',
        'whoami': 'Qui êtes-vous ?',
        'update': 'Date de la dernière mise à jour',
        'amour': 'Un peu d\'amour ❤️',
        'jeu': 'Envie de se détendre ?',
        '💣': 'Ne le faites pas.',
    };

    const jokes = [
        { question: "Pourquoi les développeurs ne portent-ils pas de lunettes ?", answer: "Parce qu'ils doivent voir C#." },
        { question: "Quelle est la différence entre un bon et un mauvais développeur ?", answer: "Le bon développeur commente son code. Le très bon développeur documente son code. L'excellent développeur supprime son code." },
        { question: "Pourquoi les programmeurs préfèrent-ils la nuit ?", answer: "Parce qu'ils peuvent être seuls avec leur code." },
        { question: "Qu'est-ce qu'un programmeur devrait faire s'il a faim ?", answer: "Il n'a qu'à se nourrir à la boucle for." },
        { question: "Comment un programmeur fait-il pour ouvrir sa maison quand il a oublié ses clés ?", answer: "Il jette un coup d'œil par la fenêtre pour voir s'il y a une exception." },
        { question: "Quelle est la différence entre HTML et CSS ?", answer: "HTML te permet de mettre un pistolet sur la tempe de quelqu'un, CSS te permet de le rendre joli." },
        { question: "Pourquoi les programmeurs confondent-ils Halloween et Noël ?", answer: "Parce que Oct 31 = Dec 25." }
    ];

    // Modification ici pour rendre les liens cliquables
    const contactContent = (
        <div>
            <p className='mb-2'>Vous voulez me contacter ? </p>
            <div className='mb-2'>Voici mon mail : <a href="mailto:fourniermatheo9@gmail.com" className="text-blue-400 underline hover:text-blue-300">fourniermatheo9@gmail.com</a></div>
            <p>Je me ferai un plaisir de vous répondre, alors ne soyez pas timide 😉</p>
        </div>
    );

    const liensContent = (
        <div>
            <div className='mb-2'>LINKEDIN : <a href="https://linkedin.com/in/matheofournier/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">linkedin.com/in/matheofournier/</a></div>
            <div>GITHUB : <a href="https://github.com/matfrnr" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">github.com/matfrnr</a></div>
        </div>
    );

    const cvContent = (
        <div>
            <div className='mb-2'>Envie d'en apprendre plus sur moi ? <a href="/portfolio3D/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Télécharger mon cv</a></div>
        </div>
    );

    const commandContents = {
        'contact': contactContent,
        'liens': liensContent,
        'portfolio': `Ce portfolio a été réalisé en utilisant React et Tailwind. Il intègre le framework Three.js pour la partie 3D. Il est en constante évolution et mis à jour régulièrement.`,
        'whoami': `Ma future entreprise ? Mes futurs collaborateurs ? Ma future aventure ? À vous de le décider !`,
        'update': `Dernière mise à jour : 22/03/2025.`,
        'amour': `Ce portfolio a été confectionné et réalisé avec amour ❤️ Alors prenez soin de lui !`,
        '💣': `La curiosité est un vilain défaut.`,
        'cv': cvContent
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        // Ne pas mettre le focus sur l'input au chargement initial
    }, []);

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleCommand = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') return;

        const newHistoryItem = { type: 'command', content: inputValue.trim() };
        setHistory([...history, newHistoryItem]);

        processCommand(inputValue.trim());
        setInputValue('');
    };

    const processCommand = (cmd) => {
        const cmdLower = cmd.toLowerCase();
        const cmdParts = cmdLower.split(' ');
        const mainCmd = cmdParts[0];

        if (mainCmd === 'clear') {
            // Faire défiler vers le haut de la page avant de vider le terminal
            window.scrollTo({ top: 0, behavior: 'smooth' });

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

        if (mainCmd === 'jeu') {
            handleJokeGame();
            return;
        }

        if (mainCmd === 'cat' && cmdParts.length > 1) {
            const filename = cmdParts[1];
            const fileContent = commandContents['cat'] && commandContents['cat'][filename] ?
                commandContents['cat'][filename] :
                (commandContents['cat'] && commandContents['cat']['default'] ?
                    commandContents['cat']['default'] :
                    "Fichier non trouvé");
            addToHistory('output', fileContent);
            return;
        }

        if (mainCmd === 'help') {
            let helpText = 'Commandes disponibles :\n\n';
            for (const [cmd, desc] of Object.entries(commands)) {
                helpText += `${cmd.padEnd(10)} - ${desc}\n`;
            }
            addToHistory('output', helpText);
            return;
        }

        if (commands.hasOwnProperty(mainCmd)) {
            const content = commandContents[mainCmd];
            if (content) {
                // Pour les contenus JSX comme les liens cliquables
                if (React.isValidElement(content)) {
                    addToHistory('jsx', content);
                } else {
                    addToHistory('output', content);
                }
            } else {
                addToHistory('output', `Commande exécutée: ${mainCmd}`);
            }
        } else {
            addToHistory('error', `Commande non reconnue: ${mainCmd}. Tapez 'help' pour voir les commandes disponibles.`);
        }
    };

    const handleJokeGame = () => {
        if (usedJokeIndices.length >= jokes.length) {
            setUsedJokeIndices([]);
            addToHistory('output', '🔄 Toutes les blagues ont été vues ! Nous recommençons avec un nouveau cycle. 🔄');
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * jokes.length);
        } while (usedJokeIndices.includes(randomIndex));

        setUsedJokeIndices([...usedJokeIndices, randomIndex]);

        const randomJoke = jokes[randomIndex];

        addToHistory('output', '🎮 GÉNÉRATEUR DE BLAGUES 🎮\n\n' + randomJoke.question);

        setTimeout(() => {
            addToHistory('output', '↳ ' + randomJoke.answer);
        }, 1500);
    };

    const addToHistory = (type, content) => {
        setHistory(prev => [...prev, { type, content }]);
    };

    return (
        <div className="w-full h-full max-w-4xl mx-auto overflow-hidden flex flex-col bg-gray-900 rounded-md shadow-xl border border-gray-700" onClick={handleTerminalClick}>
            <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
                <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono mx-auto">visiteur@portfolio: ~</div>
            </div>
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
                        ) : item.type === 'jsx' ? (
                            <div className="ml-0 text-green-300">
                                {item.content}
                            </div>
                        ) : (
                            <div className={`ml-0 whitespace-pre-wrap ${item.type === 'output' ? 'text-green-300' : ''}`}>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
                <form onSubmit={handleCommand} className="flex items-center mt-1">
                    <span className="text-green-400 mr-2">visiteur@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-white caret-white font-mono"
                        aria-label="Terminal input"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;