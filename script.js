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

// Función para forzar el inicio del modo presentación
function forceStartPresentation() {
    try {
        startPresentationMode();
    } catch (error) {
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
    if (memories.length === 0) {
        alert('No hay memorias para mostrar en modo presentación');
        return;
    }
    
    const presentationMode = document.getElementById('presentationMode');
    const presentationSlides = document.getElementById('presentationSlides');
    const presentationProgress = document.getElementById('presentationProgress');
    
    if (!presentationMode || !presentationSlides || !presentationProgress) {
        return;
    }
    
    // Limpiar contenedores
    presentationSlides.innerHTML = '';
    presentationProgress.innerHTML = '';
    
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
            
            if (memory.isGoogleDrive) {
                if (memory.type === 'video') {
                    const driveUrl = `https://drive.google.com/file/d/${memory.fileId}/preview`;
                    mediaHtml = `
                        <iframe 
                            src="${driveUrl}" 
                            class="presentation-video" 
                            frameborder="0" 
                            allowfullscreen
                            onerror="this.onerror=null; this.style.display='none'; this.parentNode.innerHTML='<div style=\\'background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; text-align: center;\\'><h3>${memory.title}</h3><a href=\\'https://drive.google.com/file/d/${memory.fileId}/view\\' target=\\'_blank\\' style=\\'color: var(--coral); font-weight: bold; font-size: 1.2em;\\'>Ver Video en Google Drive</a></div>'""></iframe>
                    `;
                } else {
                    const imageUrl = `https://drive.google.com/uc?export=view&id=${memory.fileId}`;
                    const thumbnailUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w1920`;
                    const directUrl = `https://lh3.googleusercontent.com/d/${memory.fileId}=w1920`;
                    
                    mediaHtml = `
                        <img src="${imageUrl}" 
                             alt="${memory.title}" 
                             class="presentation-image" 
                             onerror="this.onerror=function(){this.onerror=null;this.src='${thumbnailUrl}';}; this.src='${thumbnailUrl}'"
                             onerror="this.onerror=null; this.style.display='none'; this.parentNode.innerHTML='<div style=\\'background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; text-align: center;\\'><h3>${memory.title}</h3><a href=\\'https://drive.google.com/file/d/${memory.fileId}/view\\' target=\\'_blank\\' style=\\'color: var(--coral); font-weight: bold; font-size: 1.2em;\\'>Ver en Google Drive</a></div>'"">
                    `;
                }
            } else {
                // Archivos locales
                if (memory.type === 'video') {
                    mediaHtml = `
                        <video class="presentation-video" controls autoplay muted>
                            <source src="${memory.file}" type="video/mp4">
                            Tu navegador no soporta el elemento video.
                        </video>
                    `;
                } else {
                    mediaHtml = `
                        <img src="${memory.file}" alt="${memory.title}" class="presentation-image">
                    `;
                }
            }
            
            // Crear contenido de la diapositiva
            slide.innerHTML = `
                <div class="presentation-content">
                    ${mediaHtml}
                    <div class="presentation-info">
                        <h2>${memory.title}</h2>
                        <p>${memory.description || ''}</p>
                        <div class="presentation-date">${formatDate(memory.date)}</div>
                    </div>
                </div>
            `;
            
            // Configurar manejo de errores para imágenes
            const img = slide.querySelector('img');
            if (img) {
                img.onerror = function() {
                    // Intentar con URL de thumbnail
                    const fallbackUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w1920`;
                    this.src = fallbackUrl;
                    
                    // Si el fallback también falla, mostrar mensaje
                    this.onerror = function() {
                        this.style.display = 'none';
                        const errorDiv = document.createElement('div');
                        errorDiv.innerHTML = `
                            <div style="background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; text-align: center;">
                                <h3>${memory.title}</h3>
                                <p style="color: var(--coral); margin: 10px 0;">
                                    ⚠️ La imagen no pudo cargarse. 
                                </p>
                                <a href="https://drive.google.com/file/d/${memory.fileId}/view" 
                                   target="_blank" 
                                   style="color: var(--coral); font-weight: bold; font-size: 1.2em;">
                                   Ver en Google Drive
                                </a>
                            </div>
                        `;
                        this.parentNode.appendChild(errorDiv);
                    };
                };
            }
            
            // Añadir diapositiva al contenedor
            presentationSlides.appendChild(slide);
            
            // Añadir indicador de progreso
            const progressDot = document.createElement('div');
            progressDot.className = `progress-dot ${index === 0 ? 'active' : ''}`;
            progressDot.setAttribute('data-index', index);
            progressDot.onclick = () => navigatePresentation('goto', index);
            presentationProgress.appendChild(progressDot);
            
        } catch (error) {
            // Silencioso - sin console.error
        }
    });
    
    // Mostrar el modo presentación
    presentationMode.style.display = 'flex';
    presentationMode.style.opacity = '0';
    
    // Forzar reflow para asegurar que el display se aplique antes de la transición
    presentationMode.offsetHeight;
    
    presentationMode.style.opacity = '1';
    
    // Configurar la presentación automática
    scheduleNextSlide();
}

// Función para programar el cambio automático de diapositivas
function scheduleNextSlide() {
    // Limpiar cualquier intervalo existente
    if (window.presentationInterval) {
        clearTimeout(window.presentationInterval);
    }
    
    const currentSlide = document.querySelector('.presentation-slide.active');
    if (!currentSlide) {
        return;
    }
    
    const slideType = currentSlide.getAttribute('data-type');
    const slideIndex = parseInt(currentSlide.getAttribute('data-index'));
    
    // Si es un video, esperar a que termine
    if (slideType === 'video') {
        const video = document.getElementById(`video-${slideIndex}`);
        if (video) {
            // Si el video está reproduciéndose, esperar a que termine
            if (!video.ended && !video.paused) {
                video.onended = function() {
                    window.presentationInterval = setTimeout(() => {
                        navigatePresentation('next');
                    }, 2000);
                };
                return;
            }
        }
    }
    
    // Para imágenes o si el video no está disponible, usar un tiempo fijo
    window.presentationInterval = setTimeout(() => {
        navigatePresentation('next');
    }, 5000); // 5 segundos para imágenes
}

// Navegar en el modo presentación
function navigatePresentation(direction, targetIndex) {
    const slides = document.querySelectorAll('.presentation-slide');
    const dots = document.querySelectorAll('.progress-dot');
    
    if (slides.length === 0) {
        return;
    }
    
    // Encontrar la diapositiva activa actual
    const currentSlide = document.querySelector('.presentation-slide.active');
    if (!currentSlide) {
        return;
    }
    
    const currentIndex = parseInt(currentSlide.getAttribute('data-index'));
    
    // Calcular el nuevo índice
    let newIndex;
    if (direction === 'goto' && targetIndex !== undefined) {
        newIndex = targetIndex;
    } else if (direction === 'prev') {
        newIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else { // 'next'
        newIndex = (currentIndex + 1) % slides.length;
    }
    
    // Actualizar diapositivas
    currentSlide.classList.remove('active');
    slides[newIndex].classList.add('active');
    
    // Actualizar indicadores de progreso
    const currentDot = document.querySelector('.progress-dot.active');
    if (currentDot) currentDot.classList.remove('active');
    dots[newIndex].classList.add('active');
    
    // Programar el siguiente cambio automático
    scheduleNextSlide();
}

// Cerrar modo presentación
function closePresentationMode() {
    const presentationMode = document.getElementById('presentationMode');
    presentationMode.style.display = 'none';
    
    // Detener presentación automática
    if (window.presentationInterval) {
        clearInterval(window.presentationInterval);
        window.presentationInterval = null;
    }
}

// Función para actualizar la galería
function updateGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';
    
    if (memories.length === 0) {
        gallery.innerHTML = `
            <div class="empty-gallery">
                <div class="empty-icon">📸</div>
                <h3>No hay memorias aún</h3>
                <p>¡Comienza a añadir tus recuerdos favoritos!</p>
                <button class="btn btn-primary" onclick="document.getElementById('addMemoryBtn').click()">Añadir Primera Memoria</button>
            </div>
        `;
        return;
    }
    
    memories.forEach((memory, index) => {
        const card = createMemoryCard(memory, index);
        gallery.appendChild(card);
    });
}

// Crear tarjeta de memoria
function createMemoryCard(memory, index) {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.setAttribute('data-id', memory.id);
    
    let mediaElement = '';
    if (memory.type === 'video') {
        if (memory.isGoogleDrive) {
            const thumbnailUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w400`;
            mediaElement = `<img src="${thumbnailUrl}" alt="${memory.title}" class="memory-thumbnail">`;
        } else {
            mediaElement = `<video src="${memory.file}" class="memory-thumbnail" muted></video>`;
        }
    } else {
        if (memory.isGoogleDrive) {
            const thumbnailUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w400`;
            mediaElement = `<img src="${thumbnailUrl}" alt="${memory.title}" class="memory-thumbnail">`;
        } else {
            mediaElement = `<img src="${memory.file}" alt="${memory.title}" class="memory-thumbnail">`;
        }
    }
    
    card.innerHTML = `
        <div class="memory-card-content">
            ${mediaElement}
            <div class="memory-overlay">
                <h3>${memory.title}</h3>
                <p>${memory.description || ''}</p>
                <div class="memory-date">${formatDate(memory.date)}</div>
            </div>
            <div class="memory-actions">
                <button class="btn-icon" onclick="viewMemory('${memory.id}')" title="Ver">
                    <span>👁️</span>
                </button>
                <button class="btn-icon" onclick="editMemory('${memory.id}')" title="Editar">
                    <span>✏️</span>
                </button>
                <button class="btn-icon" onclick="deleteMemory('${memory.id}')" title="Eliminar">
                    <span>🗑️</span>
                </button>
            </div>
        </div>
    `;
    
    // Añadir eventos
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.memory-actions')) {
            viewMemory(memory.id);
        }
    });
    
    return card;
}

// Ver memoria en detalle
function viewMemory(id) {
    const memoryIndex = getMemoryIndexById(id);
    const memory = memories[memoryIndex];
    
    if (!memory) return;
    
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('detailModalContent');
    
    modal.setAttribute('data-current-id', id);
    
    let mediaElement = '';
    if (memory.type === 'video') {
        if (memory.isGoogleDrive) {
            const driveUrl = `https://drive.google.com/file/d/${memory.fileId}/preview`;
            mediaElement = `<iframe src="${driveUrl}" class="detail-image" frameborder="0" allowfullscreen></iframe>`;
        } else {
            mediaElement = `<video src="${memory.file}" class="detail-image" controls></video>`;
        }
    } else {
        if (memory.isGoogleDrive) {
            const imageUrl = `https://drive.google.com/uc?export=view&id=${memory.fileId}`;
            mediaElement = `<img src="${imageUrl}" alt="${memory.title}" class="detail-image">`;
        } else {
            mediaElement = `<img src="${memory.file}" alt="${memory.title}" class="detail-image">`;
        }
    }
    
    modalContent.innerHTML = `
        <div class="detail-header">
            <h2>${memory.title}</h2>
            <button class="close-btn" onclick="closeDetailModal()">&times;</button>
        </div>
        <div class="detail-content">
            ${mediaElement}
            <div class="detail-info">
                <p>${memory.description || ''}</p>
                <div class="detail-date">${formatDate(memory.date)}</div>
            </div>
        </div>
        <div class="detail-actions">
            <button class="btn btn-primary" onclick="editMemory('${id}')">Editar</button>
            <button class="btn btn-secondary" onclick="deleteMemory('${id}')">Eliminar</button>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Aplicar filtro si existe
    if (memory.filter) {
        const mediaEl = modalContent.querySelector('.detail-image');
        if (mediaEl && memory.filter) {
            mediaEl.classList.add(memory.filter);
        }
    }
    
    // Inicializar selector de filtros
    initFilters();
    updateFilterUI(memory.filter || '');
}

// Cerrar modal de detalle
function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Editar memoria
function editMemory(id) {
    const memoryIndex = getMemoryIndexById(id);
    const memory = memories[memoryIndex];
    
    if (!memory) return;
    
    // Cerrar modal si está abierto
    closeDetailModal();
    
    // Llenar el formulario con los datos existentes
    document.getElementById('memoryTitle').value = memory.title;
    document.getElementById('memoryDescription').value = memory.description || '';
    document.getElementById('memoryDate').value = memory.date;
    
    // Establecer la memoria actual para edición
    currentMemory = {
        ...memory,
        index: memoryIndex
    };
    
    // Mostrar el formulario
    showMemoryForm();
}

// Eliminar memoria
function deleteMemory(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta memoria?')) {
        const memoryIndex = getMemoryIndexById(id);
        memories.splice(memoryIndex, 1);
        saveMemories();
        updateGallery();
        updateStats();
        closeDetailModal();
    }
}

// Obtener índice de memoria por ID
function getMemoryIndexById(id) {
    return memories.findIndex(memory => memory.id === id);
}

// Actualizar estadísticas
function updateStats() {
    const totalMemories = memories.length;
    const images = memories.filter(m => m.type === 'image').length;
    const videos = memories.filter(m => m.type === 'video').length;
    const googleDrive = memories.filter(m => m.isGoogleDrive).length;
    
    document.getElementById('totalMemories').textContent = totalMemories;
    document.getElementById('totalImages').textContent = images;
    document.getElementById('totalVideos').textContent = videos;
    document.getElementById('totalGoogleDrive').textContent = googleDrive;
    
    // Actualizar gráfico
    updateChart();
}

// Actualizar gráfico de estadísticas
function updateChart() {
    const ctx = document.getElementById('statsChart');
    if (!ctx) return;
    
    const canvas = ctx.getContext('2d');
    
    // Limpiar canvas
    canvas.clearRect(0, 0, ctx.width, ctx.height);
    
    // Datos para el gráfico
    const images = memories.filter(m => m.type === 'image').length;
    const videos = memories.filter(m => m.type === 'video').length;
    
    // Crear gráfico simple con divs
    const chartContainer = document.getElementById('chartContainer');
    if (chartContainer) {
        chartContainer.innerHTML = `
            <div class="chart-item">
                <div class="chart-bar" style="height: ${images > 0 ? (images / Math.max(images, videos, 1)) * 100 : 0}%; background: var(--coral);"></div>
                <span class="chart-label">Imágenes (${images})</span>
            </div>
            <div class="chart-item">
                <div class="chart-bar" style="height: ${videos > 0 ? (videos / Math.max(images, videos, 1)) * 100 : 0}%; background: var(--gold);"></div>
                <span class="chart-label">Videos (${videos})</span>
            </div>
        `;
    }
}

// Actualizar línea de tiempo
function updateTimeline() {
    const timeline = document.getElementById('timelineContent');
    timeline.innerHTML = '';
    
    if (memories.length === 0) {
        timeline.innerHTML = `
            <div class="empty-timeline">
                <div class="empty-icon">📅</div>
                <h3>No hay eventos en la línea de tiempo</h3>
                <p>Añade tus primeras memorias para verlas aquí</p>
            </div>
        `;
        return;
    }
    
    // Ordenar por fecha
    const sortedMemories = [...memories].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedMemories.forEach((memory, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        let mediaElement = '';
        if (memory.type === 'video') {
            if (memory.isGoogleDrive) {
                const thumbnailUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w200`;
                mediaElement = `<img src="${thumbnailUrl}" alt="${memory.title}" class="timeline-thumbnail">`;
            } else {
                mediaElement = `<video src="${memory.file}" class="timeline-thumbnail" muted></video>`;
            }
        } else {
            if (memory.isGoogleDrive) {
                const thumbnailUrl = `https://drive.google.com/thumbnail?id=${memory.fileId}&sz=w200`;
                mediaElement = `<img src="${thumbnailUrl}" alt="${memory.title}" class="timeline-thumbnail">`;
            } else {
                mediaElement = `<img src="${memory.file}" alt="${memory.title}" class="timeline-thumbnail">`;
            }
        }
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${formatDate(memory.date)}</div>
            <div class="timeline-content">
                ${mediaElement}
                <div class="timeline-info">
                    <h3>${memory.title}</h3>
                    <p>${memory.description || ''}</p>
                    <button class="btn btn-primary" onclick="viewMemory('${memory.id}')">Ver</button>
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Formatear fecha
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Funciones para los eventos de anime
function initAnimeEvents() {
    // Esta función se puede expandir con eventos específicos de anime
    // Por ahora, mostrará un mensaje temporal
}

