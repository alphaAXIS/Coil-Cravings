// Copyright (c) alphaAXIS. All rights reserved.

const translations = {
    en: {
        // Core game texts
        gameTitle: "Coil Cravings",
        welcomeMessage: "Welcome to Coil Cravings",
        copyright: "© 2025 alphaAXIS. All rights reserved.",

        // Authentication
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm Password",
        login: "Login",
        register: "Register",
        guestMode: "Guest Mode",
        noAccount: "Don't have an account? Register",
        haveAccount: "Already have an account? Login",
        loginSuccess: "Login successful!",
        registerSuccess: "Registration successful!",
        usernameRequired: "Username is required",
        passwordRequired: "Password is required",
        passwordsMismatch: "Passwords do not match",
        usernameExists: "Username already exists",
        invalidCredentials: "Invalid username or password",

        // Game menu
        startGame: "Start Game",
        continueGame: "Continue Game",
        settings: "Settings",
        highScores: "High Scores",
        help: "Help",
        about: "About",
        exit: "Exit",
        back: "Back",

        // Game interface
        score: "Score",
        level: "Level",
        exp: "Experience",
        expProgress: "%d/%d XP",
        lives: "Lives",
        time: "Time",
        keyPresses: "Key Presses",
        survivalTime: "Survival Time",
        performance: "Performance",
        speed: "Speed",
        pause: "Pause",
        resume: "Resume",
        current: "Current",
        best: "Best",

        // Game over
        gameOver: "Game Over",
        finalScore: "Final Score",
        finalLevel: "Final Level",
        finalExp: "Experience Gained",
        finalKeyCount: "Total Key Presses",
        finalSurvivalTime: "Total Survival Time",
        finalPerformance: "Performance Rating",
        newHighScore: "New High Score!",
        restart: "Restart",
        returnToMain: "Return to Main Menu",
        playAgain: "Play Again",

        // Controls
        controls: "Controls",
        moveUp: "Move Up: W or ↑",
        moveDown: "Move Down: S or ↓",
        moveLeft: "Move Left: A or ←",
        moveRight: "Move Right: D or →",
        restartKey: "Restart: R",
        pauseKey: "Pause: P or Space",
        menuKey: "Menu: Esc",
        muteKey: "Mute: M",

        // Instructions
        gameGoal: "Control the snake to eat food and grow longer. Avoid hitting the walls or your own tail.",
        gameTips: "Tips: Eat special food for bonus points! The snake gets faster as you score more points.",
        levelUp: "Level Up!",
        gamePaused: "Game Paused",
        specialFood: "Special Food!",
        bonusPoints: "%d Bonus Points!",
        speedIncreased: "Speed Increased!",

        // Settings
        language: "Language",
        soundEffects: "Sound Effects",
        backgroundMusic: "Background Music",
        difficulty: "Difficulty",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        expert: "Expert",
        graphicsQuality: "Graphics Quality",
        high: "High",
        low: "Low",
        resetSettings: "Reset Settings",
        saveSettings: "Save Settings",
        enableVibration: "Enable Vibration (Mobile)",
        showTutorial: "Show Tutorial on Startup",
        darkMode: "Dark Mode",

        // Help panel
        helpTitle: "How to Play",
        helpContent: "Use the arrow keys or WASD to control the snake's direction. Eat the food to grow and earn points. The game ends if you hit the walls or your own body.",
        helpAdvanced: "Advanced: Collect special items for bonuses. Complete levels to unlock new skins.",
        closeHelp: "Close Help",

        // High scores
        highScoresTitle: "Top Players",
        rank: "Rank",
        player: "Player",
        date: "Date",
        yourScore: "Your Score",
        noScores: "No scores yet",
        clearScores: "Clear Scores",

        // Generic UI elements
        yes: "Yes",
        no: "No",
        confirm: "Confirm",
        cancel: "Cancel",
        delete: "Delete",
        clear: "Clear",
        areYouSure: "Are you sure?",
        clearScoresConfirm: "This will clear all high scores. Continue?",
        loading: "Loading...",
        success: "Success",
        error: "Error",
        ok: "OK",
        apply: "Apply",
        backToGame: "Back to Game"
    },
    'zh-CN': {
        // 核心游戏文本
        gameTitle: "贪吃蛇游戏",
        welcomeMessage: "欢迎来到贪吃蛇游戏",
        copyright: "© 2025 alphaAXIS. 保留所有权利。",

        // 身份验证
        username: "用户名",
        password: "密码",
        confirmPassword: "确认密码",
        login: "登录",
        register: "注册",
        guestMode: "游客模式",
        noAccount: "没有账号？注册",
        haveAccount: "已有账号？登录",
        loginSuccess: "登录成功！",
        registerSuccess: "注册成功！",
        usernameRequired: "请输入用户名",
        passwordRequired: "请输入密码",
        passwordsMismatch: "两次输入的密码不一致",
        usernameExists: "用户名已存在",
        invalidCredentials: "用户名或密码错误",

        // 游戏菜单
        startGame: "开始游戏",
        continueGame: "继续游戏",
        settings: "设置",
        highScores: "高分榜",
        help: "帮助",
        about: "关于",
        exit: "退出",
        back: "返回",

        // 游戏界面
        score: "分数",
        level: "等级",
        exp: "经验值",
        expProgress: "%d/%d 经验值",
        lives: "生命",
        time: "时间",
        keyPresses: "按键次数",
        survivalTime: "存活时间",
        performance: "表现评分",
        speed: "速度",
        pause: "暂停",
        resume: "继续",
        current: "当前",
        best: "最佳",

        // 游戏结束
        gameOver: "游戏结束",
        finalScore: "最终分数",
        finalLevel: "最终等级",
        finalExp: "获得经验值",
        finalKeyCount: "总按键次数",
        finalSurvivalTime: "总存活时间",
        finalPerformance: "表现评级",
        newHighScore: "新的高分！",
        restart: "重新开始",
        returnToMain: "返回主菜单",
        playAgain: "再玩一次",

        // 控制方式
        controls: "操作说明",
        moveUp: "上移：W或↑",
        moveDown: "下移：S或↓",
        moveLeft: "左移：A或←",
        moveRight: "右移：D或→",
        restartKey: "重新开始：R",
        pauseKey: "暂停：P或空格",
        menuKey: "菜单：Esc",
        muteKey: "静音：M",

        // 游戏说明
        gameGoal: "控制蛇吃食物来变长。避免撞到墙壁或自己的尾巴。",
        gameTips: "提示：吃特殊食物可获得额外分数！得分越高，蛇的速度越快。",
        levelUp: "升级了！",
        gamePaused: "游戏已暂停",
        specialFood: "特殊食物！",
        bonusPoints: "%d 额外分数！",
        speedIncreased: "速度提升！",

        // 设置
        language: "语言",
        soundEffects: "音效",
        backgroundMusic: "背景音乐",
        difficulty: "难度",
        easy: "简单",
        medium: "中等",
        hard: "困难",
        expert: "专家",
        graphicsQuality: "画质",
        high: "高",
        low: "低",
        resetSettings: "重置设置",
        saveSettings: "保存设置",
        enableVibration: "启用振动（移动设备）",
        showTutorial: "启动时显示教程",
        darkMode: "深色模式",

        // 帮助面板
        helpTitle: "游戏玩法",
        helpContent: "使用方向键或WASD控制蛇的移动方向。吃食物来成长并获得分数。撞到墙壁或自己的身体会导致游戏结束。",
        helpAdvanced: "进阶：收集特殊物品获得奖励。完成关卡解锁新皮肤。",
        closeHelp: "关闭帮助",

        // 高分榜
        highScoresTitle: "顶级玩家",
        rank: "排名",
        player: "玩家",
        date: "日期",
        yourScore: "你的分数",
        noScores: "暂无分数",
        clearScores: "清空分数",

        // 通用界面元素
        yes: "是",
        no: "否",
        confirm: "确认",
        cancel: "取消",
        delete: "删除",
        clear: "清空",
        areYouSure: "你确定吗？",
        clearScoresConfirm: "这将清除所有高分记录。继续吗？",
        loading: "加载中...",
        success: "成功",
        error: "错误",
        ok: "确定",
        apply: "应用",
        backToGame: "返回游戏"
    },
    es: {
        // Textos core del juego
        gameTitle: "Juego de Serpiente",
        welcomeMessage: "Bienvenido al Juego de Serpiente",
        copyright: "© 2025 alphaAXIS. Todos los derechos reservados.",

        // Autenticación
        username: "Nombre de usuario",
        password: "Contraseña",
        confirmPassword: "Confirmar contraseña",
        login: "Iniciar sesión",
        register: "Registrarse",
        guestMode: "Modo invitado",
        noAccount: "¿No tienes una cuenta? Regístrate",
        haveAccount: "¿Ya tienes una cuenta? Inicia sesión",
        loginSuccess: "¡Inicio de sesión exitoso!",
        registerSuccess: "¡Registro exitoso!",
        usernameRequired: "Se requiere nombre de usuario",
        passwordRequired: "Se requiere contraseña",
        passwordsMismatch: "Las contraseñas no coinciden",
        usernameExists: "El nombre de usuario ya existe",
        invalidCredentials: "Nombre de usuario o contraseña inválidos",

        // Menú del juego
        startGame: "Iniciar juego",
        continueGame: "Continuar juego",
        settings: "Configuración",
        highScores: "Puntuaciones altas",
        help: "Ayuda",
        about: "Acerca de",
        exit: "Salir",
        back: "Volver",

        // Interfaz del juego
        score: "Puntuación",
        level: "Nivel",
        exp: "Experiencia",
        expProgress: "%d/%d XP",
        lives: "Vidas",
        time: "Tiempo",
        keyPresses: "Presiones de tecla",
        survivalTime: "Tiempo de supervivencia",
        performance: "Rendimiento",
        speed: "Velocidad",
        pause: "Pausa",
        resume: "Reanudar",
        current: "Actual",
        best: "Mejor",

        // Fin del juego
        gameOver: "Juego terminado",
        finalScore: "Puntuación final",
        finalLevel: "Nivel final",
        finalExp: "Experiencia ganada",
        finalKeyCount: "Total de presiones de tecla",
        finalSurvivalTime: "Tiempo total de supervivencia",
        finalPerformance: "Calificación de rendimiento",
        newHighScore: "¡Nueva puntuación alta!",
        restart: "Reiniciar",
        returnToMain: "Volver al menú principal",
        playAgain: "Jugar de nuevo",

        // Controles
        controls: "Controles",
        moveUp: "Mover arriba: W o ↑",
        moveDown: "Mover abajo: S o ↓",
        moveLeft: "Mover izquierda: A o ←",
        moveRight: "Mover derecha: D o →",
        restartKey: "Reiniciar: R",
        pauseKey: "Pausa: P o Espacio",
        menuKey: "Menú: Esc",
        muteKey: "Silenciar: M",

        // Instrucciones
        gameGoal: "Controla la serpiente para comer comida y crecer. Evita chocar con las paredes o tu propia cola.",
        gameTips: "Consejo: ¡Come comida especial para obtener puntos extra! La serpiente se hace más rápida a medida que obtienes más puntos.",
        levelUp: "¡Subiste de nivel!",
        gamePaused: "Juego pausado",
        specialFood: "¡Comida especial!",
        bonusPoints: "¡%d puntos bonus!",
        speedIncreased: "¡Velocidad aumentada!",

        // Configuración
        language: "Idioma",
        soundEffects: "Efectos de sonido",
        backgroundMusic: "Música de fondo",
        difficulty: "Dificultad",
        easy: "Fácil",
        medium: "Medio",
        hard: "Difícil",
        expert: "Experto",
        graphicsQuality: "Calidad gráfica",
        high: "Alta",
        low: "Baja",
        resetSettings: "Restablecer configuración",
        saveSettings: "Guardar configuración",
        enableVibration: "Habilitar vibración (Móvil)",
        showTutorial: "Mostrar tutorial al iniciar",
        darkMode: "Modo oscuro",

        // Panel de ayuda
        helpTitle: "Cómo jugar",
        helpContent: "Usa las teclas de flecha o WASD para controlar la dirección de la serpiente. Come la comida para crecer y ganar puntos. El juego termina si chocas con las paredes o con tu propio cuerpo.",
        helpAdvanced: "Avanzado: Recoge objetos especiales para obtener bonificaciones. Completa niveles para desbloquear nuevas skins.",
        closeHelp: "Cerrar ayuda",

        // Puntuaciones altas
        highScoresTitle: "Mejores jugadores",
        rank: "Rango",
        player: "Jugador",
        date: "Fecha",
        yourScore: "Tu puntuación",
        noScores: "Aún no hay puntuaciones",
        clearScores: "Limpiar puntuaciones",

        // Elementos UI genéricos
        yes: "Sí",
        no: "No",
        confirm: "Confirmar",
        cancel: "Cancelar",
        delete: "Eliminar",
        clear: "Limpiar",
        areYouSure: "¿Estás seguro?",
        clearScoresConfirm: "Esto borrará todas las puntuaciones altas. ¿Continuar?",
        loading: "Cargando...",
        success: "Éxito",
        error: "Error",
        ok: "OK",
        apply: "Aplicar",
        backToGame: "Volver al juego"
    },
    fr: {
        // Textes principaux du jeu
        gameTitle: "Jeu de Serpent",
        welcomeMessage: "Bienvenue dans le Jeu de Serpent",
        copyright: "© 2025 alphaAXIS. Tous droits réservés.",

        // Authentification
        username: "Nom d'utilisateur",
        password: "Mot de passe",
        confirmPassword: "Confirmer le mot de passe",
        login: "Connexion",
        register: "Inscription",
        guestMode: "Mode invité",
        noAccount: "Pas de compte ? S'inscrire",
        haveAccount: "Déjà un compte ? Se connecter",
        loginSuccess: "Connexion réussie !",
        registerSuccess: "Inscription réussie !",
        usernameRequired: "Nom d'utilisateur requis",
        passwordRequired: "Mot de passe requis",
        passwordsMismatch: "Les mots de passe ne correspondent pas",
        usernameExists: "Le nom d'utilisateur existe déjà",
        invalidCredentials: "Nom d'utilisateur ou mot de passe invalide",

        // Menu du jeu
        startGame: "Démarrer le jeu",
        continueGame: "Continuer le jeu",
        settings: "Paramètres",
        highScores: "Meilleurs scores",
        help: "Aide",
        about: "À propos",
        exit: "Quitter",
        back: "Retour",

        // Interface du jeu
        score: "Score",
        level: "Niveau",
        exp: "Expérience",
        expProgress: "%d/%d XP",
        lives: "Vies",
        time: "Temps",
        keyPresses: "Appuis sur touches",
        survivalTime: "Temps de survie",
        performance: "Performance",
        speed: "Vitesse",
        pause: "Pause",
        resume: "Reprendre",
        current: "Actuel",
        best: "Meilleur",

        // Fin du jeu
        gameOver: "Jeu terminé",
        finalScore: "Score final",
        finalLevel: "Niveau final",
        finalExp: "Expérience gagnée",
        finalKeyCount: "Total d'appuis sur touches",
        finalSurvivalTime: "Temps total de survie",
        finalPerformance: "Note de performance",
        newHighScore: "Nouveau meilleur score !",
        restart: "Redémarrer",
        returnToMain: "Retour au menu principal",
        playAgain: "Jouer à nouveau",

        // Contrôles
        controls: "Contrôles",
        moveUp: "Monter : W ou ↑",
        moveDown: "Descendre : S ou ↓",
        moveLeft: "Gauche : A ou ←",
        moveRight: "Droite : D ou →",
        restartKey: "Redémarrer : R",
        pauseKey: "Pause : P ou Espace",
        menuKey: "Menu : Esc",
        muteKey: "Couper le son : M",

        // Instructions
        gameGoal: "Contrôlez le serpent pour manger de la nourriture et grandir. Évitez de heurter les murs ou votre propre queue.",
        gameTips: "Conseil : Mangez de la nourriture spéciale pour obtenir des points bonus ! Le serpent va plus vite à mesure que vous marquez plus de points.",
        levelUp: "Niveau supérieur !",
        gamePaused: "Jeu en pause",
        specialFood: "Nourriture spéciale !",
        bonusPoints: "%d points bonus !",
        speedIncreased: "Vitesse augmentée !",

        // Paramètres
        language: "Langue",
        soundEffects: "Effets sonores",
        backgroundMusic: "Musique de fond",
        difficulty: "Difficulté",
        easy: "Facile",
        medium: "Moyen",
        hard: "Difficile",
        expert: "Expert",
        graphicsQuality: "Qualité graphique",
        high: "Haute",
        low: "Basse",
        resetSettings: "Réinitialiser les paramètres",
        saveSettings: "Enregistrer les paramètres",
        enableVibration: "Activer la vibration (Mobile)",
        showTutorial: "Afficher le tutoriel au démarrage",
        darkMode: "Mode sombre",

        // Panneau d'aide
        helpTitle: "Comment jouer",
        helpContent: "Utilisez les touches directionnelles ou WASD pour contrôler la direction du serpent. Mangez la nourriture pour grandir et gagner des points. Le jeu se termine si vous heurtez les murs ou votre propre corps.",
        helpAdvanced: "Avancé : Collectez des objets spéciaux pour obtenir des bonus. Complétez des niveaux pour déverrouiller de nouveaux skins.",
        closeHelp: "Fermer l'aide",

        // Meilleurs scores
        highScoresTitle: "Meilleurs joueurs",
        rank: "Classement",
        player: "Joueur",
        date: "Date",
        yourScore: "Votre score",
        noScores: "Aucun score pour le moment",
        clearScores: "Effacer les scores",

        // Éléments UI génériques
        yes: "Oui",
        no: "Non",
        confirm: "Confirmer",
        cancel: "Annuler",
        delete: "Supprimer",
        clear: "Effacer",
        areYouSure: "Êtes-vous sûr ?",
        clearScoresConfirm: "Cela effacera tous les meilleurs scores. Continuer ?",
        loading: "Chargement...",
        success: "Succès",
        error: "Erreur",
        ok: "OK",
        apply: "Appliquer",
        backToGame: "Retour au jeu"
    },
    de: {
        // Kernspieltexte
        gameTitle: "Schlange Spiel",
        welcomeMessage: "Willkommen zum Schlange Spiel",
        copyright: "© 2025 alphaAXIS. Alle Rechte vorbehalten.",

        // Authentifizierung
        username: "Benutzername",
        password: "Passwort",
        confirmPassword: "Passwort bestätigen",
        login: "Anmelden",
        register: "Registrieren",
        guestMode: "Gastmodus",
        noAccount: "Kein Konto? Registrieren",
        haveAccount: "Bereits ein Konto? Anmelden",
        loginSuccess: "Anmeldung erfolgreich!",
        registerSuccess: "Registrierung erfolgreich!",
        usernameRequired: "Benutzername erforderlich",
        passwordRequired: "Passwort erforderlich",
        passwordsMismatch: "Passwörter stimmen nicht überein",
        usernameExists: "Benutzername existiert bereits",
        invalidCredentials: "Ungültiger Benutzername oder Passwort",

        // Spielmenü
        startGame: "Spiel starten",
        continueGame: "Spiel fortsetzen",
        settings: "Einstellungen",
        highScores: "Bestenlisten",
        help: "Hilfe",
        about: "Über",
        exit: "Beenden",
        back: "Zurück",

        // Spieloberfläche
        score: "Punktzahl",
        level: "Level",
        exp: "Erfahrung",
        expProgress: "%d/%d XP",
        lives: "Leben",
        time: "Zeit",
        keyPresses: "Tastendrücke",
        survivalTime: "Überlebenszeit",
        performance: "Leistung",
        speed: "Geschwindigkeit",
        pause: "Pausieren",
        resume: "Fortsetzen",
        current: "Aktuell",
        best: "Bestes",

        // Spielende
        gameOver: "Spiel vorbei",
        finalScore: "Endpunktzahl",
        finalLevel: "Endlevel",
        finalExp: "Gewonnene Erfahrung",
        finalKeyCount: "Gesamte Tastendrücke",
        finalSurvivalTime: "Gesamte Überlebenszeit",
        finalPerformance: "Leistungsbewertung",
        newHighScore: "Neuer Highscore!",
        restart: "Neustarten",
        returnToMain: "Zurück zum Hauptmenü",
        playAgain: "Noch einmal spielen",

        // Steuerung
        controls: "Steuerung",
        moveUp: "Nach oben: W oder ↑",
        moveDown: "Nach unten: S oder ↓",
        moveLeft: "Nach links: A oder ←",
        moveRight: "Nach rechts: D oder →",
        restartKey: "Neustarten: R",
        pauseKey: "Pausieren: P oder Leertaste",
        menuKey: "Menü: Esc",
        muteKey: "Stummschalten: M",

        // Anweisungen
        gameGoal: "Steuere die Schlange, um Nahrung zu fressen und zu wachsen. Vermeide es, Wände oder deinen eigenen Schwanz zu treffen.",
        gameTips: "Tipp: Iss spezielle Nahrung für Bonuspunkte! Die Schlange wird schneller, je mehr Punkte du erzielen.",
        levelUp: "Level aufgestiegen!",
        gamePaused: "Spiel pausiert",
        specialFood: "Spezielle Nahrung!",
        bonusPoints: "%d Bonuspunkte!",
        speedIncreased: "Geschwindigkeit erhöht!",

        // Einstellungen
        language: "Sprache",
        soundEffects: "Soundeffekte",
        backgroundMusic: "Hintergrundmusik",
        difficulty: "Schwierigkeit",
        easy: "Einfach",
        medium: "Mittel",
        hard: "Schwer",
        expert: "Experte",
        graphicsQuality: "Grafikqualität",
        high: "Hoch",
        low: "Niedrig",
        resetSettings: "Einstellungen zurücksetzen",
        saveSettings: "Einstellungen speichern",
        enableVibration: "Vibration aktivieren (Mobil)",
        showTutorial: "Tutorial beim Start anzeigen",
        darkMode: "Dunkler Modus",

        // Hilfepanel
        helpTitle: "So spielt man",
        helpContent: "Verwende die Pfeiltasten oder WASD, um die Richtung der Schlange zu steuern. Iss die Nahrung, um zu wachsen und Punkte zu erzielen. Das Spiel endet, wenn du Wände oder deinen eigenen Körper triffst.",
        helpAdvanced: "Fortgeschritten: Sammle spezielle Gegenstände für Boni. Vervollständige Level, um neue Skins freizuschalten.",
        closeHelp: "Hilfe schließen",

        // Bestenlisten
        highScoresTitle: "Top-Spieler",
        rank: "Rang",
        player: "Spieler",
        date: "Datum",
        yourScore: "Deine Punktzahl",
        noScores: "Noch keine Punktzahlen",
        clearScores: "Punktzahlen löschen",

        // Generische UI-Elemente
        yes: "Ja",
        no: "Nein",
        confirm: "Bestätigen",
        cancel: "Abbrechen",
        delete: "Löschen",
        clear: "Leeren",
        areYouSure: "Bist du sicher?",
        clearScoresConfirm: "Dies löscht alle Highscores. Fortfahren?",
        loading: "Laden...",
        success: "Erfolg",
        error: "Fehler",
        ok: "OK",
        apply: "Anwenden",
        backToGame: "Zurück zum Spiel"
    },
    ja: {
        // ゲームコアテキスト
        gameTitle: "スネークゲーム",
        welcomeMessage: "スネークゲームへようこそ",
        copyright: "© 2025 alphaAXIS. 全著作権所有。",

        // 認証
        username: "ユーザー名",
        password: "パスワード",
        confirmPassword: "パスワードを確認",
        login: "ログイン",
        register: "登録",
        guestMode: "ゲストモード",
        noAccount: "アカウントがない場合は？登録",
        haveAccount: "すでにアカウントを持っていますか？ログイン",
        loginSuccess: "ログイン成功！",
        registerSuccess: "登録成功！",
        usernameRequired: "ユーザー名は必須です",
        passwordRequired: "パスワードは必須です",
        passwordsMismatch: "パスワードが一致しません",
        usernameExists: "ユーザー名はすでに存在します",
        invalidCredentials: "無効なユーザー名またはパスワード",

        // ゲームメニュー
        startGame: "ゲームを開始",
        continueGame: "ゲームを続ける",
        settings: "設定",
        highScores: "ハイスコア",
        help: "ヘルプ",
        about: "について",
        exit: "終了",
        back: "戻る",

        // ゲームインターフェース
        score: "スコア",
        level: "レベル",
        exp: "経験値",
        expProgress: "%d/%d XP",
        lives: "ライフ",
        time: "時間",
        keyPresses: "キー押下回数",
        survivalTime: "生存時間",
        performance: "パフォーマンス",
        speed: "速度",
        pause: "一時停止",
        resume: "再開",
        current: "現在",
        best: "最高",

        // ゲームオーバー
        gameOver: "ゲームオーバー",
        finalScore: "最終スコア",
        finalLevel: "最終レベル",
        finalExp: "獲得した経験値",
        finalKeyCount: "総キー押下回数",
        finalSurvivalTime: "総生存時間",
        finalPerformance: "パフォーマンス評価",
        newHighScore: "新しいハイスコア！",
        restart: "再開",
        returnToMain: "メインメニューに戻る",
        playAgain: "もう一度プレイ",

        // コントロール
        controls: "操作方法",
        moveUp: "上へ移動: Wまたは↑",
        moveDown: "下へ移動: Sまたは↓",
        moveLeft: "左へ移動: Aまたは←",
        moveRight: "右へ移動: Dまたは→",
        restartKey: "再開: R",
        pauseKey: "一時停止: Pまたはスペース",
        menuKey: "メニュー: Esc",
        muteKey: "ミュート: M",

        // 説明
        gameGoal: "ヘビを操作して食べ物を食べ、成長させます。壁や自分のしっぽにぶつからないようにしてください。",
        gameTips: "ヒント: 特別な食べ物を食べるとボーナスポイントがもらえます！得点が高くなるほど、ヘビは速くなります。",
        levelUp: "レベルアップ！",
        gamePaused: "ゲーム一時停止中",
        specialFood: "特別な食べ物！",
        bonusPoints: "%d ボーナスポイント！",
        speedIncreased: "速度が上がりました！",

        // 設定
        language: "言語",
        soundEffects: "サウンドエフェクト",
        backgroundMusic: "バックグラウンドミュージック",
        difficulty: "難易度",
        easy: "簡単",
        medium: "普通",
        hard: "難しい",
        expert: "エキスパート",
        graphicsQuality: "グラフィック品質",
        high: "高",
        low: "低",
        resetSettings: "設定をリセット",
        saveSettings: "設定を保存",
        enableVibration: "振動を有効にする（モバイル）",
        showTutorial: "起動時にチュートリアルを表示",
        darkMode: "ダークモード",

        // ヘルプパネル
        helpTitle: "遊び方",
        helpContent: "矢印キーまたはWASDを使用してヘビの方向を制御します。食べ物を食べて成長し、ポイントを獲得します。壁または自分の体にぶつかるとゲームは終了します。",
        helpAdvanced: "上級: 特別アイテムを収集してボーナスを獲得。レベルをクリアして新しいスキンを解錠。",
        closeHelp: "ヘルプを閉じる",

        // ハイスコア
        highScoresTitle: "トッププレイヤー",
        rank: "ランク",
        player: "プレイヤー",
        date: "日付",
        yourScore: "あなたのスコア",
        noScores: "まだスコアがありません",
        clearScores: "スコアをクリア",

        // 汎用UI要素
        yes: "はい",
        no: "いいえ",
        confirm: "確認",
        cancel: "キャンセル",
        delete: "削除",
        clear: "クリア",
        areYouSure: "本当によろしいですか？",
        clearScoresConfirm: "これによりすべてのハイスコアが消去されます。続行しますか？",
        loading: "読み込み中...",
        success: "成功",
        error: "エラー",
        ok: "OK",
        apply: "適用",
        backToGame: "ゲームに戻る"
    },
    ru: {
        // Основные тексты игры
        gameTitle: "Игра Змейка",
        welcomeMessage: "Добро пожаловать в игру Змейка",
        copyright: "© 2025 alphaAXIS. Все права защищены.",

        // Аутентификация
        username: "Имя пользователя",
        password: "Пароль",
        confirmPassword: "Подтвердите пароль",
        login: "Войти",
        register: "Зарегистрироваться",
        guestMode: "Режим гостя",
        noAccount: "Нет аккаунта? Зарегистрироваться",
        haveAccount: "Уже есть аккаунт? Войти",
        loginSuccess: "Вход выполнен успешно!",
        registerSuccess: "Регистрация прошла успешно!",
        usernameRequired: "Имя пользователя обязательно",
        passwordRequired: "Пароль обязателен",
        passwordsMismatch: "Пароли не совпадают",
        usernameExists: "Это имя пользователя уже существует",
        invalidCredentials: "Неверное имя пользователя или пароль",

        // Меню игры
        startGame: "Начать игру",
        continueGame: "Продолжить игру",
        settings: "Настройки",
        highScores: "Рекорды",
        help: "Помощь",
        about: "О игре",
        exit: "Выход",
        back: "Назад",

        // Интерфейс игры
        score: "Счет",
        level: "Уровень",
        exp: "Опыт",
        expProgress: "%d/%d XP",
        lives: "Жизни",
        time: "Время",
        keyPresses: "Нажатия клавиш",
        survivalTime: "Время выживания",
        performance: "Производительность",
        speed: "Скорость",
        pause: "Пауза",
        resume: "Продолжить",
        current: "Текущий",
        best: "Лучший",

        // Конец игры
        gameOver: "Игра окончена",
        finalScore: "Итоговый счет",
        finalLevel: "Итоговый уровень",
        finalExp: "Полученный опыт",
        finalKeyCount: "Всего нажатий клавиш",
        finalSurvivalTime: "Общее время выживания",
        finalPerformance: "Оценка производительности",
        newHighScore: "Новый рекорд!",
        restart: "Перезапустить",
        returnToMain: "Вернуться в главное меню",
        playAgain: "Играть снова",

        // Управление
        controls: "Управление",
        moveUp: "Вверх: W или ↑",
        moveDown: "Вниз: S или ↓",
        moveLeft: "Влево: A или ←",
        moveRight: "Вправо: D или →",
        restartKey: "Перезапустить: R",
        pauseKey: "Пауза: P или Пробел",
        menuKey: "Меню: Esc",
        muteKey: "Отключить звук: M",

        // Инструкции
        gameGoal: "Управляйте змейкой, чтобы она ела еду и росла. Избегайте столкновений со стенами или своей хвостом.",
        gameTips: "Совет: Съедайте специальную еду для получения дополнительных очков! Змейка двигается быстрее по мере роста счета.",
        levelUp: "Уровень повышен!",
        gamePaused: "Игра на паузе",
        specialFood: "Специальная еда!",
        bonusPoints: "%d бонусных очков!",
        speedIncreased: "Скорость увеличена!",

        // Настройки
        language: "Язык",
        soundEffects: "Звуковые эффекты",
        backgroundMusic: "Фоновая музыка",
        difficulty: "Сложность",
        easy: "Легкий",
        medium: "Средний",
        hard: "Тяжелый",
        expert: "Эксперт",
        graphicsQuality: "Качество графики",
        high: "Высокое",
        low: "Низкое",
        resetSettings: "Сбросить настройки",
        saveSettings: "Сохранить настройки",
        enableVibration: "Включить вибрацию (Мобильные)",
        showTutorial: "Показать руководство при запуске",
        darkMode: "Темный режим",

        // Панель помощи
        helpTitle: "Как играть",
        helpContent: "Используйте клавиши со стрелками или WASD для управления направлением змейки. Съедайте еду, чтобы расти и получать очки. Игра заканчивается при столкновении со стенами или собственным телом.",
        helpAdvanced: "Дополнительно: Собирайте специальные предметы для получения бонусов. Завершайте уровни, чтобы разблокировать новые скины.",
        closeHelp: "Закрыть помощь",

        // Рекорды
        highScoresTitle: "Лучшие игроки",
        rank: "Ранг",
        player: "Игрок",
        date: "Дата",
        yourScore: "Ваш счет",
        noScores: "Рекордов пока нет",
        clearScores: "Очистить рекорды",

        // Общие элементы интерфейса
        yes: "Да",
        no: "Нет",
        confirm: "Подтвердить",
        cancel: "Отмена",
        delete: "Удалить",
        clear: "Очистить",
        areYouSure: "Вы уверены?",
        clearScoresConfirm: "Это сотрет все рекорды. Продолжить?",
        loading: "Загрузка...",
        success: "Успех",
        error: "Ошибка",
        ok: "ОК",
        apply: "Применить",
        backToGame: "Вернуться к игре"
    },
    ar: {
        // النصوص الأساسية للعبة
        gameTitle: "لعبة الأفعى",
        welcomeMessage: "مرحبًا بك في لعبة الأفعى",
        copyright: "© 2025 alphaAXIS. جميع الحقوق محفوظة.",

        // المصادقة
        username: "اسم المستخدم",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        login: "تسجيل الدخول",
        register: "التسجيل",
        guestMode: "وضع الضيف",
        noAccount: "ليس لديك حساب؟ سجل",
        haveAccount: "لديك حساب بالفعل؟ سجل الدخول",
        loginSuccess: "نجح تسجيل الدخول!",
        registerSuccess: "نجح التسجيل!",
        usernameRequired: "اسم المستخدم مطلوب",
        passwordRequired: "كلمة المرور مطلوبة",
        passwordsMismatch: "كلمات المرور غير متطابقة",
        usernameExists: "اسم المستخدم موجود بالفعل",
        invalidCredentials: "اسم مستخدم أو كلمة مرور غير صالحة",

        // قائمة اللعبة
        startGame: "بدء اللعبة",
        continueGame: "استكمال اللعبة",
        settings: "الإعدادات",
        highScores: "أعلى النقاط",
        help: "مساعدة",
        about: "حول",
        exit: "خروج",
        back: "رجوع",

        // واجهة اللعبة
        score: "النقاط",
        level: "المستوى",
        exp: "الخبرة",
        expProgress: "%d/%d XP",
        lives: "الأرواح",
        time: "الوقت",
        keyPresses: "ضغطات المفاتيح",
        survivalTime: "وقت البقاء",
        performance: "الأداء",
        speed: "السرعة",
        pause: "إيقاف مؤقت",
        resume: "استئناف",
        current: "الحالي",
        best: "الأفضل",

        // نهاية اللعبة
        gameOver: "انتهت اللعبة",
        finalScore: "النقاط النهائية",
        finalLevel: "المستوى النهائي",
        finalExp: "الخبرة المحصلة",
        finalKeyCount: "إجمالي ضغطات المفاتيح",
        finalSurvivalTime: "إجمالي وقت البقاء",
        finalPerformance: "تقييم الأداء",
        newHighScore: "نتيجة جديدة عالية!",
        restart: "إعادة التشغيل",
        returnToMain: "العودة إلى القائمة الرئيسية",
        playAgain: "لعب مرة أخرى",

        // التحكم
        controls: "التحكم",
        moveUp: "النزول: W أو ↑",
        moveDown: "الصعود: S أو ↓",
        moveLeft: "اليمين: A أو ←",
        moveRight: "اليسار: D أو →",
        restartKey: "إعادة التشغيل: R",
        pauseKey: "إيقاف مؤقت: P أو مسافة",
        menuKey: "القائمة: Esc",
        muteKey: "كتم الصوت: M",

        // التعليمات
        gameGoal: "تحكم الأفعى لأكل الطعام والنمو. تجنب اصطدام الجدران أو ذيلك الخاص.",
        gameTips: "تلميح: أكل الطعام الخاص للحصول على نقاط إضافية! الأفعى تزداد سرعة كلما كسبت المزيد من النقاط.",
        levelUp: "ارتفاع المستوى!",
        gamePaused: "اللعبة متوقفة مؤقتًا",
        specialFood: "طعام خاص!",
        bonusPoints: "%d نقاط إضافية!",
        speedIncreased: "السرعة αυثرت!",

        // الإعدادات
        language: "اللغة",
        soundEffects: "تأثيرات الصوت",
        backgroundMusic: "الموسيقى الخلفية",
        difficulty: "الصعوبة",
        easy: "سهل",
        medium: "متوسط",
        hard: "صعب",
        expert: "خبير",
        graphicsQuality: "جودة الرسوميات",
        high: "عالية",
        low: "منخفضة",
        resetSettings: "إعادة ضبط الإعدادات",
        saveSettings: "حفظ الإعدادات",
        enableVibration: "تمكين الاهتزاز (موبايل)",
        showTutorial: "عرض البرنامج التعليمي عند التشغيل",
        darkMode: "الوضع الداكن",

        // لوحة المساعدة
        helpTitle: "كيفية اللعب",
        helpContent: "استخدم مفاتيح الأسهم أو WASD للتحكم في اتجاه الأفعى. أكل الطعام لتنمو وتكسب النقاط. تنتهي اللعبة إذا اصطدمت الجدران أو جسدك الخاص.",
        helpAdvanced: "متقدم: جمع العناصر الخاصة للحصول على مكافآت. اكتمل المستويات لفتح أنماط جديدة.",
        closeHelp: "إغلاق المساعدة",

        // أعلى النقاط
        highScoresTitle: "أفضل اللاعبين",
        rank: "الرتبة",
        player: "اللاعب",
        date: "التاريخ",
        yourScore: "نقاطك",
        noScores: "لا توجد نقاط حتى الآن",
        clearScores: "مسح النقاط",

        // عناصر واجهة المستخدم العامة
        yes: "نعم",
        no: "لا",
        confirm: "تأكيد",
        cancel: "إلغاء",
        delete: "حذف",
        clear: "مسح",
        areYouSure: "هل أنت متأكد؟",
        clearScoresConfirm: "سيؤدي هذا إلى مسح جميع الأرقام العالية. المتابعة؟",
        loading: "جار التحميل...",
        success: "نجاح",
        error: "خطأ",
        ok: "حسناً",
        apply: "تطبيق",
        backToGame: "العودة إلى اللعبة"
    }
};

