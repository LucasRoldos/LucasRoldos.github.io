// Credenciales de acceso
const VALID_USERNAME = 'ababa';
const VALID_PASSWORD = 'akamaru1';

// Manejar el formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Login exitoso
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        // Guardar estado de sesión en localStorage
        localStorage.setItem('nakamaLoggedIn', 'true');
        
        // Inicializar la aplicación
        initApp();
    } else {
        // Mostrar error
        document.getElementById('loginError').style.display = 'block';
        
        // Limpiar campos y enfocar
        document.getElementById('usernameInput').value = '';
        document.getElementById('passwordInput').value = '';
        document.getElementById('usernameInput').focus();
    }
});

// Verificar si el usuario ya está logueado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('nakamaLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // Usuario ya autenticado
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        initApp();
    } else {
        // Mostrar login
        document.getElementById('usernameInput').focus();
    }
});

// Función para obtener un comentario aleatorio de un personaje
function getRandomCharacterComment() {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const comments = characterComments[randomCharacter.name];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    
    return {
        character: randomCharacter.name,
        avatar: randomCharacter.avatar,
        comment: randomComment
    };
}

// Comentarios personalizados para cada personaje
const characterComments = {
    'Luffy': [
        '¡SHISHISHI! ¡Esta aventura fue tan épica como encontrar el One Piece!',
        '¡WOW! ¡Qué día tan divertido! ¡Quiero repetirlo mil veces más!',
        '¡Esta memoria me hace querer gritar "¡YO SOY LUFFY! ¡EL HOMBRE QUE SE CONVERTIRÁ EN REY DE LOS PIRATAS!"',
        '¡WOOOOSH! ¡Qué aventura tan increíble! ¡Mi nakama es lo mejor del mundo!',
        '¡Esta foto tiene la esencia de la libertad! ¡Somos los mejores nakama del mundo!',
        '¡JA JA JA! ¡Recuerdo cuando casi nos comemos todo el banquete! ¡Qué hambre teníamos!',
        '¡Esta aventura fue tan épica que hasta Shanks estaría orgulloso!',
        '¡Qué día tan épico! ¡Quiero más carne y más aventuras!'
    ],
    'Zoro': [
        'Tch... Un momento digno de mi katana Wado Ichimonji. Mi camino hacia ser el mejor espadachín continúa.',
        'Esta memoria tiene el filo afilado de una promesa cumplida. Nunca olvidaré este día.',
        'Un recuerdo que honra mi juramento a Kuina. Cada día es un paso más cerca de mi sueño.',
        'Incluso yo, el cazador de piratas, podría perderme en la profundidad de este momento.',
        'Un instante que refleja la fuerza de nuestra tripulación. Los Mugiwara no retroceden.',
        'Esta memoria es tan valiosa como mi honor. Los verdaderos guerreros protegen sus recuerdos.',
        'Un día que demuestra que los sueños valen la pena. Mi camino es recto como mi espada.',
        'Cada recuerdo fortalece mi determinación. El camino del samurái es eterno.'
    ],
    'Nami': [
        '¡Este recuerdo vale más que cualquier mapa del tesoro! ¡Es priceless, beli-chan!',
        '¡Qué día perfecto para navegar juntos! ¡Mi clima-tact sintió la felicidad!',
        '¡Esta memoria brilla más que todos mis Belly juntos! ¡Es más valiosa que oro!',
        'Un momento que navegaría mil veces en mi mente... ¡y cobraría por cada recuerdo! JA JA!',
        '¡Qué clima perfecto para esta aventura! ¡Hasta mi clima-tact bailaba de alegría!',
        '¡Este recuerdo es más preciado que mi tangerine grove! ¡Mi kokoro está lleno!',
        '¡Qué día tan perfecto! ¡Incluso los vientos del Grand Line estarían celosos!',
        'Esta memoria es más valiosa que cualquier tesoro que Arlong haya soñado.'
    ],
    'Usopp': [
        '¡Esta historia es tan épica que incluso mis 8000 seguidores en el mar del East Blue estarían impresionados!',
        '¡El gran capitán Usopp, héroe de los mares, aprueba esta memoria épica! ¡PUM!',
        '¡Incluso mi Kuro Kabuto no podría disparar un momento más perfecto que este! ¡Directo al kokoro!',
        '¡Esta aventura es más emocionante que cuando enfrenté a Arlong! ¡Sin mentir!',
        '¡Mis nakama serían tan orgullosos de este momento! ¡Somos los mejores! ¡PUM PUM!',
        '¡Recuerdo cuando casi me desmayo de la emoción! ¡Pero el gran Usopp nunca retrocede!',
        '¡Esta memoria es más épica que mis historias de los 8000 seguidores! ¡Y es real!',
        '¡Qué día tan heroico! ¡Incluso el Going Merry estaría orgulloso de nosotros!'
    ],
    'Sanji': [
        '¡Esta memoria está más dulce que cualquier postre que haya cocinado! ¡Mellorine!',
        '¡Mellorine! ¡Qué momento tan hermoso! ¡Incluso mis ojos de corazón están llorando de alegría!',
        'Un día que merece un banquete de celebración... ¡con mi mejor receta de carne para Luffy!',
        'Esta memoria tiene el sabor perfecto de la aventura... ¡con un toque de amor! ¡Mellorine!',
        '¡Un momento que calienta el corazón más que mis Black Leg kicks! ¡Para mis queridas Nami-swan y Robin-chan!',
        '¡Qué recuerdo tan apasionado! ¡Incluso mis cigarrillos están bailando de felicidad!',
        '¡Esta memoria es más deliciosa que un plato de oden en el North Blue!',
        '¡Un día tan perfecto que merece ser celebrado con champagne para todas las chicas lindas!'
    ],
    'Chopper': [
        '¡Wooo! ¡Qué recuerdo tan lindo y emocionante! ¡Doctora! ¡Digo... qué momento tan genial!',
        '¡Este momento me hace tan feliz que podría saltar como un reno! ¡Wooo!',
        '¡Una aventura digna de ser celebrada con chocolate y caramelos de colores! ¡YAY!',
        '¡Qué día tan mágico para mis nakama! ¡Mi kokoro está lleno de alegría!',
        '¡Esta memoria es tan dulce como las golosinas que amo! ¡Y tan emocionante como una batalla!',
        '¡Wooo! ¡Recuerdo cuando mi corazón latía tan fuerte! ¡Como un reno corriendo!',
        '¡Qué momento tan perfecto! ¡Incluso mi narvejita está feliz! ¡YAY!',
        '¡Esta aventura fue tan épica que hasta mi Monster Point estaría orgulloso!'
    ],
    'Robin': [
        'Un momento precioso que merece ser preservado para siempre en los anales de nuestra historia.',
        'La historia de nuestra aventura se vuelve más rica y compleja con este recuerdo invaluable.',
        'Un instante que trasciende el tiempo y el espacio, como los secretos del Void Century.',
        'Esta memoria florece como las flores que tanto amo, cada pétalo es un momento de felicidad.',
        'Un momento que ilumina nuestra jornada como nakama, más brillante que cualquier poneglyph.',
        'Fufufu... qué recuerdo tan hermoso. Incluso los secretos del mundo parecen menos importantes.',
        'Un día que se grabará en la historia como uno de los más significativos de nuestra travesía.',
        'Esta memoria es más valiosa que cualquier conocimiento antiguo, porque es nuestro tesoro compartido.'
    ],
    'Franky': [
        '¡SÚPER! ¡Esta memoria es tan épica como mi cyborg! ¡OW! ¡Qué momento tan SÚPER!',
        '¡Esta aventura está más construida que mis mejores creaciones en Water 7! ¡SÚPER!',
        '¡OW! ¡Qué momento tan SÚPER! ¡Incluso mi Franky Rocket estaría orgulloso!',
        '¡Esta memoria tiene más estilo que mis gafas más cool! ¡SÚPER COOL!',
        '¡Un día que merece ser grabado en acero de la mejor calidad! ¡SÚPER!',
        '¡Qué recuerdo tan épico! ¡Incluso mi General Franky estaría impresionado!',
        '¡Esta aventura fue tan SÚPER que merece ser celebrada con cola! ¡OW!',
        '¡Un momento tan épico que hasta el Thousand Sunny estaría orgulloso de nosotros!'
    ],
    'Brook': [
        'Yohohoho... qué momento tan emotivo para mi alma, aunque ya no tenga cuerpo.',
        '¡Aunque no tengo ojos, puedo ver lo hermoso de este recuerdo! ¡Yohohoho!',
        'Un instante que toca las cuerdas de mi corazón... ¡Ah, pero si no tengo! ¡Yohohoho!',
        'Esta memoria es más dulce que cualquier canción que haya tocado con mi violin.',
        '¡Un momento digno de ser cantado por toda la eternidad! ¡Binks no Sake para celebrar!',
        '¡Qué recuerdo tan hermoso! ¡Incluso mis huesos están bailando de alegría! ¡Yohohoho!',
        'Un día que merece ser celebrado con una canción épica, como las que tocaba con mi antigua tripulación.',
        '¡Esta memoria es más preciosa que cualquier tesoro que haya visto en mis 50 años navegando! ¡Yohohoho!'
    ]
};