// Funciones auxiliares
function getCharacterEmoji(characterName) {
    const emojis = {
        'Luffy': '🏴‍☠️',
        'Zoro': '⚔️',
        'Nami': '🧭',
        'Usopp': '🎯',
        'Sanji': '🍖',
        'Chopper': '🦌',
        'Robin': '📚',
        'Franky': '🤖',
        'Brook': '🎵',
        'Jinbe': '🐟'
    };
    return emojis[characterName] || '🏴‍☠️';
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                // Service Worker registrado
            })
            .catch(error => {
                // Error al registrar Service Worker
            });
    }
    
    // Inicializar componentes
    loadMemories();
    initTheme();
    initFilters();
    setRandomWelcomeMessage();
    
    // Configurar eventos
    document.getElementById('addMemoryBtn').addEventListener('click', showMemoryForm);
    document.getElementById('closeFormBtn').addEventListener('click', hideMemoryForm);
    document.getElementById('memoryForm').addEventListener('submit', handleMemorySubmit);
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);
    document.getElementById('googleDriveBtn').addEventListener('click', showGoogleDriveForm);
    document.getElementById('closeGoogleDriveFormBtn').addEventListener('click', hideGoogleDriveForm);
    document.getElementById('googleDriveForm').addEventListener('submit', handleGoogleDriveSubmit);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Prevenir el envío del formulario con Enter en campos de texto
    document.querySelectorAll('input[type="text"], textarea').forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.target.form.querySelector('button[type="submit"]:focus')) {
                e.preventDefault();
            }
        });
    });
});
