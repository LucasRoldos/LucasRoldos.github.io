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
        '¡Esta aventura fue tan épica como encontrar el One Piece!',
        '¡Shishishi! Qué día tan divertido tuvimos!',
        '¡Esta memoria me hace querer gritar "¡Soy yo, Luffy!"!',
        '¡Wooo! ¡Qué aventura tan increíble!',
        '¡Esta foto captura la esencia de nuestra tripulación!'
    ],
    'Zoro': [
        'Un momento digno de recordar, como mi sueño de ser el mejor espadachín.',
        'Esta memoria tiene el filo de una buena espada.',
        'Un día que vale la pena proteger con mi vida.',
        'Incluso yo podría perderme en este recuerdo.',
        'Un momento que honra nuestra promesa como nakama.'
    ],
    'Nami': [
        '¡Este recuerdo vale más que cualquier mapa del tesoro!',
        '¡Qué día perfecto para navegar juntos!',
        'Esta memoria brilla más que mis Belly.',
        'Un momento que navegaría mil veces en mi mente.',
        '¡Qué clima perfecto para esta aventura!'
    ],
    'Usopp': [
        '¡Esta historia es tan épica como mis 8000 seguidores!',
        '¡El gran Usopp aprueba esta memoria épica!',
        '¡Incluso mis ballestas no podrían disparar un momento más perfecto!',
        '¡Esta aventura es más emocionante que cualquiera de mis historias!',
        '¡Mis nakama serían tan orgullosos de este momento!'
    ],
    'Sanji': [
        '¡Esta memoria está más dulce que cualquier postre!',
        '¡Mellorine! ¡Qué momento tan hermoso!',
        'Un día que merece un banquete de celebración.',
        'Esta memoria tiene el sabor perfecto de la aventura.',
        '¡Un momento que calienta el corazón más que mis patadas!'
    ],
    'Chopper': [
        '¡Wooo! ¡Qué recuerdo tan lindo y emocionante!',
        '¡Este momento me hace tan feliz que podría saltar!',
        '¡Una aventura digna de ser celebrada con chocolate!',
        '¡Qué día tan mágico para mis nakama!',
        '¡Esta memoria es tan dulce como las golosinas!'
    ],
    'Robin': [
        'Un momento precioso que merece ser preservado para siempre.',
        'La historia de nuestra aventura se vuelve más rica con este recuerdo.',
        'Un instante que trasciende el tiempo y el espacio.',
        'Esta memoria florece como las flores que tanto amo.',
        'Un momento que ilumina nuestra jornada como nakama.'
    ],
    'Franky': [
        '¡SÚPER! ¡Esta memoria es tan épica como mi cyborg!',
        '¡Esta aventura está más construida que mis mejores creaciones!',
        '¡OW! ¡Qué momento tan SÚPER!',
        '¡Esta memoria tiene más estilo que mis gafas!',
        '¡Un día que merece ser grabado en acero!'
    ],
    'Brook': [
        'Yohohoho, qué momento tan emotivo para mi alma.',
        '¡Aunque no tengo ojos, puedo ver lo hermoso de este recuerdo!',
        'Un instante que toca las cuerdas de mi corazón... ¡Ah, pero no tengo!',
        'Esta memoria es más dulce que cualquier canción.',
        '¡Un momento digno de ser cantado por toda la eternidad!'
    ]
};

// Characters y sus frases
const characters = [
    { name: 'Luffy', avatar: 'luffy.png', phrases: [
        '¡Esta memoria me da ganas de más aventuras!',
        '¡Qué recuerdo tan genial! ¡Vamos por más!',
        '¡Ja ja ja! ¡Esto es lo mejor!'
    ]},
    { name: 'Zoro', avatar: 'zoro.png', phrases: [
        'Un buen recuerdo para afilar la memoria',
        'No me perderé este momento',
        '¡Qué corte tan perfecto de aventura!'
    ]},
    { name: 'Nami', avatar: 'nami.png', phrases: [
        '¡Este recuerdo vale su peso en Berries!',
        'Navegando por memorias felices',
        '¡Qué clima perfecto para recordar!'
    ]},
    { name: 'Usopp', avatar: 'usopp.png', phrases: [
        '¡El gran capitán Usopp aprueba esta memoria!',
        '¡Qué historia tan épica!',
        '¡Mis 8000 seguidores estarían de acuerdo!'
    ]},
    { name: 'Sanji', avatar: 'sanji.png', phrases: [
        '¡Un recuerdo con sabor a aventura!',
        '¡Mellorine! ¡Qué memoria tan hermosa!',
        '¡Esto merece un banquete de celebración!'
    ]},
    { name: 'Chopper', avatar: 'chopper.png', phrases: [
        '¡Woooow! ¡Qué recuerdo tan lindo!',
        '¡Doctora! ¡Digo... qué memoria tan genial!',
        '¡Esto me hace muy feliz!'
    ]},
    { name: 'Robin', avatar: 'robin.png', phrases: [
        'Qué memoria tan preciosa para preservar',
        'La historia de esta aventura es fascinante',
        'Un momento que trasciende el tiempo'
    ]},
    { name: 'Franky', avatar: 'franky.png', phrases: [
        '¡SÚPER recuerdo!',
        '¡Esta memoria es SÚPER genial!',
        '¡OW! ¡Qué momento tan SÚPER!'
    ]},
    { name: 'Brook', avatar: 'brook.png', phrases: [
        'Yohohoho, qué momento tan emotivo',
        '¡Aunque no tengo ojos, puedo ver lo hermoso de este recuerdo!',
        '¡Esta memoria toca mi alma! ¡Ah, pero si no tengo! Yohohoho!'
    ]}
];

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