// Language switching function with complete implementation
function changeLanguage(lang) {
    // Set HTML language attribute
    document.documentElement.lang = lang;

    // Handle RTL text direction for languages like Arabic
    if (['ar'].includes(lang)) {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Handle texts with placeholders (e.g., "%d/%d XP")
            if (translations[lang][key].includes('%') && element.dataset.i18nParams) {
                const params = element.dataset.i18nParams.split(',').map(param => parseInt(param.trim()));
                element.textContent = sprintf(translations[lang][key], ...params);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholder texts
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update image alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });

    // Store selected language in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize with user's preferred language or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});

// Simple string formatting function for translated texts with placeholders
function sprintf(str, ...args) {
    return str.replace(/%d/g, () => args.shift());
}

let currentUser = null;
let users = JSON.parse(localStorage.getItem('snakeUsers')) || {};
let guestData = JSON.parse(localStorage.getItem('snakeGuestData')) || {
    history: [],
    stats: {
        totalGames: 0,
        totalScore: 0,
        avgPerformance: 0,
        highestPerformance: 0
    }
};
let isRegisterMode = false;
let isGuestMode = false;

const particleCanvas = document.getElementById('particleCanvas');
const particleCtx = particleCanvas.getContext('2d');
let particles = [];
const particleCount = 250;
let particleHue = 0;
const mouse = {x: null, y: null, prevX: null, prevY: null, isActive: false};

function initParticles() {
    particles = [];

    for (let i = 0; i < particleCount; i++) {
        const margin = 50;
        const x = margin + Math.random() * (particleCanvas.width - margin * 2);
        const y = margin + Math.random() * (particleCanvas.height - margin * 2);

        particles.push({
            x: x,
            y: y,
            targetX: x,
            targetY: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 2.75 + 0.5,
            color: `hsl(${particleHue}, 20%, 70%)`,
            friction: 0.88,
            displacement: 0,
            displacementDecay: 0.85
        });
    }
}

function isInGameArea(x, y) {
    const gameContainer = document.getElementById('gameContainer');
    const gameCanvas = document.getElementById('gameCanvas');
    const authScreen = document.getElementById('authScreen');
    const startScreen = document.getElementById('startScreen');
    const guestScreen = document.getElementById('guestScreen');

    if (gameContainer.style.display !== 'none') {
        const rect = gameCanvas.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    if (authScreen.style.display !== 'none') {
        const rect = authScreen.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    if (startScreen.style.display !== 'none') {
        const rect = startScreen.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    if (guestScreen.style.display !== 'none') {
        const rect = guestScreen.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    return false;
}

function updateParticles() {
    particleHue = (particleHue + 0.5) % 360;

    mouse.isActive = false;
    if (mouse.prevX !== null && mouse.prevY !== null && mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - mouse.prevX;
        const dy = mouse.y - mouse.prevY;
        const mouseSpeed = Math.sqrt(dx * dx + dy * dy);
        mouse.isActive = mouseSpeed > 1;
    }

    particles.forEach(particle => {
        particle.vx += (Math.random() - 0.5) * 0.5;
        particle.vy += (Math.random() - 0.5) * 0.5;

        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const attractRange = 180 + (mouse.isActive ? 80 : 0);

            if (distance < attractRange && distance > 0) {
                const baseAttraction = 40;
                const distanceFactor = 1 - (distance / attractRange);
                const attraction = (baseAttraction / (distance + 1)) * distanceFactor;

                particle.vx += (dx / distance) * attraction;
                particle.vy += (dy / distance) * attraction;

                const displacement = Math.sqrt(
                    Math.pow(particle.x - particle.targetX, 2) +
                    Math.pow(particle.y - particle.targetY, 2)
                );
                particle.displacement = Math.max(particle.displacement, displacement);
            }
        }

        if (!mouse.isActive && particle.displacement > 1) {
            const dx = particle.targetX - particle.x;
            const dy = particle.targetY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0) {
                const restoreForce = 0.001 * particle.displacement;
                particle.vx += (dx / distance) * restoreForce;
                particle.vy += (dy / distance) * restoreForce;
            }

            particle.displacement *= particle.displacementDecay;
        }

        particle.vx *= particle.friction;
        particle.vy *= particle.friction;

        if (isInGameArea(particle.x, particle.y)) {
            const authScreen = document.getElementById('authScreen');
            const startScreen = document.getElementById('startScreen');
            const guestScreen = document.getElementById('guestScreen');
            const gameContainer = document.getElementById('gameContainer');
            let rect;

            if (authScreen.style.display !== 'none') {
                rect = authScreen.getBoundingClientRect();
            } else if (startScreen.style.display !== 'none') {
                rect = startScreen.getBoundingClientRect();
            } else if (guestScreen.style.display !== 'none') {
                rect = guestScreen.getBoundingClientRect();
            } else {
                rect = gameContainer.getBoundingClientRect();
            }

            let pushX = 0;
            let pushY = 0;

            if (particle.x < rect.left + rect.width / 2) {
                pushX = -10;
            } else {
                pushX = 10;
            }

            if (particle.y < rect.top + rect.height / 2) {
                pushY = -10;
            } else {
                pushY = 10;
            }

            particle.vx += pushX;
            particle.vy += pushY;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.color = `hsl(${particleHue}, 20%, 70%)`;

        if (particle.x < 0) {
            particle.x = 0;
            particle.vx *= -1.2;
        } else if (particle.x > particleCanvas.width) {
            particle.x = particleCanvas.width;
            particle.vx *= -1.2;
        }

        if (particle.y < 0) {
            particle.y = 0;
            particle.vy *= -1.2;
        } else if (particle.y > particleCanvas.height) {
            particle.y = particleCanvas.height;
            particle.vy *= -1.2;
        }
    });

    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
}

function drawParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                const opacity = 1 - (distance / 120);
                particleCtx.strokeStyle = `hsla(${particleHue}, 20%, 70%, ${opacity * 0.3})`;
                particleCtx.lineWidth = 1.2 * opacity;
                particleCtx.beginPath();
                particleCtx.moveTo(particles[i].x, particles[i].y);
                particleCtx.lineTo(particles[j].x, particles[j].y);
                particleCtx.stroke();
            }
        }
    }

    particles.forEach(particle => {
        if (!isInGameArea(particle.x, particle.y)) {
            particleCtx.beginPath();
            particleCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

            const gradient = particleCtx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 2
            );
            gradient.addColorStop(0, particle.color.replace('70%', '100%'));
            gradient.addColorStop(1, particle.color.replace('70%', '0%'));

            particleCtx.fillStyle = gradient;
            particleCtx.fill();
        }
    });
}