// Characters y sus frases
const characters = [
    { name: 'Luffy', avatar: 'luffy.png', phrases: [
        '¡Oí! ¡Esta aventura fue tan épica como cuando encontramos el One Piece!',
        '¡Nakama! ¡Este momento es tan importante como la carne de All Blue!',
        '¡Yosh! ¡Guardar esto es como tener un tesoro en el Merry!',
        '¡Shanks estaría orgulloso de este recuerdo nakama!',
        '¡Esto es tan emocionante como cuando conquistamos Grand Line!',
        '¡Ja ja ja! ¡Este recuerdo me da hambre de carne!',
        '¡Nami! ¡Este momento vale más que cualquier mapa del cielo!',
        '¡Zoro! ¡Guarda esto como si fuera tu katana más preciada!',
        '¡Sanji! ¡Este recuerdo sabe mejor que tu cocina especial!'
    ]},
    { name: 'Zoro', avatar: 'zoro.png', phrases: [
        'Un recuerdo digno de afilar mi memoria como mi Wado Ichimonji',
        'Este momento es tan valioso como encontrar la forma de vencer a Mihawk',
        'Guardar esto es más importante que cualquier rumbo hacia el Santoryu',
        'Este recuerdo tiene el filo de una promesa de nakama',
        'Como mi sueño de ser el mejor espadachín, este momento es inolvidable',
        'Este recuerdo es tan fuerte como el acero de mis katanas',
        'Un momento que honraría el nombre de Kuina',
        'Guardar esto es como proteger el sueño de todos mis nakamas',
        'Este recuerdo tiene la fuerza de mis 3000 mundos',
        'Como mi promesa a Luffy, este momento jamás se olvidará'
    ]},
    { name: 'Nami', avatar: 'nami.png', phrases: [
        '¡Este recuerdo vale más que cualquier tesoro de Arlong Park!',
        'Navegando por memorias felices como cuando trazamos el mapa de Grand Line',
        '¡Qué clima perfecto para recordar nuestros viajes en el Going Merry!',
        'Este momento es más precioso que cualquier Log Pose',
        'Guardar esto es como tener mi hogar en Cocoyasi Village',
        '¡Este recuerdo vale su peso en Berries de Cocoyasi!',
        'Como cuando salvamos a mi pueblo, este momento es invaluable',
        'Este recuerdo tiene más valor que cualquier Clima-Tact',
        '¡Nakama! ¡Este momento es más importante que cualquier travesía hacia All Blue!',
        'Guardar esto es como tener un pedazo de mi hogar siempre'
    ]},
    { name: 'Usopp', avatar: 'usopp.png', phrases: [
        '¡El gran capitán Usopp aprueba esta memoria épica!',
        '¡Qué historia tan valiente como cuando enfrenté a los piratas de Kuro!',
        '¡Mis 8000 seguidores de Syrup Village estarían de acuerdo!',
        '¡Este recuerdo es más épico que mi batalla contra el capitán Kuro!',
        '¡Guardar esto es como tener a los Usopp Pirates siempre conmigo!',
        '¡Este momento es más valiente que cualquier aventura en Little Garden!',
        '¡Nakama! ¡Este recuerdo es más fuerte que mis balas de pega!',
        '¡Yassop estaría orgulloso de guardar este momento!',
        '¡Este recuerdo tiene más impacto que mi Kabuto!',
        '¡Guardar esto es como ser el valiente guerrero del mar que siempre soñé ser!'
    ]},
    { name: 'Sanji', avatar: 'sanji.png', phrases: [
        '¡Un recuerdo con sabor a aventura digno de All Blue!',
        '¡Mellorine! ¡Qué memoria tan hermosa como Nami-swan!',
        '¡Esto merece un banquete de celebración en el Baratie!',
        'Este recuerdo tiene el sabor perfecto de un día en Grand Line',
        'Guardar esto es como tener un pedazo de la cocina de Zeff',
        '¡Nakama! ¡Este momento es más dulce que cualquier postre!',
        'Este recuerdo tiene más sabor que mis mejores recetas',
        '¡Robin-chan! ¡Este momento es tan elegante como un té de té!',
        'Guardar esto es como tener a los chicos del Baratie siempre',
        '¡Este recuerdo tiene más calor que mis patadas Diable Jambe!'
    ]},
    { name: 'Chopper', avatar: 'chopper.png', phrases: [
        '¡Woooow! ¡Qué recuerdo tan lindo como los regalos de Hiluluk!',
        '¡Doctora Kureha! ¡Digo... qué memoria tan genial de nuestra aventura!',
        '¡Esto me hace tan feliz como cuando los habitantes de Drum me aceptaron!',
        '¡Este recuerdo es más precioso que cualquier medicina de Drum!',
        '¡Nakama! ¡Guardar esto es como tener a Luffy siempre cuidándome!',
        '¡Este momento es tan especial como cuando me uní a los Piratas de Paja!',
        '¡Qué recuerdo tan curativo como mis dulces Rumble Balls!',
        '¡Guardar esto es como tener un pedazo de hogar en el Thousand Sunny!',
        '¡Este recuerdo tiene más valor que cualquier libro médico!',
        '¡Nami! ¡Este momento es más importante que cualquier mapa del cielo!'
    ]},
    { name: 'Robin', avatar: 'robin.png', phrases: [
        'Qué memoria tan preciosa para preservar, como los Poneglyphs de Ohara',
        'La historia de esta aventura es fascinante como los secretos del Void Century',
        'Un momento que trasciende el tiempo como los antiguos textos',
        'Guardar esto es como proteger el conocimiento de mi pueblo natal',
        'Este recuerdo tiene el peso de siglos de historia nakama',
        'Como los Poneglyphs, este momento cuenta una historia invaluable',
        'Este recuerdo es tan importante como encontrar la verdadera historia',
        'Guardar esto es como preservar el legado de los Ohara Scholars',
        'Un momento que merece ser leído por las generaciones futuras',
        'Este recuerdo tiene la sabiduría de todos nuestros viajes'
    ]},
    { name: 'Franky', avatar: 'franky.png', phrases: [
        '¡SÚPER recuerdo digno de un cyborg de Water 7!',
        '¡Esta memoria es SÚPER genial como mi Franky Shogun!',
        '¡OW! ¡Qué momento tan SÚPER en nuestro Thousand Sunny!',
        '¡Guardar esto es como tener mi taller en el Sunny siempre!',
        '¡Este recuerdo tiene más fuerza que mis brazos de acero!',
        '¡Nakama! ¡Este momento es más épico que construir el Going Merry!',
        '¡Este recuerdo es tan COOL como mi música de fondo!',
        '¡Guardar esto es como tener a Iceburg orgulloso de mí!',
        '¡Qué momento tan SÚPER como cuando construí el Thousand Sunny!',
        '¡Este recuerdo tiene más potencia que mis Coup de Vent!'
    ]},
    { name: 'Brook', avatar: 'brook.png', phrases: [
        'Yohohoho, qué momento tan emotivo como cuando toqué Binks\' Sake',
        '¡Aunque no tengo ojos, puedo ver lo hermoso de este recuerdo, Laboon!',
        '¡Esta memoria toca mi alma! ¡Ah, pero si no tengo! Yohohoho!',
        '¡Guardar esto es como tener a Laboon esperándome siempre!',
        '¡Este recuerdo tiene más melodía que cualquier canción de Rumbar!',
        '¡Nakama! ¡Este momento es más dulce que el té de té!',
        '¡Qué momento tan conmovedor como cuando volví a ver a Laboon!',
        '¡Este recuerdo tiene más alma que mi música de fondo!',
        '¡Guardar esto es como tener a los Rumbar Pirates siempre conmigo!',
        '¡Yohohoho! ¡Este recuerdo es tan hermoso que hasta los muertos llorarían!'
    ]}];