// Agregar función de logout (opcional)
function logout() {
    localStorage.removeItem('nakamaLoggedIn');
    location.reload(); // Recargar para mostrar login
}


// Cargar memorias del localStorage o del archivo JSON
function loadMemories() {
    console.log('Cargando memorias...');
    // Primero intentar cargar del archivo JSON
    fetch('./memories.json')
        .then(response => response.json())
        .then(data => {
            console.log('Memorias cargadas:', data.length, 'memorias');
            console.log('Memorias de Google Drive:', data.filter(m => m.isGoogleDrive).length);
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
                console.log('Memorias cargadas desde localStorage:', memories.length);
            } else {
                memories = [];
                console.log('No hay memorias disponibles');
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
    
    let mediaHtml = '';
    if (memory.isGoogleDrive) {
        if (memory.type === 'video') {
            mediaHtml = `<iframe src="https://drive.google.com/file/d/${memory.fileId}/preview" width="100%" height="300" allow="autoplay" frameborder="0"></iframe>`;
        } else {
            const imageUrl = `https://drive.google.com/uc?export=view&id=${memory.fileId}`;
            mediaHtml = `<img src="${imageUrl}" alt="${memory.title}" class="detail-image ${filterClass}" onerror="this.onerror=null; this.src='https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w800';">`;            
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
        <p class="detail-date">Día ${memory.dayNumber} - ${new Date(memory.date).toLocaleDateString()}</p>
        
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
            <div class="memory-date">Día ${memory.dayNumber}</div>
            ${reactionsHtml}
        `;
        container.appendChild(card);
    });
    
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
    
    // Calcular número de día
    const dayNumber = memories.length + 1;
    
    // Crear nueva memoria
    const newMemory = {
        id: Date.now().toString(),
        title: title,
        date: date,
        dayNumber: dayNumber,
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
            console.log('Service Worker registrado con éxito:', registration.scope);
        })
        .catch(function(error) {
            console.log('Error al registrar el Service Worker:', error);
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

// Función para forzar el inicio del modo presentación
function forceStartPresentation() {
    try {
        console.log('Iniciando modo presentación...');
        startPresentationMode();
    } catch (error) {
        console.error('Error al iniciar presentación:', error);
        alert('Hubo un problema al iniciar el modo presentación. Por favor, intenta de nuevo.');
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

// Iniciar modo presentación
function startPresentationMode() {
    console.log('Iniciando modo presentación...');
    console.log('Memorias disponibles:', memories.length);
    console.log('Memorias:', memories);
    
    if (memories.length === 0) {
        alert('No hay memorias para mostrar en modo presentación');
        return;
    }
    
    const presentationMode = document.getElementById('presentationMode');
    const presentationSlides = document.getElementById('presentationSlides');
    const presentationProgress = document.getElementById('presentationProgress');
    
    console.log('Elementos encontrados:', {
        presentationMode: !!presentationMode,
        presentationSlides: !!presentationSlides,
        presentationProgress: !!presentationProgress
    });
    
    if (!presentationMode || !presentationSlides || !presentationProgress) {
        console.error('Faltan elementos del DOM para el modo presentación');
        return;
    }
    
    // Limpiar contenedores
    presentationSlides.innerHTML = '';
    presentationProgress.innerHTML = '';
    
    console.log('Creando diapositivas...');
    
    // Crear diapositivas para cada memoria
    memories.forEach((memory, index) => {
        try {
            // Crear diapositiva
            const slide = document.createElement('div');
            slide.className = `presentation-slide ${index === 0 ? 'active' : ''}`;
            slide.setAttribute('data-index', index);
            slide.setAttribute('data-type', memory.type || 'image');
            
            // Preparar el contenido multimedia
            let mediaHtml = '';
            console.log(`Procesando memoria ${index}:`, memory);
            
            if (memory.isGoogleDrive) {
                console.log(`Google Drive memory: ${memory.title}, type: ${memory.type}, fileId: ${memory.fileId}`);
                if (memory.type === 'video') {
                    const driveUrl = `https://drive.google.com/file/d/${memory.fileId}/preview`;
                    console.log(`Video iframe URL: ${driveUrl}`);
                    mediaHtml = `<iframe src="${driveUrl}" class="presentation-video" allow="autoplay" frameborder="0"></iframe>`;
                } else {
                    const imageUrl = `https://drive.google.com/uc?export=view&id=${memory.fileId}`;
                    console.log(`Image URL: ${imageUrl}`);
                    mediaHtml = `<img src="${imageUrl}" alt="${memory.title}" class="presentation-image ${memory.filter || ''}" onerror="this.onerror=null; this.src='https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w800'; console.log('Error loading image, fallback to thumbnail');">`;
                }
            } else if (memory.type === 'video') {
                mediaHtml = `<video src="${memory.file}" class="presentation-video ${memory.filter || ''}" controls autoplay id="video-${index}"></video>`;
            } else {
                mediaHtml = `<img src="${memory.file}" alt="${memory.title}" class="presentation-image ${memory.filter || ''}">`;
            }
            
            // Añadir información de la memoria y comentario del personaje
            const characterComment = getRandomCharacterComment(memory.character || 'Luffy');
            slide.innerHTML = `
                ${mediaHtml}
                <div class="presentation-info">
                    <div class="presentation-title">${memory.title}</div>
                    <div class="presentation-description">${memory.description || 'Sin descripción disponible'}</div>
                    <div class="presentation-date">Día ${memory.dayNumber} - ${new Date(memory.date).toLocaleDateString()}</div>
                    <div class="character-comment">
                        <span class="character-avatar">${getCharacterEmoji(memory.character || 'Luffy')}</span>
                        <span class="comment-text">${characterComment}</span>
                    </div>
                </div>
            `;
            
            // Añadir diapositiva al contenedor
            presentationSlides.appendChild(slide);
            
            // Añadir indicador de progreso
            const progressDot = document.createElement('div');
            progressDot.className = `progress-dot ${index === 0 ? 'active' : ''}`;
            progressDot.setAttribute('data-index', index);
            progressDot.onclick = () => navigatePresentation('goto', index);
            presentationProgress.appendChild(progressDot);
            
            console.log(`Diapositiva ${index} creada correctamente`);
        } catch (error) {
            console.error(`Error creando diapositiva ${index}:`, error);
        }
    });
    
    // Mostrar el modo presentación
    presentationMode.style.display = 'flex';
    presentationMode.style.opacity = '0';
    
    // Forzar reflow para asegurar que el display se aplique antes de la transición
    presentationMode.offsetHeight;
    
    presentationMode.style.opacity = '1';
    
    console.log('Modo presentación mostrado, iniciando timer...');
    
    // Configurar la presentación automática
    scheduleNextSlide();
}

