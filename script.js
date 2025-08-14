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

// Cambiar vista (ARREGLADO)
function showView(viewName) {
    // Ocultar todas las vistas
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
            (viewName === 'gallery' && buttonText.includes('galería'))) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar mensaje del personaje según la vista
    if (viewName === 'gallery') {
        setRandomGalleryMessage();
    } else if (viewName === 'stats') {
        updateStatsMessage();
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

// Establecer mensaje aleatorio en galería (con círculo rojo alineado)
function setRandomGalleryMessage() {
    const character = characters[Math.floor(Math.random() * characters.length)];
    document.getElementById('galleryCharAvatar').outerHTML = `
        <img src="${character.avatar}" alt="${character.name}" class="char-avatar-img">
    `;
    document.getElementById('galleryCharMessage').textContent = character.phrases[Math.floor(Math.random() * character.phrases.length)];
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



// Abrir modal de detalle (CORREGIDO - eliminado movimiento horizontal)
function openDetailModal(id) {
    const memoryIndex = getMemoryIndexById(id);
    const memory = memories[memoryIndex];
    if (!memory) return;
    
    let mediaHtml = '';
    if (memory.isGoogleDrive) {
        if (memory.type === 'video') {
            mediaHtml = `<iframe src="https://drive.google.com/file/d/${memory.fileId}/preview" width="100%" height="300" allow="autoplay" frameborder="0"></iframe>`;
        } else {
            const imageUrl = `https://drive.google.com/uc?export=view&id=${memory.fileId}`;
            mediaHtml = `<img src="${imageUrl}" alt="${memory.title}" class="detail-image" onerror="this.onerror=null; this.src='https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w800';">`;
        }
    } else if (memory.type === 'video') {
        mediaHtml = `<video src="${memory.file}" class="detail-image" controls autoplay></video>`;
    } else {
        mediaHtml = `<img src="${memory.file}" alt="${memory.title}" class="detail-image">`;
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
    
    document.getElementById('detailContent').innerHTML = detailHtml;
    document.getElementById('detailModal').setAttribute('data-current-id', id);
    document.getElementById('detailModal').classList.add('active');
}
// Función para obtener índice de memoria por ID
function getMemoryIndexById(id) {
    return memories.findIndex(m => m.id === id);
}

// Función para añadir reacción con emoji
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
        // Ya existe esta reacción, no hacer nada
        return;
    }
    
    // Establecer contador a 1 (solo una reacción por emoji)
    memory.reactions[emoji] = 1;
    
    // Guardar cambios
    saveMemories();
    
    // Actualizar UI sin recargar el modal completo
    updateReactionsUI(memoryId);
    
    // Mostrar reacción del personaje
    const character = characters[Math.floor(Math.random() * characters.length)];
    const message = `¡${character.name} también reaccionó con ${emoji}!`;
    showCharacterReaction(message, character.avatar);
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
    memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.onclick = () => openDetailModal(memory.id);
        let thumbnailHtml = '';
        if (memory.isGoogleDrive) {
            thumbnailHtml = `<img src="${memory.thumbnail}" class="memory-thumbnail" alt="Thumbnail" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn5KYPC90ZXh0Pjwvc3ZnPg==';">`;
        } else {
            thumbnailHtml = memory.type === 'video' ? 
                `<video src="${memory.thumbnail || memory.file}" class="memory-thumbnail" muted></video>` :
                `<img src="${memory.thumbnail || memory.file}" class="memory-thumbnail" alt="Thumbnail">`;
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
document.getElementById('memoryForm').addEventListener('submit', function(e) {
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