// Estado de la aplicación
let memories = [];
let currentMemory = null;
let isAuthenticated = false;
let isLoading = false;

// Emojis temáticos de One Piece
const onepiece_emojis = [
    { icon: '⚓', name: 'Ancla', description: '¡Anclado en mi memoria!' },
    { icon: '🏴‍☠️', name: 'Pirata', description: '¡Aventura pirata!' },
    { icon: '🍖', name: 'Carne', description: '¡Como Luffy!' },
    { icon: '👒', name: 'Sombrero', description: '¡Rey de los Piratas!' },
    { icon: '⚔️', name: 'Espadas', description: '¡Como Zoro!' },
    { icon: '💰', name: 'Tesoro', description: '¡Un tesoro de recuerdo!' }
];


// Inicializar la app
function initApp() {
    loadMemories();
    updateStats();
    updateGallery();
    setRandomWelcomeMessage();
    initTheme();
    
    
    initFilters();
    initTimeline();
    updateTimeline();
    
    // Configurar fecha actual por defecto
    const dateInput = document.getElementById('dateInput');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }
}




// Cargar memorias del localStorage o del archivo JSON
function loadMemories() {
    // Primero intentar cargar del archivo JSON
    fetch('./memories.json')
        .then(response => response.json())
        .then(data => {
            memories = data;
            updateGallery();
            updateStats();
        })
        .catch(error => {
            console.error('Error cargando memorias:', error);
            // Si falla, intentar cargar del localStorage como respaldo
            const stored = localStorage.getItem('nakamaMemories');
            if (stored) {
                memories = JSON.parse(stored);
            } else {
                memories = [];
            }
            updateGallery();
            updateStats();
        });
}

// Guardar memorias en localStorage
function saveMemories() {
    localStorage.setItem('nakamaMemories', JSON.stringify(memories));
}

// Variables para el cambio automático de mensajes
let galleryMessageInterval;
let currentGalleryMessageIndex = 0;