// Función para programar el cambio automático de diapositivas
function scheduleNextSlide() {
    console.log('Programando siguiente diapositiva...');
    
    // Limpiar cualquier intervalo existente
    if (window.presentationInterval) {
        console.log('Limpiando intervalo anterior:', window.presentationInterval);
        clearTimeout(window.presentationInterval);
    }
    
    const currentSlide = document.querySelector('.presentation-slide.active');
    if (!currentSlide) {
        console.error('No se encontró diapositiva activa');
        return;
    }
    
    const slideType = currentSlide.getAttribute('data-type');
    const slideIndex = parseInt(currentSlide.getAttribute('data-index'));
    
    console.log('Diapositiva actual:', { slideType, slideIndex });
    
    // Si es un video, esperar a que termine
    if (slideType === 'video') {
        const video = document.getElementById(`video-${slideIndex}`);
        if (video) {
            console.log('Video encontrado, configurando eventos...');
            
            // Si el video está reproduciéndose, esperar a que termine
            if (!video.ended && !video.paused) {
                console.log('Video reproduciéndose, esperando a que termine...');
                video.onended = function() {
                    console.log('Video terminado, esperando 2 segundos...');
                    window.presentationInterval = setTimeout(() => {
                        console.log('Navegando a siguiente después de video...');
                        navigatePresentation('next');
                    }, 2000);
                };
                return;
            } else {
                console.log('Video pausado o terminado, usando timer fijo');
            }
        } else {
            console.log('No se encontró elemento video, usando timer fijo');
        }
    }
    
    // Para imágenes o si el video no está disponible, usar un tiempo fijo
    console.log('Configurando timer de 5 segundos...');
    window.presentationInterval = setTimeout(() => {
        console.log('Timer expirado, navegando a siguiente...');
        navigatePresentation('next');
    }, 5000); // 5 segundos para imágenes
    
    console.log('Timer configurado:', window.presentationInterval);
}