function animateParticles() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
}

document.addEventListener('mousemove', (e) => {
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
    mouse.prevX = null;
    mouse.prevY = null;
    mouse.isActive = false;
});

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    initParticles();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateParticles();

// 注册用户速度滑块交互
const speedSlider = document.getElementById('speedSlider');
const speedThumb = document.getElementById('speedThumb');
const speedProgress = document.getElementById('speedProgress');

function updateSliderVisual() {
    const percentage = (speedSlider.value - speedSlider.min) / (speedSlider.max - speedSlider.min) * 100;
    speedThumb.style.left = `${percentage}%`;
    speedProgress.style.width = `${percentage}%`;
}

updateSliderVisual();

const sliderContainer = document.querySelector('.start-screen .slider-container');
sliderContainer.addEventListener('click', (e) => {
    const rect = sliderContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const value = Math.round(pos * (speedSlider.max - speedSlider.min) + parseInt(speedSlider.min));
    speedSlider.value = value;
    updateSliderVisual();
    updateSpeedDisplay();
});

let isDragging = false;

speedThumb.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const rect = sliderContainer.getBoundingClientRect();
        let pos = (e.clientX - rect.left) / rect.width;
        pos = Math.max(0, Math.min(1, pos));

        const value = Math.round(pos * (speedSlider.max - speedSlider.min) + parseInt(speedSlider.min));
        speedSlider.value = value;
        updateSliderVisual();
        updateSpeedDisplay();
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mouseleave', () => {
    isDragging = false;
});