// Cambiar vista (ARREGLADO)
function showView(viewName) {
    // Ocultar todas las vistas con animación
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Mostrar vista seleccionada
    document.getElementById(viewName).classList.add('active');
    
    // Actualizar botones de navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Encontrar el botón correcto y marcarlo como activo
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        const buttonText = btn.textContent.toLowerCase();
        if ((viewName === 'home' && buttonText.includes('inicio')) || 
            (viewName === 'gallery' && buttonText.includes('galería')) ||
            (viewName === 'timeline' && buttonText.includes('línea')) ||
            (viewName === 'animeEvents' && buttonText.includes('anime'))) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar mensaje del personaje según la vista
    if (viewName === 'gallery') {
        setRandomGalleryMessage();
        startGalleryMessages();
        showGalleryInfo();
    } else if (viewName === 'stats') {
        updateStatsMessage();
        stopGalleryMessages();
    } else if (viewName === 'timeline') {
        // Actualizar la línea de tiempo
        updateTimeline();
        stopGalleryMessages();
    } else {
        stopGalleryMessages();
    }
}

// Establecer mensaje aleatorio de bienvenida (actualizado con Luffy)
function setRandomWelcomeMessage() {
    const welcomeMessages = [
        '¡Yosh! ¡Bienvenido a nuestro libro de aventuras! ¡Aquí guardamos algunos de nuestros increíbles recuerdos juntos!',
        '¡Oi! ¡Es hora de navegar por nuestras memorias más preciadas!',
        '¡Prepárate para una aventura a través del tiempo y los recuerdos!'
    ];
    
    const welcomeElement = document.getElementById('welcomeMessage');
    if (welcomeElement) {
        welcomeElement.textContent = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    }
    
    // Actualizar también el avatar del mensaje de bienvenida para usar siempre Luffy
    const welcomeAvatar = document.querySelector('#home .character-guide .character-avatar');
    if (welcomeAvatar) {
        welcomeAvatar.outerHTML = '<img src="luffy.png" alt="Luffy" class="char-avatar-img">';
    }
}

// Establecer mensaje aleatorio en galería (con transiciones suaves)
function setRandomGalleryMessage() {
 const character = characters[Math.floor(Math.random() * characters.length)];
 const avatarElement = document.getElementById('galleryCharAvatar');
 const messageElement = document.getElementById('galleryCharMessage');
 
 if (avatarElement && messageElement) {
     // Limpiar cualquier contenido previo
     avatarElement.innerHTML = '';
     
     // Fade out effect
     avatarElement.style.transition = 'opacity 0.3s ease';
     avatarElement.style.opacity = '0';
     
     // Update content after fade out
     setTimeout(() => {
         const img = document.createElement('img');
         img.src = character.avatar;
         img.alt = character.name;
         img.className = 'char-avatar-img';
         img.style.opacity = '0';
         
         // Esperar a que la imagen se cargue antes de mostrarla
         img.onload = function() {
             avatarElement.appendChild(img);
             setTimeout(() => {
                 img.style.transition = 'opacity 0.3s ease';
                 img.style.opacity = '1';
             }, 50);
         };
         
         // Fallback si la imagen no carga
         img.onerror = function() {
             avatarElement.innerHTML = `<span style="font-size: 30px;">${getCharacterEmoji(character.name)}</span>`;
             avatarElement.style.opacity = '1';
         };
         
         avatarElement.style.opacity = '1';
     }, 300);
     
     // Actualizar el mensaje con una frase aleatoria del personaje
     messageElement.style.transition = 'opacity 0.3s ease';
     messageElement.style.opacity = '0';
     
     setTimeout(() => {
         messageElement.textContent = character.phrases[Math.floor(Math.random() * character.phrases.length)];
         messageElement.style.opacity = '1';
     }, 300);
 }
}

// Actualizar mensaje de estadísticas
function updateStatsMessage() {
    const messages = [
        '¡Cada memoria añadida es un tesoro más en nuestro cofre de recuerdos!',
        '¡Nuestra aventura crece con cada recuerdo que guardamos!',
        '¡El One Piece de los recuerdos está al alcance de nuestra mano!'
    ];
    document.getElementById('statsMessage').textContent = messages[Math.floor(Math.random() * messages.length)];
}

// Manejar selección de archivo
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        // Mostrar indicador de carga
        isLoading = true;
        document.querySelector('.file-input-label').innerHTML = `
            <div class="loading-container">
                <div class="loading"></div>
                <div class="loading-text">Procesando ${file.type.startsWith('video') ? 'video' : 'imagen'}...</div>
            </div>
        `;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            currentMemory = {
                file: e.target.result,
                type: file.type.startsWith('video') ? 'video' : 'image',
                isGoogleDrive: false
            };
            
            // Ocultar indicador de carga
            isLoading = false;
            document.querySelector('.file-input-label').textContent = file.name;
        };
        
        reader.onerror = function() {
            isLoading = false;
            document.querySelector('.file-input-label').textContent = 'Seleccionar archivo';
            alert('Error al procesar el archivo. Inténtalo de nuevo.');
        };
        
        reader.readAsDataURL(file);
    }
}