// Navegar en el modo presentación
function navigatePresentation(direction, targetIndex) {
    console.log('Navegando presentación:', { direction, targetIndex });
    
    const slides = document.querySelectorAll('.presentation-slide');
    const dots = document.querySelectorAll('.progress-dot');
    
    console.log('Total diapositivas:', slides.length);
    
    if (slides.length === 0) {
        console.error('No hay diapositivas para navegar');
        return;
    }
    
    // Encontrar la diapositiva activa actual
    const currentSlide = document.querySelector('.presentation-slide.active');
    if (!currentSlide) {
        console.error('No se encontró diapositiva activa');
        return;
    }
    
    const currentIndex = parseInt(currentSlide.getAttribute('data-index'));
    console.log('Índice actual:', currentIndex);
    
    // Calcular el nuevo índice
    let newIndex;
    if (direction === 'goto' && targetIndex !== undefined) {
        newIndex = targetIndex;
    } else if (direction === 'prev') {
        newIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else { // 'next'
        newIndex = (currentIndex + 1) % slides.length;
    }
    
    console.log('Nuevo índice:', newIndex);
    
    // Actualizar diapositivas
    currentSlide.classList.remove('active');
    slides[newIndex].classList.add('active');
    
    // Actualizar indicadores de progreso
    const currentDot = document.querySelector('.progress-dot.active');
    if (currentDot) currentDot.classList.remove('active');
    dots[newIndex].classList.add('active');
    
    console.log('Navegación completada, programando siguiente...');
    
    // Programar el siguiente cambio automático
    scheduleNextSlide();
}

// Cerrar modo presentación
function closePresentationMode() {
    console.log('Cerrando modo presentación...');
    const presentationMode = document.getElementById('presentationMode');
    presentationMode.style.display = 'none';
    
    // Detener presentación automática
    if (window.presentationInterval) {
        console.log('Deteniendo timer:', window.presentationInterval);
        clearInterval(window.presentationInterval);
        window.presentationInterval = null;
    }
}

// Función de diagnóstico para debugging
function debugPresentationMode() {
    console.log('=== DIAGNÓSTICO MODO PRESENTACIÓN ===');
    console.log('URL actual:', window.location.href);
    console.log('User agent:', navigator.userAgent);
    console.log('Memorias cargadas:', memories.length);
    console.log('Memorias de Google Drive:', memories.filter(m => m.isGoogleDrive).length);
    
    const elements = {
        presentationMode: document.getElementById('presentationMode'),
        presentationSlides: document.getElementById('presentationSlides'),
        presentationProgress: document.getElementById('presentationProgress'),
        startButton: document.querySelector('[onclick="startPresentationMode()"]')
    };
    
    console.log('Elementos del DOM:', elements);
    
    if (memories.length > 0) {
        console.log('Primera memoria:', memories[0]);
    }
    
    // Verificar memorias de Google Drive específicamente
    const googleDriveMemories = memories.filter(m => m.isGoogleDrive);
    console.log('Detalles de memorias de Google Drive:');
    googleDriveMemories.forEach((memory, index) => {
        console.log(`GD Memory ${index + 1}:`, {
            title: memory.title,
            type: memory.type,
            fileId: memory.fileId,
            hasFileId: !!memory.fileId,
            file: memory.file,
            thumbnail: memory.thumbnail
        });
    });
    
    // Verificar si hay errores en la consola
    if (window.console && window.console.error) {
        console.log('Verificar la consola para errores');
    }
}

// Función para probar específicamente memorias de Google Drive
function testGoogleDriveMemories() {
    console.log('=== TEST MEMORIAS GOOGLE DRIVE ===');
    
    const googleDriveMemories = memories.filter(m => m.isGoogleDrive);
    console.log('Total memorias Google Drive:', googleDriveMemories.length);
    
    googleDriveMemories.forEach((memory, index) => {
        console.log(`Testing GD Memory ${index + 1}:`, memory.title);
        
        // Probar construcción de URL
        let testUrl = '';
        if (memory.type === 'image') {
            testUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w1200`;
        } else if (memory.type === 'video') {
            testUrl = `https://drive.google.com/file/d/${memory.fileId}/preview`;
        }
        
        console.log('URL generada:', testUrl);
        
        // Crear elemento de prueba
        const testImg = new Image();
        testImg.onload = function() {
            console.log(`✓ Imagen cargada exitosamente: ${memory.title}`);
        };
        testImg.onerror = function() {
            console.log(`✗ Error al cargar imagen: ${memory.title}`, {
                url: testUrl,
                fileId: memory.fileId,
                error: 'CORS o archivo no accesible'
            });
        };
        testImg.src = testUrl;
    });
}

// Función para forzar el modo presentación
function forcePresentationMode() {
    console.log('Forzando modo presentación...');
    
    // Crear datos de prueba si no hay memorias
    if (memories.length === 0) {
        console.log('Creando datos de prueba...');
        memories.push({
            title: 'Memoria de Prueba',
            description: 'Esta es una memoria de prueba para verificar el modo presentación',
            date: new Date().toISOString(),
            dayNumber: 1,
            file: 'luffy.png',
            type: 'image',
            character: 'Luffy'
        });
    }
    
    // Mostrar el modo presentación
    const presentationMode = document.getElementById('presentationMode');
    if (presentationMode) {
        presentationMode.classList.add('force-show');
        presentationMode.style.display = 'flex';
        presentationMode.style.opacity = '1';
        presentationMode.style.visibility = 'visible';
        console.log('Modo presentación forzado');
    }
    
    // Crear diapositivas
    startPresentationMode();
}

// Función para probar animaciones de tarjetas
function testCardAnimations() {
    console.log('Probando animaciones de tarjetas...');
    const cards = document.querySelectorAll('.memory-card');
    console.log('Tarjetas encontradas:', cards.length);
    
    cards.forEach((card, index) => {
        console.log(`Animando tarjeta ${index}`);
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
}

// Listener global para errores
window.addEventListener('error', function(e) {
    console.error('Error global capturado:', e.error);
    console.error('Mensaje:', e.message);
    console.error('Archivo:', e.filename);
    console.error('Línea:', e.lineno);
});

// Listener para cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado');
    debugPresentationMode();
    
    // Agregar botones de prueba temporales
    const testBtn = document.createElement('button');
    testBtn.textContent = 'TEST PRESENTACIÓN';
    testBtn.style.position = 'fixed';
    testBtn.style.top = '10px';
    testBtn.style.right = '10px';
    testBtn.style.zIndex = '9999';
    testBtn.style.padding = '10px';
    testBtn.style.background = 'red';
    testBtn.style.color = 'white';
    testBtn.onclick = function() {
        console.log('Botón de prueba presionado');
        startPresentationMode();
    };
    document.body.appendChild(testBtn);
    
    // Botón para probar memorias de Google Drive
    const gdTestBtn = document.createElement('button');
    gdTestBtn.textContent = 'TEST GOOGLE DRIVE';
    gdTestBtn.style.position = 'fixed';
    gdTestBtn.style.top = '50px';
    gdTestBtn.style.right = '10px';
    gdTestBtn.style.zIndex = '9999';
    gdTestBtn.style.padding = '10px';
    gdTestBtn.style.background = 'blue';
    gdTestBtn.style.color = 'white';
    gdTestBtn.onclick = function() {
        console.log('Botón de prueba Google Drive presionado');
        testGoogleDriveMemories();
    };
    document.body.appendChild(gdTestBtn);
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

// Actualizar línea de tiempo
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
    uniqueDates.forEach(date => {
        // Encontrar la primera memoria de esta fecha para usar como miniatura
        const firstMemory = memories.find(memory => memory.date.startsWith(date));
        if (!firstMemory) return;
        
        // Crear elemento de evento
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.setAttribute('data-date', date);
        
        // Crear miniatura
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
        
        // Añadir contenido al evento
        eventElement.innerHTML = `
            <div class="timeline-dot"></div>
            <img src="${thumbnailSrc}" alt="${displayDate}" class="timeline-thumbnail">
            <div class="timeline-date">${displayDate}</div>
        `;
        
        // Añadir evento a la línea de tiempo
        timelineEvents.appendChild(eventElement);
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
            <div class="memory-date">Día ${memory.dayNumber}</div>
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