const guestSpeedSlider = document.getElementById('guestSpeedSlider');
const guestSpeedThumb = document.getElementById('guestSpeedThumb');
const guestSpeedProgress = document.getElementById('guestSpeedProgress');

function updateGuestSliderVisual() {
    const percentage = (guestSpeedSlider.value - guestSpeedSlider.min) / (guestSpeedSlider.max - guestSpeedSlider.min) * 100;
    guestSpeedThumb.style.left = `${percentage}%`;
    guestSpeedProgress.style.width = `${percentage}%`;
}

updateGuestSliderVisual();

const guestSliderContainer = document.querySelector('.guest-screen .slider-container');
guestSliderContainer.addEventListener('click', (e) => {
    const rect = guestSliderContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const value = Math.round(pos * (guestSpeedSlider.max - guestSpeedSlider.min) + parseInt(guestSpeedSlider.min));
    guestSpeedSlider.value = value;
    updateGuestSliderVisual();
    updateGuestSpeedDisplay();
});

let isGuestDragging = false;

guestSpeedThumb.addEventListener('mousedown', () => {
    isGuestDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isGuestDragging) {
        const rect = guestSliderContainer.getBoundingClientRect();
        let pos = (e.clientX - rect.left) / rect.width;
        pos = Math.max(0, Math.min(1, pos));

        const value = Math.round(pos * (guestSpeedSlider.max - guestSpeedSlider.min) + parseInt(guestSpeedSlider.min));
        guestSpeedSlider.value = value;
        updateGuestSliderVisual();
        updateGuestSpeedDisplay();
    }
});