// Abrir modal de detalle con animaciones mejoradas
function openDetailModal(id) {
    const memoryIndex = getMemoryIndexById(id);
    const memory = memories[memoryIndex];
    if (!memory) return;
    
    // Aplicar filtro si existe
    const filterClass = memory.filter || '';
    
    // Calcular número de día automáticamente
    const dayNumber = calculateDayNumber(memory.date);
    
    let mediaHtml = '';
    if (memory.isGoogleDrive) {
        if (memory.type === 'video') {
            mediaHtml = `<iframe src="https://drive.google.com/file/d/${memory.fileId}/preview" width="100%" height="300" allow="autoplay" frameborder="0"></iframe>`;
        } else {
            const imageUrl = `https://lh3.googleusercontent.com/d/${memory.fileId}=s0`;
            const fallbackUrl = `https://lh3.googleusercontent.com/d/${memory.fileId}=w1024`;
            mediaHtml = `<img src="${imageUrl}" alt="${memory.title}" class="detail-image ${filterClass}" onerror="this.onerror=null; this.src='${fallbackUrl}';">`;            
        }
    } else if (memory.type === 'video') {
        mediaHtml = `<video src="${memory.file}" class="detail-image ${filterClass}" controls autoplay></video>`;
    } else {
        mediaHtml = `<img src="${memory.file}" alt="${memory.title}" class="detail-image ${filterClass}">`;
    }
    
    const sourceIndicator = memory.isGoogleDrive ? `<div style="text-align: center; margin-top: 5px; font-size: 0.8em; color: #64748b;">☁️ Alojado en Google Drive</div>` : '';
    
    // Obtener comentario aleatorio
    const characterComment = getRandomCharacterComment();
    
    // CORREGIDO: Determinar si mostrar flechas con lógica correcta
    const hasPrev = memoryIndex > 0; // Anterior si no es la primera
    const hasNext = memoryIndex < memories.length - 1; // Siguiente si no es la última
    
    // Preparar reacciones con emojis
    if (!memory.reactions) {
        memory.reactions = {};
    }
    
    // Añadir selector de filtros
    const filterSelectorHtml = `
        <div class="filter-selector-container">
            <h3>Filtros de imagen</h3>
            <div id="filterSelector" class="filter-selector"></div>
        </div>
    `;
    
    let reactionsHtml = '<div class="emoji-reactions">';
    onepiece_emojis.forEach(emoji => {
        const count = memory.reactions[emoji.icon] || 0;
        const activeClass = count > 0 ? 'active' : '';
        reactionsHtml += `
            <div class="emoji-reaction ${activeClass}" onclick="addReaction('${id}', '${emoji.icon}')" title="${emoji.description}">
                <div class="emoji-icon">${emoji.icon}</div>
                <div class="emoji-count">${count}</div>
            </div>
        `;
    });
    reactionsHtml += '</div>';
    
    const detailHtml = `
        <div class="nav-arrows">
            <button class="nav-arrow" onclick="navigateMemory('prev')" ${!hasPrev ? 'disabled' : ''} title="Anterior">‹</button>
            <button class="nav-arrow" onclick="navigateMemory('next')" ${!hasNext ? 'disabled' : ''} title="Siguiente">›</button>
        </div>
        
        <h2 class="detail-title">${memory.title}</h2>
        <p class="detail-date">Día ${dayNumber} - ${new Date(memory.date).toLocaleDateString()}</p>
        
        <div class="image-container">
            ${mediaHtml}
        </div>
        
        ${sourceIndicator}
        
        <!-- Selector de filtros -->
        ${filterSelectorHtml}
        
        <p class="detail-description">${memory.description || 'Sin descripción disponible'}</p>
        
        <!-- Comentario de personaje -->
        <div style="margin-top: 20px; padding: 15px; background: var(--parchment); border-radius: 10px; border: 2px dashed var(--gold); display: flex; align-items: center; gap: 10px;">
            <img src="${characterComment.avatar}" alt="${characterComment.character}" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--gold);">
            <div>
                <strong style="color: var(--wood); font-size: 0.9em;">${characterComment.character} dice:</strong>
                <p style="color: var(--wood); margin: 0; font-size: 0.9em; line-height: 1.4;">${characterComment.comment}</p>
            </div>
        </div>
        
        <!-- Reacciones con emojis -->
        ${reactionsHtml}
    `;
    
    // Ocultar el modal actual con animación
    const detailModal = document.getElementById('detailModal');
    const detailContent = document.getElementById('detailContent');
    
    if (detailModal.classList.contains('active')) {
        // Si ya está abierto, animar la transición
        detailContent.classList.add('animate-fadeOut');
        
        setTimeout(() => {
            // Actualizar contenido
            detailContent.innerHTML = detailHtml;
            detailModal.setAttribute('data-current-id', id);
            
            // Animar entrada del nuevo contenido
            detailContent.classList.remove('animate-fadeOut');
            detailContent.classList.add('animate-fadeIn');
            
            // Inicializar selector de filtros
            updateFilterUI(filterClass);
            
            setTimeout(() => {
                detailContent.classList.remove('animate-fadeIn');
            }, 500);
        }, 300);
    } else {
        // Si está cerrado, abrir con animación
        detailContent.innerHTML = detailHtml;
        detailModal.setAttribute('data-current-id', id);
        detailModal.classList.add('active');
        detailModal.classList.add('animate-scaleIn');
        
        // Inicializar selector de filtros
        updateFilterUI(filterClass);
        
        setTimeout(() => {
            detailModal.classList.remove('animate-scaleIn');
        }, 500);
    }
}
// Función para obtener un emoji aleatorio de personaje
function getCharacterEmoji(character) {
    const emojis = ['🏴‍☠️', '⚓', '⚔️', '👒', '🍖', '💰', '🏝️', '🌊', '🔥', '⚡', '🌟', '💎'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Función para iniciar mensajes automáticos en galería
function startGalleryMessages() {
    if (galleryMessageInterval) {
        clearInterval(galleryMessageInterval);
    }
    
    galleryMessageInterval = setInterval(() => {
        setRandomGalleryMessage();
    }, 5000);
}

// Función para detener mensajes automáticos en galería
function stopGalleryMessages() {
    if (galleryMessageInterval) {
        clearInterval(galleryMessageInterval);
        galleryMessageInterval = null;
    }
}

// Función para obtener índice de memoria por ID
function getMemoryIndexById(id) {
    return memories.findIndex(m => m.id === id);
}

// Función para añadir o quitar reacción con emoji
function addReaction(memoryId, emoji) {
    const memoryIndex = getMemoryIndexById(memoryId);
    if (memoryIndex === -1) return;
    
    const memory = memories[memoryIndex];
    
    // Inicializar objeto de reacciones si no existe
    if (!memory.reactions) {
        memory.reactions = {};
    }
    
    // Verificar si ya se ha dado esta reacción
    if (memory.reactions[emoji] && memory.reactions[emoji] > 0) {
        // Ya existe esta reacción, quitarla
        delete memory.reactions[emoji];
    } else {
        // Establecer contador a 1 (solo una reacción por emoji)
        memory.reactions[emoji] = 1;
    }
    
    // Guardar cambios
    saveMemories();
    
    // Actualizar UI sin recargar el modal completo
    updateReactionsUI(memoryId);
}

// Función para actualizar solo la UI de reacciones sin recargar todo el modal
function updateReactionsUI(memoryId) {
    const memory = memories.find(m => m.id === memoryId);
    if (!memory) return;
    
    // Obtener el contenedor de reacciones
    const reactionsContainer = document.querySelector('.emoji-reactions');
    if (!reactionsContainer) return;
    
    // Actualizar el HTML de las reacciones
    let reactionsHtml = '';
    onepiece_emojis.forEach(emoji => {
        const count = memory.reactions[emoji.icon] || 0;
        const activeClass = count > 0 ? 'active' : '';
        reactionsHtml += `
            <div class="emoji-reaction ${activeClass}" onclick="addReaction('${memory.id}', '${emoji.icon}')" title="${emoji.description}">
                <div class="emoji-icon">${emoji.icon}</div>
                <div class="emoji-count">${count}</div>
            </div>
        `;
    });
    
    // Actualizar el contenido
    reactionsContainer.innerHTML = reactionsHtml;
}

// Función para navegar entre memorias (CORREGIDA)
function navigateMemory(direction) {
    const currentId = document.getElementById('detailModal').getAttribute('data-current-id');
    const currentIndex = getMemoryIndexById(currentId);
    
    let newIndex;
    if (direction === 'prev') {
        newIndex = currentIndex - 1; // Ahora prev va a la memoria anterior (índice menor)
    } else {
        newIndex = currentIndex + 1; // Ahora next va a la memoria siguiente (índice mayor)
    }
    
    if (newIndex >= 0 && newIndex < memories.length) {
        openDetailModal(memories[newIndex].id);
    }
}

// Cerrar modal de detalle
function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('active');
}


// Mostrar reacción del personaje
function showCharacterReaction(message, avatarPath) {  // Modificado para recibir path en lugar de emoji
    const reaction = document.createElement('div');
    reaction.className = 'character-guide';
    reaction.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 300; animation: fadeIn 0.5s;';
    reaction.innerHTML = `
        <img src="${avatarPath}" alt="Character" class="char-avatar-img">
        <span class="character-message">${message}</span>
    `;
    document.body.appendChild(reaction);
    
    setTimeout(() => {
        reaction.remove();
    }, 3000);
}

// Actualizar galería (ARREGLADO)
function updateGallery() {
    const container = document.getElementById('memoriesContainer');
    container.innerHTML = '';
    
    if (memories.length === 0) {
        document.getElementById('emptyState').style.display = 'block';
        return;
    }
    
    document.getElementById('emptyState').style.display = 'none';
    
    memories.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card animate-fadeInUp';
        card.onclick = () => openDetailModal(memory.id);
        // Agregar retraso en la animación basado en el índice
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Forzar animación en dispositivos móviles
        card.style.animationDuration = '0.5s';
        card.style.animationFillMode = 'both';
        
        // Aplicar filtro si existe
        const filterClass = memory.filter || '';
        
        // Calcular número de día automáticamente
        const dayNumber = calculateDayNumber(memory.date);
        
        let thumbnailHtml = '';
        if (memory.isGoogleDrive) {
            thumbnailHtml = `<img src="${memory.thumbnail}" class="memory-thumbnail ${filterClass}" alt="Thumbnail" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn5KYPC90ZXh0Pjwvc3ZnPg==';">`;
        } else {
            thumbnailHtml = memory.type === 'video' ? 
                `<video src="${memory.thumbnail || memory.file}" class="memory-thumbnail ${filterClass}" muted></video>` :
                `<img src="${memory.thumbnail || memory.file}" class="memory-thumbnail ${filterClass}" alt="Thumbnail">`;
        }
        
        // Mostrar contador de reacciones si hay alguna
        let reactionsCount = 0;
        let reactionsHtml = '';
        
        if (memory.reactions) {
            Object.values(memory.reactions).forEach(count => {
                reactionsCount += count;
            });
            
            if (reactionsCount > 0) {
                reactionsHtml = `<div class="reaction-count">❤️ ${reactionsCount}</div>`;
            }
        }
        
        card.innerHTML = `
            ${thumbnailHtml}
            <div class="memory-title">${memory.title}</div>
            <div class="memory-date">Día ${dayNumber}</div>
            ${reactionsHtml}
        `;
        container.appendChild(card);
    });
    
}


// Función para calcular el día automáticamente basado en la fecha
function calculateDayNumber(date) {
    const initialDate = new Date('2023-07-17');
    const memoryDate = new Date(date);
    const timeDiff = memoryDate - initialDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return Math.max(1, daysDiff + 1);
}

// Actualizar función updateStats para calcular desde el 17 de julio de 2023
function updateStats() {
    // Calcular estadísticas básicas
    const totalMemories = memories.length;
    const totalVideos = memories.filter(m => m.type === 'video').length;
    
    // Calcular días de aventura desde el 17 de julio de 2023
    const startDate = new Date('2023-07-17');
    const today = new Date();
    const daysOfAdventure = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Actualizar elementos del DOM
    document.getElementById('totalMemories').textContent = totalMemories;
    document.getElementById('totalVideos').textContent = totalVideos;
    document.getElementById('daysOfAdventure').textContent = daysOfAdventure;
}

// Manejar envío del formulario (ARREGLADO)
const memoryForm = document.getElementById('memoryForm');
if (memoryForm) {
    memoryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!isCreatorMode) return;
    
    if (!currentMemory) {
        alert('Por favor selecciona una foto o video, o proporciona un enlace de Google Drive');
        return;
    }
    
    const title = document.getElementById('titleInput').value;
    const date = document.getElementById('dateInput').value;
    const description = document.getElementById('descriptionInput').value;
    
    // El número de día se calculará automáticamente basado en la fecha
    
    // Crear nueva memoria
    const newMemory = {
        id: Date.now().toString(),
        title: title,
        date: date,
        // dayNumber se calcula dinámicamente
        description: description,
        file: currentMemory.file,
        type: currentMemory.type,
        isGoogleDrive: currentMemory.isGoogleDrive || false,
        character: characters[Math.floor(Math.random() * characters.length)].name,
        createdAt: new Date().toISOString(),
        reactions: {} // Inicializar objeto de reacciones vacío
    };
    
    // Agregar campos específicos para Google Drive
    if (currentMemory.isGoogleDrive) {
        newMemory.thumbnail = currentMemory.thumbnail;
        newMemory.fileId = currentMemory.fileId;
    }
    
    // Agregar a memorias
    memories.unshift(newMemory);
    saveMemories();
    
    // Actualizar UI
    updateGallery();
    updateStats();
    closeAddModal();
    
    // Mostrar mensaje de éxito con personaje aleatorio
    const character = characters[Math.floor(Math.random() * characters.length)];
    showCharacterReaction(character.phrases[Math.floor(Math.random() * character.phrases.length)], character.avatar);
});

// Cerrar modales al hacer clic fuera
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Registrar el Service Worker (ya se maneja en el DOMContentLoaded modificado)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            // Service Worker registrado con éxito
        })
        .catch(function(error) {
            console.error('Error al registrar el Service Worker:', error);
        });
    }