document.addEventListener('mouseup', () => {
    isGuestDragging = false;
});

document.addEventListener('mouseleave', () => {
    isGuestDragging = false;
});

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    const confirmGroup = document.getElementById('confirmPasswordGroup');
    const authModeToggle = document.getElementById('authModeToggle');
    const mainButton = document.querySelector('.auth-actions button:first-child');

    if (isRegisterMode) {
        confirmGroup.style.display = 'block';
        authModeToggle.innerHTML = '<i class="fas fa-sign-in-alt"></i> 已有账号？切换到登录';
        mainButton.innerHTML = '<i class="fas fa-user-plus"></i> 注册';
    } else {
        confirmGroup.style.display = 'none';
        authModeToggle.innerHTML = '<i class="fas fa-user-plus"></i> 没有账号？注册新账号';
        mainButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> 登录';
    }

    clearErrors();
}

function clearErrors() {
    document.getElementById('usernameError').classList.remove('active');
    document.getElementById('usernameError').querySelector('span').textContent = '';
    document.getElementById('passwordError').classList.remove('active');
    document.getElementById('passwordError').querySelector('span').textContent = '';
    document.getElementById('confirmPasswordError').classList.remove('active');
    document.getElementById('confirmPasswordError').querySelector('span').textContent = '';
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.querySelector('span').textContent = message;
    errorElement.classList.add('active');
}

function handleAuthAction() {
    if (isRegisterMode) {
        register();
    } else {
        login();
    }
}

function login() {
    clearErrors();

    const username = document.getElementById('authUsername').value.trim();
    const password = document.getElementById('authPassword').value;

    let isValid = true;

    if (username === '') {
        showError('usernameError', '请输入用户名');
        isValid = false;
    }

    if (password === '') {
        showError('passwordError', '请输入密码');
        isValid = false;
    }

    if (!isValid) return;

    if (!users[username]) {
        showError('usernameError', '用户名不存在');
        return;
    }

    if (users[username].password !== password) {
        showError('passwordError', '密码不正确');
        return;
    }

    currentUser = {...users[username], username: username, isGuest: false};
    isGuestMode = false;
    showStartScreen();
}

function register() {
    clearErrors();

    const username = document.getElementById('authUsername').value.trim();
    const password = document.getElementById('authPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    if (username === '') {
        showError('usernameError', '请输入用户名');
        isValid = false;
    } else if (username.length < 3) {
        showError('usernameError', '用户名至少3个字符');
        isValid = false;
    } else if (users[username]) {
        showError('usernameError', '用户名已存在');
        isValid = false;
    }

    if (password === '') {
        showError('passwordError', '请输入密码');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', '密码至少6个字符');
        isValid = false;
    }

    if (confirmPassword === '') {
        showError('confirmPasswordError', '请确认密码');
        isValid = false;
    } else if (confirmPassword !== password) {
        showError('confirmPasswordError', '两次密码不一致');
        isValid = false;
    }

    if (!isValid) return;

    const newUser = {
        password: password,
        level: 1,
        exp: 0,
        totalExp: 0,
        history: [],
        stats: {
            totalGames: 0,
            totalScore: 0,
            avgPerformance: 0,
            highestPerformance: 0
        }
    };

    users[username] = newUser;
    localStorage.setItem('snakeUsers', JSON.stringify(users));

    currentUser = {...newUser, username: username, isGuest: false};
    isGuestMode = false;
    showStartScreen();
}

function showStartScreen() {
    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('guestScreen').style.display = 'none';
    document.getElementById('welcomeUsername').textContent = currentUser.username;
    document.getElementById('logoutBtn').style.display = 'flex';

    updateLevelDisplay();
}

function guestMode() {
    guestData = JSON.parse(localStorage.getItem('snakeGuestData')) || {
        history: [],
        stats: {
            totalGames: 0,
            totalScore: 0,
            avgPerformance: 0,
            highestPerformance: 0
        }
    };

    currentUser = {...guestData, username: '游客', isGuest: true};
    isGuestMode = true;

    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('guestScreen').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
}

function switchToLogin() {
    document.getElementById('guestScreen').style.display = 'none';
    document.getElementById('authScreen').style.display = 'block';
}