// Prevenir zoom en iOS
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Agregar navegación con teclado
document.addEventListener('keydown', function(e) {
    if (document.getElementById('detailModal').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            navigateMemory('prev');
        } else if (e.key === 'ArrowRight') {
            navigateMemory('next');
        } else if (e.key === 'Escape') {
            closeDetailModal();
        }
    }
});
}

// Función para inicializar animaciones
function initAnimations() {
    // Agregar event listeners para animaciones hover en dispositivos táctiles
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-hover');
        });
        
        card.addEventListener('touchend', function() {
            this.classList.remove('touch-hover');
        });
    });
}

// Función para soporte táctil
function initTouchSupport() {
    // Agregar clase CSS para dispositivos táctiles
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
}



// Funciones para el modo oscuro/claro
function initTheme() {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerHTML = '☀️ Modo';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('themeToggle').innerHTML = '🌙 Modo';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // Agregar clase de transición
    document.documentElement.classList.add('theme-transition');
    
    // Pequeña pausa antes de cambiar el tema para que la animación sea más suave
    setTimeout(() => {
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '🌙 Modo';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '☀️ Modo';
        }
    }, 300);
    
    // Eliminar la clase después de la animación completa
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 1500);
}

// Inicializar filtros de imágenes
function initFilters() {
    const filters = [
        { name: 'Original', class: '' },
        { name: 'Manga', class: 'filter-manga' },
        { name: 'Wanted', class: 'filter-wanted' },
        { name: 'Sunny', class: 'filter-sunny' },
        { name: 'Merry', class: 'filter-merry' },
        { name: 'Grand Line', class: 'filter-grandline' },
        { name: 'Gear 5', class: 'filter-gear5' },
        { name: 'Haki', class: 'filter-haki' },
        { name: 'Poneglyph', class: 'filter-poneglyph' },
        { name: 'Devil Fruit', class: 'filter-devilfruit' },
        { name: 'Skypiea', class: 'filter-skypiea' }
    ];
    
    // Guardar los filtros en una variable global para usarlos más tarde
    window.imageFilters = filters;
}

// Aplicar filtro a la imagen actual
function applyFilter(filterClass) {
    const detailModal = document.getElementById('detailModal');
    const memoryId = detailModal.getAttribute('data-current-id');
    const memoryIndex = getMemoryIndexById(memoryId);
    const memory = memories[memoryIndex];
    
    if (!memory) return;
    
    // Guardar el filtro seleccionado en la memoria
    memory.filter = filterClass;
    saveMemories();
    
    // Aplicar el filtro a la imagen o video
    const mediaElement = document.querySelector('.detail-image');
    if (mediaElement) {
        // Eliminar todas las clases de filtro anteriores
        window.imageFilters.forEach(filter => {
            if (filter.class) mediaElement.classList.remove(filter.class);
        });
        
        // Añadir la nueva clase de filtro si no es 'Original'
        if (filterClass) {
            mediaElement.classList.add(filterClass);
        }
    }
    
    // Actualizar la UI para mostrar el filtro seleccionado
    updateFilterUI(filterClass);
}

// Actualizar la UI de los filtros
function updateFilterUI(activeFilterClass) {
    const filterSelector = document.getElementById('filterSelector');
    if (!filterSelector) return;
    
    // Limpiar el selector de filtros
    filterSelector.innerHTML = '';
    
    // Añadir cada opción de filtro
    window.imageFilters.forEach(filter => {
        const filterOption = document.createElement('div');
        filterOption.className = `filter-option ${filter.class === activeFilterClass ? 'active' : ''}`;
        filterOption.onclick = () => applyFilter(filter.class);
        
        // Usar una imagen de ejemplo para mostrar el filtro
        filterOption.style.backgroundImage = 'url("luffy.png")';
        
        // Añadir la clase de filtro al contenedor
        if (filter.class) {
            filterOption.classList.add(filter.class);
        }
        
        // Añadir el nombre del filtro
        const filterName = document.createElement('div');
        filterName.className = 'filter-name';
        filterName.textContent = filter.name;
        
        // Añadir al selector
        filterSelector.appendChild(filterOption);
        filterSelector.appendChild(filterName);
    });
}










// Listener global para errores
window.addEventListener('error', function(e) {
    console.error('Error:', e.message);
});







// Inicializar línea de tiempo
function initTimeline() {
    // La línea de tiempo se actualizará cuando se carguen las memorias
    document.getElementById('timeline').addEventListener('click', function(e) {
        // Si se hace clic en un evento de la línea de tiempo, mostrar las memorias de esa fecha
        if (e.target.closest('.timeline-event')) {
            const eventElement = e.target.closest('.timeline-event');
            const date = eventElement.getAttribute('data-date');
            
            // Marcar el evento como activo
            document.querySelectorAll('.timeline-event').forEach(event => {
                event.classList.remove('active');
            });
            eventElement.classList.add('active');
            
            // Filtrar memorias por fecha
            filterMemoriesByDate(date);
        }
    });
}