function logout() {
    if (currentUser && currentUser.isGuest) {
        guestData = {
            history: currentUser.history,
            stats: currentUser.stats
        };
        localStorage.setItem('snakeGuestData', JSON.stringify(guestData));
    } else if (currentUser) {
        users[currentUser.username] = {
            password: currentUser.password,
            level: currentUser.level,
            exp: currentUser.exp,
            totalExp: currentUser.totalExp,
            history: currentUser.history,
            stats: currentUser.stats
        };
        localStorage.setItem('snakeUsers', JSON.stringify(users));
    }

    currentUser = null;
    isGuestMode = false;
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('guestScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('authScreen').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';

    document.getElementById('authUsername').value = '';
    document.getElementById('authPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    clearErrors();
}

function getRequiredExpForLevel(level) {
    return Math.floor(100 * Math.pow(1.2, level - 1));
}

function calculateExpGained(score, performance, speedPercentage) {
    const baseExp = Math.floor(score * 5);
    const performanceMultiplier = 0.5 + (performance / 10);
    const speedMultiplier = speedPercentage / 100;

    return Math.floor(baseExp * performanceMultiplier * speedMultiplier);
}

function updateUserLevel(expGained) {
    if (!currentUser || currentUser.isGuest) return 0;

    let levelsGained = 0;
    currentUser.exp += expGained;
    currentUser.totalExp += expGained;

    while (currentUser.exp >= getRequiredExpForLevel(currentUser.level)) {
        currentUser.exp -= getRequiredExpForLevel(currentUser.level);
        currentUser.level++;
        levelsGained++;
        showLevelUpMessage();
    }

    if (!currentUser.isGuest) {
        users[currentUser.username] = {
            password: currentUser.password,
            level: currentUser.level,
            exp: currentUser.exp,
            totalExp: currentUser.totalExp,
            history: currentUser.history,
            stats: currentUser.stats
        };
        localStorage.setItem('snakeUsers', JSON.stringify(users));
    }

    return levelsGained;
}

function showLevelUpMessage() {
    if (isGuestMode) return;

    const message = document.getElementById('levelUpMessage');
    message.classList.add('active');

    function animateLevelUp() {
        if (!message.classList.contains('active')) return;
        requestAnimationFrame(animateLevelUp);
    }

    animateLevelUp();

    setTimeout(() => {
        message.classList.remove('active');
    }, 1500);
}

function updateLevelDisplay() {
    if (!currentUser || currentUser.isGuest) return;

    const requiredExp = getRequiredExpForLevel(currentUser.level);
    const progressPercentage = (currentUser.exp / requiredExp) * 100;

    document.getElementById('userLevel').textContent = currentUser.level;
    document.getElementById('levelProgressBar').style.width = `${progressPercentage}%`;
    document.getElementById('levelProgressText').textContent =
        `${currentUser.exp}/${requiredExp} 经验值`;

    document.getElementById('inGameLevel').textContent = currentUser.level;
    document.getElementById('inGameLevelProgressBar').style.width = `${progressPercentage}%`;

    document.getElementById('finalLevel').textContent = currentUser.level;

    if (currentUser.stats.totalGames > 0) {
        document.getElementById('averagePerformance').textContent =
            parseFloat(currentUser.stats.avgPerformance).toFixed(2);
    } else {
        document.getElementById('averagePerformance').textContent = '0';
    }

    document.getElementById('highestPerformance').textContent =
        currentUser.stats.highestPerformance.toFixed(2);
}

const gameCanvas = document.getElementById('gameCanvas');
const gameCtx = gameCanvas.getContext('2d');
const gridSize = 15;
let snake = [{x: 150, y: 150}];
let direction = {x: 0, y: 0};
let nextDirection = {x: 0, y: 0};
let food = generateFood();
let score = 0;
let keyCount = 0;
let survivalTime = 0;
let gameInterval;
let survivalTimer = null;
let initialSpeedPercentage = 100;
let currentSpeedPercentage = 100;
let gameStarted = false;
let lastKeyTime = 0;
const keyDelay = 50;

function generateFood() {
    let newFood;
    let onSnake;

    do {
        onSnake = false;
        newFood = {
            x: Math.floor(Math.random() * (gameCanvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (gameCanvas.height / gridSize)) * gridSize
        };

        for (let segment of snake) {
            if (segment.x === newFood.x && segment.y === newFood.y) {
                onSnake = true;
                break;
            }
        }
    } while (onSnake);

    return newFood;
}

function drawGame() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    gameCtx.strokeStyle = 'rgba(140, 140, 140, 0.1)';
    gameCtx.lineWidth = 1;

    for (let x = 0; x < gameCanvas.width; x += gridSize) {
        gameCtx.beginPath();
        gameCtx.moveTo(x, 0);
        gameCtx.lineTo(x, gameCanvas.height);
        gameCtx.stroke();
    }

    for (let y = 0; y < gameCanvas.height; y += gridSize) {
        gameCtx.beginPath();
        gameCtx.moveTo(0, y);
        gameCtx.lineTo(gameCanvas.width, y);
        gameCtx.stroke();
    }

    snake.forEach((segment, index) => {
        if (index === 0) {
            const gradient = gameCtx.createLinearGradient(
                segment.x, segment.y,
                segment.x + gridSize, segment.y + gridSize
            );
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(1, 'rgb(200, 0, 0)');

            gameCtx.fillStyle = gradient;

            gameCtx.fillStyle = 'rgba(233,18,239,0.7)';
            const eyeSize = gridSize / 5;

            if (direction.x > 0) {
                gameCtx.beginPath();
                gameCtx.arc(segment.x + gridSize - eyeSize * 2, segment.y + eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.arc(segment.x + gridSize - eyeSize * 2, segment.y + gridSize - eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.fill();
            } else if (direction.x < 0) {
                gameCtx.beginPath();
                gameCtx.arc(segment.x + eyeSize * 2, segment.y + eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.arc(segment.x + eyeSize * 2, segment.y + gridSize - eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.fill();
            } else if (direction.y > 0) {
                gameCtx.beginPath();
                gameCtx.arc(segment.x + eyeSize * 2, segment.y + gridSize - eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.arc(segment.x + gridSize - eyeSize * 2, segment.y + gridSize - eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.fill();
            } else if (direction.y < 0) {
                gameCtx.beginPath();
                gameCtx.arc(segment.x + eyeSize * 2, segment.y + eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.arc(segment.x + gridSize - eyeSize * 2, segment.y + eyeSize * 2, eyeSize, 0, Math.PI * 2);
                gameCtx.fill();
            }
        } else {
            const colorPos = index / snake.length;
            const g = Math.floor(140 - colorPos * 40);
            gameCtx.fillStyle = `rgba(170, 14, 175, 0.7)`;
        }

        gameCtx.fillRect(segment.x, segment.y, gridSize, gridSize);

        gameCtx.fillStyle = 'rgba(240, 240, 240, 0.1)';
        gameCtx.fillRect(segment.x, segment.y, gridSize, gridSize / 3);
        gameCtx.fillRect(segment.x, segment.y, gridSize / 3, gridSize);
    });

    const foodGradient = gameCtx.createRadialGradient(
        food.x + gridSize / 2, food.y + gridSize / 2, 0,
        food.x + gridSize / 2, food.y + gridSize / 2, gridSize / 2
    );
    foodGradient.addColorStop(0, 'limegreen');
    foodGradient.addColorStop(1, 'green');

    gameCtx.fillStyle = foodGradient;
    gameCtx.beginPath();
    gameCtx.arc(
        food.x + gridSize / 2,
        food.y + gridSize / 2,
        gridSize / 2 - 1,
        0,
        Math.PI * 2
    );
    gameCtx.fill();

    gameCtx.fillStyle = 'rgba(240, 240, 240, 0.4)';
    gameCtx.beginPath();
    gameCtx.arc(
        food.x + gridSize / 3,
        food.y + gridSize / 3,
        gridSize / 8,
        0,
        Math.PI * 2
    );
    gameCtx.fill();

    if (!gameStarted) {
        gameCtx.fillStyle = 'rgba(240, 240, 240, 0.7)';
        gameCtx.font = '14px Segoe UI, 微软雅黑';
        gameCtx.textAlign = 'center';
        gameCtx.fillText('按WASD或方向键开始移动', gameCanvas.width / 2, gameCanvas.height / 2 + 50);

        const iconSize = 20;
        const iconX = gameCanvas.width / 2;
        const iconY = gameCanvas.height / 2;

        gameCtx.fillStyle = 'rgba(180, 180, 180, 0.7)';
        gameCtx.fillRect(iconX - iconSize / 2, iconY - iconSize * 2, iconSize, iconSize);
        gameCtx.fillStyle = '#f0f0f0';
        gameCtx.font = '10px Arial';
        gameCtx.fillText('W', iconX, iconY - iconSize * 2 + iconSize / 2 + 3);

        gameCtx.fillStyle = 'rgba(180, 180, 180, 0.7)';
        gameCtx.fillRect(iconX - iconSize / 2, iconY, iconSize, iconSize);
        gameCtx.fillStyle = '#f0f0f0';
        gameCtx.fillText('S', iconX, iconY + iconSize / 2 + 3);

        gameCtx.fillStyle = 'rgba(180, 180, 180, 0.7)';
        gameCtx.fillRect(iconX - iconSize * 2, iconY - iconSize / 2, iconSize, iconSize);
        gameCtx.fillStyle = '#f0f0f0';
        gameCtx.fillText('A', iconX - iconSize * 1.5, iconY + 3);

        gameCtx.fillStyle = 'rgba(180, 180, 180, 0.7)';
        gameCtx.fillRect(iconX + iconSize, iconY - iconSize / 2, iconSize, iconSize);
        gameCtx.fillStyle = '#f0f0f0';
        gameCtx.fillText('D', iconX + iconSize * 1.5, iconY + 3);
    }
}

function updateGame() {
    if (nextDirection.x !== -direction.x || nextDirection.y !== -direction.y) {
        direction = {...nextDirection};
    }

    if (gameStarted && (direction.x !== 0 || direction.y !== 0)) {
        const head = {
            x: snake[0].x + direction.x,
            y: snake[0].y + direction.y
        };

        if (
            head.x < 0 || head.x >= gameCanvas.width ||
            head.y < 0 || head.y >= gameCanvas.height ||
            snake.some((segment, index) => index > 0 && segment.x === head.x && segment.y === head.y)
        ) {
            endGame();
            return;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            food = generateFood();
            updateStats();

            currentSpeedPercentage *= 1.02;
            if (currentSpeedPercentage > 500) {
                currentSpeedPercentage = 500;
            }
            updateGameSpeed();
        } else {
            snake.pop();
        }
    }

    drawGame();
}

function updateGameSpeed() {
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    const baseDelay = 150;
    const speedFactor = 100 / currentSpeedPercentage;
    const currentDelay = baseDelay * speedFactor;

    gameInterval = setInterval(updateGame, currentDelay);

    document.getElementById('currentSpeed').textContent = `${Math.round(currentSpeedPercentage)}%`;
}

function updateSpeedDisplay() {
    initialSpeedPercentage = parseInt(document.getElementById('speedSlider').value);
    document.getElementById('speedValue').textContent = `${initialSpeedPercentage}%`;
}

function updateGuestSpeedDisplay() {
    initialSpeedPercentage = parseInt(document.getElementById('guestSpeedSlider').value);
    document.getElementById('guestSpeedValue').textContent = `${initialSpeedPercentage}%`;
}

function updateStats() {
    document.getElementById('keyCount').textContent = keyCount;
    document.getElementById('score').textContent = score;

    const ratio = keyCount > 0 ? ((score / keyCount) * 100).toFixed(2) : 0;
    document.getElementById('scoreRatio').textContent = `${ratio}%`;
}

function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'flex';
    document.getElementById('gameContainer').classList.remove('guest-mode');
    document.getElementById('stats').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'flex';

    resetGame();
    updateGameSpeed();
    updateLevelDisplay();
}

function startGuestGame() {
    document.getElementById('guestScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'flex';
    document.getElementById('gameContainer').classList.add('guest-mode');
    document.getElementById('stats').style.display = 'block';

    resetGame();
    updateGameSpeed();
}

function resetGame() {
    snake = [{x: 150, y: 150}];
    direction = {x: 0, y: 0};
    nextDirection = {x: 0, y: 0};
    food = generateFood();
    score = 0;
    keyCount = 0;
    survivalTime = 0;
    gameStarted = false;
    currentSpeedPercentage = initialSpeedPercentage;

    if (survivalTimer) {
        clearInterval(survivalTimer);
        survivalTimer = null;
    }

    updateStats();
    document.getElementById('survivalTime').textContent = '0.00s';
    document.getElementById('currentSpeed').textContent = `${Math.round(currentSpeedPercentage)}%`;
    drawGame();
}

function endGame() {
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }

    if (survivalTimer) {
        clearInterval(survivalTimer);
        survivalTimer = null;
    }

    const ratio = keyCount > 0 ? (score / keyCount) : 0;
    const performance = (score * score * ratio).toFixed(2);
    const finalSpeed = Math.round(currentSpeedPercentage);

    let expGained = 0;
    if (!isGuestMode) {
        expGained = calculateExpGained(score, parseFloat(performance), finalSpeed);
        updateUserLevel(expGained);
    }

    document.getElementById('expGained').textContent = expGained;
    document.getElementById('finalKeyCount').textContent = keyCount;
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalScoreRatio').textContent = keyCount > 0 ?
        ((score / keyCount) * 100).toFixed(2) + '%' : '0%';
    document.getElementById('finalSurvivalTime').textContent = survivalTime.toFixed(2) + 's';
    document.getElementById('finalSpeed').textContent = `${finalSpeed}%`;
    document.getElementById('finalPerformance').textContent = performance;

    updateLevelDisplay();

    if (currentUser) {
        const record = {
            date: new Date().toLocaleString(),
            score: score,
            keyCount: keyCount,
            survivalTime: parseFloat(survivalTime.toFixed(2)),
            performance: parseFloat(performance),
            speed: finalSpeed,
            expGained: expGained
        };

        currentUser.history.push(record);
        if (currentUser.history.length > 20) {
            currentUser.history = currentUser.history.slice(-20);
        }

        currentUser.stats.totalGames++;
        currentUser.stats.totalScore += score;
        currentUser.stats.avgPerformance =
            (currentUser.stats.totalScore / currentUser.stats.totalGames).toFixed(2);

        if (parseFloat(performance) > currentUser.stats.highestPerformance) {
            currentUser.stats.highestPerformance = parseFloat(performance);
            showAlert('恭喜！你创下新纪录！');
        }

        if (!currentUser.isGuest) {
            users[currentUser.username] = {
                password: currentUser.password,
                level: currentUser.level,
                exp: currentUser.exp,
                totalExp: currentUser.totalExp,
                history: currentUser.history,
                stats: currentUser.stats
            };
            localStorage.setItem('snakeUsers', JSON.stringify(users));
        } else {
            guestData = {
                history: currentUser.history,
                stats: currentUser.stats
            };
            localStorage.setItem('snakeGuestData', JSON.stringify(guestData));
        }
    }

    const gameOverScreen = document.getElementById('gameOverScreen');
    if (isGuestMode) {
        gameOverScreen.classList.add('guest-mode');
    } else {
        gameOverScreen.classList.remove('guest-mode');
    }

    updateHistoryTable();
    updateLevelDisplay();

    setTimeout(() => {
        document.getElementById('gameOverScreen').style.display = 'block';
    }, 300);
}

function updateHistoryTable() {
    const tableBody = document.querySelector('#historyTable tbody');
    tableBody.innerHTML = '';

    if (!currentUser || currentUser.history.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="6">暂无游戏记录</td>';
        tableBody.appendChild(row);
        return;
    }

    const sortBy = document.getElementById('sortBy').value;
    let sortedHistory = [...currentUser.history];

    if (sortBy === 'performance') {
        sortedHistory.sort((a, b) => b.performance - a.performance);
    } else {
        sortedHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    sortedHistory.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${record.date}</td>
                    <td>${record.score}</td>
                    <td>${record.keyCount}</td>
                    <td>${record.survivalTime.toFixed(2)}s</td>
                    <td>${record.performance.toFixed(2)}</td>
                    <td>${record.expGained}</td>
                `;
        tableBody.appendChild(row);
    });
}

function restartGame() {
    document.getElementById('gameOverScreen').style.display = 'none';
    resetGame();
    updateGameSpeed();
}

function returnToStart() {
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'none';

    if (isGuestMode) {
        document.getElementById('guestScreen').style.display = 'block';
    } else {
        document.getElementById('startScreen').style.display = 'block';
        document.getElementById('logoutBtn').style.display = 'flex';
    }
}

function clearHistory() {
    if (currentUser) {
        currentUser.history = [];

        if (!currentUser.isGuest) {
            users[currentUser.username] = {
                password: currentUser.password,
                level: currentUser.level,
                exp: currentUser.exp,
                totalExp: currentUser.totalExp,
                history: currentUser.history,
                stats: currentUser.stats
            };
            localStorage.setItem('snakeUsers', JSON.stringify(users));
        } else {
            guestData = {
                history: currentUser.history,
                stats: currentUser.stats
            };
            localStorage.setItem('snakeGuestData', JSON.stringify(guestData));
        }
    }

    updateHistoryTable();
    showAlert('历史记录已清空');
}

function showAlert(text) {
    const alertBox = document.getElementById('alertBox');
    document.getElementById('alertText').textContent = text;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.classList.add('active');
    }, 10);
}

function closeAlert() {
    const alertBox = document.getElementById('alertBox');
    alertBox.classList.remove('active');
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 300);
}

function toggleHelpPanel() {
    const panel = document.getElementById('helpPanel');
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        setTimeout(() => {
            panel.style.display = 'none';
        }, 300);
    } else {
        panel.style.display = 'block';
        setTimeout(() => {
            panel.classList.add('active');
        }, 10);
    }
}

document.addEventListener('click', (e) => {
    const helpPanel = document.getElementById('helpPanel');
    const helpBtn = document.querySelector('.help-btn');
    const closeHelp = document.querySelector('.close-help');

    if (helpPanel.classList.contains('active') &&
        !helpPanel.contains(e.target) &&
        e.target !== helpBtn &&
        e.target !== closeHelp) {
        toggleHelpPanel();
    }
});

document.addEventListener('keydown', (e) => {
    const now = Date.now();
    if (now - lastKeyTime < keyDelay) {
        return;
    }
    lastKeyTime = now;

    if (!gameStarted) {
        gameStarted = true;

        if (!survivalTimer) {
            survivalTime = 0;
            survivalTimer = setInterval(() => {
                survivalTime += 0.01;
                document.getElementById('survivalTime').textContent = survivalTime.toFixed(2) + 's';
            }, 10);
        }
    }

    keyCount++;

    switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
            if (direction.y === 0) {
                nextDirection = {x: 0, y: -gridSize};
            }
            break;
        case 's':
        case 'arrowdown':
            if (direction.y === 0) {
                nextDirection = {x: 0, y: gridSize};
            }
            break;
        case 'a':
        case 'arrowleft':
            if (direction.x === 0) {
                nextDirection = {x: -gridSize, y: 0};
            }
            break;
        case 'd':
        case 'arrowright':
            if (direction.x === 0) {
                nextDirection = {x: gridSize, y: 0};
            }
            break;
        case 'r':
            if (document.getElementById('gameOverScreen').style.display === 'block') {
                restartGame();
            } else if (document.getElementById('gameContainer').style.display === 'flex') {
                clearInterval(gameInterval);
                if (survivalTimer) {
                    clearInterval(survivalTimer);
                    survivalTimer = null;
                }
                restartGame();
            }
            break;
    }

    updateStats();
});

document.querySelectorAll('.help-btn').forEach(btn => {
    btn.addEventListener('click', toggleHelpPanel);
});
document.querySelector('.close-help').addEventListener('click', toggleHelpPanel);
document.getElementById('logoutBtn').addEventListener('click', logout);