// Actualizar línea de tiempo - Optimizada para móviles con temática One Piece
function updateTimeline() {
    const timelineEvents = document.getElementById('timelineEvents');
    if (!timelineEvents) return;
    
    // Limpiar eventos existentes
    timelineEvents.innerHTML = '';
    
    // Obtener fechas únicas de las memorias
    const uniqueDates = [];
    memories.forEach(memory => {
        const date = memory.date.split('T')[0]; // Obtener solo la parte de la fecha
        if (!uniqueDates.includes(date)) {
            uniqueDates.push(date);
        }
    });
    
    // Ordenar fechas
    uniqueDates.sort();
    
    // Crear eventos para cada fecha
    uniqueDates.forEach((date, index) => {
        // Encontrar la primera memoria de esta fecha para usar como miniatura
        const firstMemory = memories.find(memory => memory.date.startsWith(date));
        if (!firstMemory) return;
        
        // Crear elemento de evento
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.setAttribute('data-date', date);
        eventElement.setAttribute('data-index', index);
        
        // Crear miniatura con lazy loading
        let thumbnailSrc = '';
        if (firstMemory.isGoogleDrive) {
            thumbnailSrc = firstMemory.thumbnail || `https://drive.google.com/thumbnail?id=${firstMemory.fileId}&sz=w80`;
        } else {
            thumbnailSrc = firstMemory.thumbnail || firstMemory.file;
        }
        
        // Formatear fecha para mostrar
        const displayDate = new Date(date).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short'
        });
        
        // Añadir contenido al evento con temática One Piece
        eventElement.innerHTML = `
            <div class="timeline-dot" aria-label="Punto de navegación"></div>
            <img src="${thumbnailSrc}" alt="${displayDate} - ${firstMemory.title}" class="timeline-thumbnail" loading="lazy">
            <div class="timeline-date">${displayDate}</div>
            <div class="timeline-bounty" style="display: none;">💰 ${(index + 1) * 1000000}</div>
        `;
        
        // Función de manejo de eventos con efectos One Piece
        const handleTimelineEvent = (event) => {
            event.preventDefault();
            
            // Remover clase activa de otros eventos
            document.querySelectorAll('.timeline-event').forEach(e => {
                e.classList.remove('active');
                e.querySelector('.timeline-bounty').style.display = 'none';
            });
            
            // Agregar clase activa y mostrar "recompensa"
            eventElement.classList.add('active');
            const bounty = eventElement.querySelector('.timeline-bounty');
            bounty.style.display = 'block';
            
            // Efecto de descubrimiento de tesoro
            setTimeout(() => {
                createTreasureEffect(eventElement);
            }, 100);
            
            // Actualizar fecha actual y galería
            currentDate = date;
            updateGallery();
            updateFilterUI();
            
            // Centrar el evento activo en móviles
            if (window.innerWidth <= 768) {
                const container = document.querySelector('.timeline-container');
                const eventRect = eventElement.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const scrollLeft = eventRect.left - containerRect.left - (containerRect.width / 2) + (eventRect.width / 2);
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
            
            // Vibración en dispositivos móviles
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        };
        
        // Eventos de interacción
        eventElement.addEventListener('click', handleTimelineEvent);
        eventElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleTimelineEvent(e);
            }
        });
        
        // Eventos táctiles mejorados
        let touchStartTime = 0;
        eventElement.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            eventElement.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        eventElement.addEventListener('touchend', (e) => {
            const touchDuration = Date.now() - touchStartTime;
            if (touchDuration < 500) {
                handleTimelineEvent(e);
            }
            eventElement.style.transform = '';
        });
        
        // Añadir indicador de progreso
        if (index === 0) {
            eventElement.setAttribute('aria-label', `Comienzo del viaje - ${displayDate}`);
        } else if (index === uniqueDates.length - 1) {
            eventElement.setAttribute('aria-label', `Última aventura - ${displayDate}`);
        }
        
        timelineEvents.appendChild(eventElement);
    });
    
    // Inicializar gestos táctiles
    initializeTimelineGestures();
}

// Crear efecto de tesoro One Piece
function createTreasureEffect(element) {
    const effects = ['💎', '⚓', '🏴‍☠️', '💰', '⭐', '🌊'];
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = effects[i % effects.length];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '18px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.animation = 'treasureSparkle 1.5s ease-out forwards';
            element.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1500);
        }, i * 100);
    }
}

// Inicializar gestos mejorados para móviles
function initializeTimelineGestures() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let timestamp = 0;
    let lastX = 0;
    
    // Configurar cursor
    container.style.cursor = 'grab';
    container.style.userSelect = 'none';
    
    // Gestos de ratón
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        timestamp = Date.now();
        lastX = startX;
        velocity = 0;
    });
    
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
        
        // Inercia suave
        if (Math.abs(velocity) > 2) {
            container.scrollLeft += velocity * 10;
        }
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        
        // Calcular velocidad para inercia
        const now = Date.now();
        const dt = now - timestamp;
        const dx = x - lastX;
        velocity = dx / dt * 100;
        
        container.scrollLeft = scrollLeft - walk;
        
        timestamp = now;
        lastX = x;
    });
    
    // Gestos táctiles mejorados
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        timestamp = Date.now();
        lastX = startX;
    });
    
    container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
    });
    
    // Detección de swipe rápido
    container.addEventListener('touchend', (e) => {
        const now = Date.now();
        const dt = now - timestamp;
        const dx = (e.changedTouches[0].pageX - container.offsetLeft) - lastX;
        velocity = dx / dt * 100;
        
        if (Math.abs(velocity) > 5) {
            container.scrollLeft += velocity * 5;
        }
    });
}

// Filtrar memorias por fecha
function filterMemoriesByDate(date) {
    const container = document.getElementById('timelineMemoriesContainer');
    if (!container) return;
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Filtrar memorias por fecha
    const filteredMemories = memories.filter(memory => memory.date.startsWith(date));
    
    // Mostrar memorias filtradas
    filteredMemories.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card animate-slideInUp';
        card.onclick = () => openDetailModal(memory.id);
        // Agregar retraso en la animación basado en el índice
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Calcular número de día automáticamente
        const dayNumber = calculateDayNumber(memory.date);
        
        let thumbnailHtml = '';
        if (memory.isGoogleDrive) {
            thumbnailHtml = `<img src="${memory.thumbnail}" class="memory-thumbnail ${memory.filter || ''}" alt="Thumbnail" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn5KYPC90ZXh0Pjwvc3ZnPg==';">`;
        } else {
            thumbnailHtml = memory.type === 'video' ? 
                `<video src="${memory.thumbnail || memory.file}" class="memory-thumbnail ${memory.filter || ''}" muted></video>` :
                `<img src="${memory.thumbnail || memory.file}" class="memory-thumbnail ${memory.filter || ''}" alt="Thumbnail">`;
        }
        
        // Mostrar contador de reacciones si hay alguna
        let reactionsCount = 0;
        let reactionsHtml = '';
        
        if (memory.reactions) {
            Object.values(memory.reactions).forEach(count => {
                reactionsCount += count;
            });
            
            if (reactionsCount > 0) {
                reactionsHtml = `<div class="reaction-count">❤️ ${reactionsCount}</div>`;
            }
        }
        
        card.innerHTML = `
            ${thumbnailHtml}
            <div class="memory-title">${memory.title}</div>
            <div class="memory-date">Día ${dayNumber}</div>
            ${reactionsHtml}
        `;
        container.appendChild(card);
    });
    
    // Si no hay memorias, mostrar mensaje
    if (filteredMemories.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-message">No hay memorias para esta fecha</div>
            </div>
        `;
    }
}

function showGalleryInfo() {
  if (localStorage.getItem('galleryInfoShown')) {
    return;
  }
  const modal = document.getElementById('galleryInfoModal');
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
}

function closeGalleryInfo() {
  document.getElementById('galleryInfoModal').style.display = 'none';
  localStorage.setItem('galleryInfoShown', 'true');
}
