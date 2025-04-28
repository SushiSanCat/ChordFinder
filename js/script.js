// Expanded chord data
const chords = [
    // Open position major chords
    {
        name: 'C Major',
        type: 'major',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 2, fret: 1, finger: 1 },
            { string: 4, fret: 2, finger: 2 },
            { string: 5, fret: 3, finger: 3 }
        ],
        muted: [6],
        open: [1, 3]
    },
    {
        name: 'G Major',
        type: 'major',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 1, fret: 3, finger: 3 },
            { string: 5, fret: 2, finger: 2 },
            { string: 6, fret: 3, finger: 4 }
        ],
        muted: [],
        open: [2, 3, 4]
    },
    {
        name: 'D Major',
        type: 'major',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 3, fret: 2, finger: 3 },
            { string: 2, fret: 3, finger: 2 }
        ],
        muted: [5, 6],
        open: [4]
    },
    
    // Open position minor chords
    {
        name: 'A Minor',
        type: 'minor',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 2, fret: 1, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 4, fret: 2, finger: 3 }
        ],
        open: [1, 5, 6],
        muted: []
    },
    {
        name: 'E Minor',
        type: 'minor',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 5, fret: 2, finger: 2 },
            { string: 4, fret: 2, finger: 1 }
        ],
        open: [1, 2, 3, 6],
        muted: []
    },
    
    // 7th chords
    {
        name: 'A7',
        type: '7th',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 2, fret: 1, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 4, fret: 2, finger: 3 }
        ],
        open: [1, 5],
        muted: [6]
    },
    {
        name: 'E7',
        type: '7th',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 3, fret: 1, finger: 1 },
            { string: 5, fret: 2, finger: 2 }
        ],
        open: [1, 2, 4, 6],
        muted: []
    },
    
    // Barre chords
    {
        name: 'F Major (Barre)',
        type: 'major',
        difficulty: 'hard',
        position: 1,
        fingers: [
            { string: 1, fret: 1, finger: 1 },
            { string: 2, fret: 1, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 4, fret: 3, finger: 3 },
            { string: 5, fret: 3, finger: 4 }
        ],
        muted: [6],
        open: []
    },
    {
        name: 'B Minor (Barre)',
        type: 'minor',
        difficulty: 'hard',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 2, fret: 3, finger: 2 },
            { string: 3, fret: 4, finger: 3 },
            { string: 4, fret: 4, finger: 4 }
        ],
        muted: [5, 6],
        open: []
    },
    
    // Extended chords
    {
        name: 'Cmaj7',
        type: 'maj7',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 2, fret: 1, finger: 1 },
            { string: 4, fret: 2, finger: 2 },
            { string: 3, fret: 0, finger: 0 }
        ],
        muted: [5, 6],
        open: [1, 3]
    },
    {
        name: 'Dm7',
        type: 'm7',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 1, fret: 1, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 2, fret: 1, finger: 1 }
        ],
        muted: [5, 6],
        open: [4]
    },
    
    // Altered chords
    {
        name: 'Dsus2',
        type: 'sus2',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 1, fret: 0, finger: 0 },
            { string: 3, fret: 2, finger: 3 },
            { string: 2, fret: 3, finger: 2 }
        ],
        muted: [5, 6],
        open: [1, 4]
    },
    {
        name: 'Asus4',
        type: 'sus4',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 2, fret: 2, finger: 1 },
            { string: 3, fret: 2, finger: 1 },
            { string: 4, fret: 2, finger: 1 }
        ],
        open: [1, 5, 6],
        muted: []
    },
    {
        name: 'Cdim',
        type: 'diminished',
        difficulty: 'hard',
        position: 1,
        fingers: [
            { string: 2, fret: 1, finger: 1 },
            { string: 3, fret: 1, finger: 2 },
            { string: 4, fret: 2, finger: 3 },
            { string: 5, fret: 3, finger: 4 }
        ],
        muted: [1, 6],
        open: []
    },
    
    // Movable chord shapes
    {
        name: 'G Shape (Movable)',
        type: 'major',
        difficulty: 'hard',
        position: 3,
        fingers: [
            { string: 1, fret: 3, finger: 4 },
            { string: 5, fret: 3, finger: 3 },
            { string: 6, fret: 3, finger: 2 }
        ],
        open: [2, 3, 4],
        muted: []
    },
    {
        name: 'E Shape (Movable)',
        type: 'major',
        difficulty: 'medium',
        position: 4,
        fingers: [
            { string: 1, fret: 4, finger: 1 },
            { string: 2, fret: 5, finger: 2 },
            { string: 3, fret: 6, finger: 3 },
            { string: 4, fret: 6, finger: 4 },
            { string: 5, fret: 4, finger: 1 },
            { string: 6, fret: 4, finger: 1 }
        ],
        muted: [],
        open: []
    },
    
    // More examples
    {
        name: 'F# Minor',
        type: 'minor',
        difficulty: 'hard',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 2, fret: 2, finger: 1 },
            { string: 3, fret: 2, finger: 1 },
            { string: 4, fret: 4, finger: 3 },
            { string: 5, fret: 4, finger: 4 }
        ],
        muted: [6],
        open: []
    },
    {
        name: 'B7',
        type: '7th',
        difficulty: 'hard',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 4, fret: 4, finger: 3 },
            { string: 5, fret: 4, finger: 4 },
            { string: 3, fret: 3, finger: 2 }
        ],
        muted: [2, 6],
        open: []
    },
    {
        name: 'G6',
        type: '6th',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 1, fret: 0, finger: 0 },
            { string: 2, fret: 0, finger: 0 },
            { string: 3, fret: 0, finger: 0 },
            { string: 4, fret: 2, finger: 1 }
        ],
        muted: [5, 6],
        open: [1, 2, 3, 4]
    },
    
    // New advanced chords
    {
        name: 'Cadd9',
        type: 'extended',
        difficulty: 'medium',
        position: 3,
        fingers: [
            { string: 2, fret: 3, finger: 2 },
            { string: 4, fret: 2, finger: 1 },
            { string: 5, fret: 3, finger: 3 }
        ],
        muted: [6],
        open: [1, 3]
    },
    {
        name: 'D/F#',
        type: 'slash',
        difficulty: 'medium',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 3, fret: 2, finger: 3 },
            { string: 2, fret: 3, finger: 2 },
            { string: 4, fret: 4, finger: 4 }
        ],
        muted: [5, 6],
        open: []
    },
    {
        name: 'G/B',
        type: 'slash',
        difficulty: 'medium',
        position: 2,
        fingers: [
            { string: 5, fret: 2, finger: 1 },
            { string: 6, fret: 3, finger: 4 },
            { string: 1, fret: 3, finger: 3 }
        ],
        muted: [],
        open: [2, 3, 4]
    }
    ,
    // --- BASIC OPEN CHORDS ---
    {
        name: 'A Major',
        type: 'major',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 2, fret: 2, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 4, fret: 2, finger: 3 }
        ],
        open: [1, 5],
        muted: [6]
    },
    {
        name: 'E Major',
        type: 'major',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 3, fret: 1, finger: 1 },
            { string: 5, fret: 2, finger: 2 },
            { string: 4, fret: 2, finger: 3 }
        ],
        open: [1, 2, 6],
        muted: []
    },
    {
        name: 'B Major',
        type: 'major',
        difficulty: 'medium',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 2, fret: 4, finger: 4 },
            { string: 3, fret: 4, finger: 3 },
            { string: 4, fret: 4, finger: 2 }
        ],
        open: [],
        muted: [5, 6]
    },
    {
        name: 'D Minor',
        type: 'minor',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 1, fret: 1, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 2, fret: 3, finger: 3 }
        ],
        open: [4],
        muted: [5, 6]
    },
    {
        name: 'B Minor',
        type: 'minor',
        difficulty: 'medium',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 2, fret: 3, finger: 2 },
            { string: 3, fret: 4, finger: 4 },
            { string: 4, fret: 4, finger: 3 }
        ],
        open: [],
        muted: [5, 6]
    },
    {
        name: 'G Minor',
        type: 'minor',
        difficulty: 'medium',
        position: 3,
        fingers: [
            { string: 1, fret: 3, finger: 1 },
            { string: 2, fret: 3, finger: 1 },
            { string: 3, fret: 3, finger: 1 },
            { string: 4, fret: 5, finger: 3 },
            { string: 5, fret: 5, finger: 4 }
        ],
        open: [],
        muted: [6]
    },
    {
        name: 'F Minor',
        type: 'minor',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 1, fret: 1, finger: 1 },
            { string: 2, fret: 1, finger: 1 },
            { string: 3, fret: 1, finger: 1 },
            { string: 4, fret: 3, finger: 3 },
            { string: 5, fret: 3, finger: 4 }
        ],
        open: [],
        muted: [6]
    },
    // --- BARRE CHORDS (E and A SHAPES) ---
    {
        name: 'F Major (Barre, E shape)',
        type: 'major',
        difficulty: 'hard',
        position: 1,
        fingers: [
            { string: 1, fret: 1, finger: 1 },
            { string: 2, fret: 1, finger: 1 },
            { string: 3, fret: 2, finger: 2 },
            { string: 4, fret: 3, finger: 4 },
            { string: 5, fret: 3, finger: 3 },
            { string: 6, fret: 1, finger: 1 }
        ],
        open: [],
        muted: []
    },
    {
        name: 'G Major (Barre, E shape)',
        type: 'major',
        difficulty: 'hard',
        position: 3,
        fingers: [
            { string: 1, fret: 3, finger: 1 },
            { string: 2, fret: 3, finger: 1 },
            { string: 3, fret: 4, finger: 2 },
            { string: 4, fret: 5, finger: 4 },
            { string: 5, fret: 5, finger: 3 },
            { string: 6, fret: 3, finger: 1 }
        ],
        open: [],
        muted: []
    },
    {
        name: 'A Major (Barre, A shape)',
        type: 'major',
        difficulty: 'hard',
        position: 5,
        fingers: [
            { string: 1, fret: 5, finger: 1 },
            { string: 2, fret: 5, finger: 1 },
            { string: 3, fret: 6, finger: 2 },
            { string: 4, fret: 7, finger: 4 },
            { string: 5, fret: 7, finger: 3 },
            { string: 6, fret: 5, finger: 1 }
        ],
        open: [],
        muted: []
    },
    {
        name: 'B Minor (Barre, A shape)',
        type: 'minor',
        difficulty: 'hard',
        position: 2,
        fingers: [
            { string: 1, fret: 2, finger: 1 },
            { string: 2, fret: 3, finger: 2 },
            { string: 3, fret: 4, finger: 4 },
            { string: 4, fret: 4, finger: 3 },
            { string: 5, fret: 2, finger: 1 }
        ],
        open: [],
        muted: [6]
    },
    // --- EXTENDED CHORDS ---
    {
        name: 'C7',
        type: '7th',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 2, fret: 1, finger: 1 },
            { string: 4, fret: 2, finger: 2 },
            { string: 5, fret: 3, finger: 3 },
            { string: 3, fret: 3, finger: 4 }
        ],
        open: [1],
        muted: [6]
    },
    {
        name: 'G9',
        type: '9th',
        difficulty: 'hard',
        position: 3,
        fingers: [
            { string: 1, fret: 3, finger: 1 },
            { string: 2, fret: 3, finger: 2 },
            { string: 3, fret: 2, finger: 3 },
            { string: 4, fret: 3, finger: 4 },
            { string: 5, fret: 2, finger: 1 }
        ],
        open: [6],
        muted: []
    },
    {
        name: 'E13',
        type: '13th',
        difficulty: 'hard',
        position: 1,
        fingers: [
            { string: 1, fret: 0, finger: 0 },
            { string: 2, fret: 0, finger: 0 },
            { string: 3, fret: 1, finger: 1 },
            { string: 4, fret: 0, finger: 0 },
            { string: 5, fret: 2, finger: 2 },
            { string: 6, fret: 0, finger: 0 }
        ],
        open: [1, 2, 4, 6],
        muted: []
    },
    // --- ALTERED CHORDS ---
    {
        name: 'Daug',
        type: 'augmented',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 2, fret: 3, finger: 3 },
            { string: 3, fret: 2, finger: 2 },
            { string: 4, fret: 1, finger: 1 }
        ],
        open: [1],
        muted: [5, 6]
    },
    {
        name: 'Eaug',
        type: 'augmented',
        difficulty: 'medium',
        position: 1,
        fingers: [
            { string: 3, fret: 1, finger: 1 },
            { string: 4, fret: 2, finger: 2 },
            { string: 5, fret: 3, finger: 3 }
        ],
        open: [1, 2, 6],
        muted: []
    },
    {
        name: 'Gsus2',
        type: 'sus2',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 5, fret: 2, finger: 1 },
            { string: 6, fret: 3, finger: 2 },
            { string: 1, fret: 3, finger: 3 }
        ],
        open: [2, 3, 4],
        muted: []
    },
    {
        name: 'Asus2',
        type: 'sus2',
        difficulty: 'easy',
        position: 1,
        fingers: [
            { string: 4, fret: 2, finger: 1 },
            { string: 3, fret: 2, finger: 2 }
        ],
        open: [1, 2, 5],
        muted: [6]
    }
];

// Function to render chord cards
function renderChords(filteredChords = chords) {
    const container = document.getElementById('chordsContainer');
    container.innerHTML = '';
    
    filteredChords.forEach(chord => {
        const isFavorite = favorites.includes(chord.name);
        const card = document.createElement('div');
        card.className = 'chord-card';
        
        // Difficulty class
        const difficultyClass = `difficulty-${chord.difficulty}`;
        
        // Create fretboard
        let fretboardHTML = '<div class="fretboard">';
        for (let string = 1; string <= 6; string++) {
            fretboardHTML += `<div class="string">`;
            for (let fret = 0; fret <= 4; fret++) {
                fretboardHTML += `<div class="fret">`;
                
                // Check if this position has a finger
                const finger = chord.fingers.find(f => 
                    f.string === string && f.fret === fret
                );
                
                if (finger) {
                    fretboardHTML += `<div class="finger">${finger.finger}</div>`;
                } else if (fret === 0) {
                    if (chord.open.includes(string)) {
                        fretboardHTML += '<div class="open">○</div>';
                    } else if (chord.muted.includes(string)) {
                        fretboardHTML += '<div class="muted">✕</div>';
                    }
                }
                
                fretboardHTML += `</div>`;
            }
            fretboardHTML += `</div>`;
        }
        fretboardHTML += '</div>';
        
        card.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                    onclick="toggleFavorite('${chord.name}'); this.classList.toggle('active')">
                ☆
            </button>
            <div class="chord-name">${chord.name}</div>
            <div class="chord-difficulty ${difficultyClass}">
                ${chord.difficulty.charAt(0).toUpperCase() + chord.difficulty.slice(1)}
            </div>
            <div class="chord-position">Starts at ${chord.position}${getOrdinalSuffix(chord.position)} fret</div>
            ${fretboardHTML}
        `;
        
        container.appendChild(card);
    });
}

// Helper function for ordinal suffixes
function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
}

// Filter chords based on search and filters
function filterChords() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const difficulty = document.getElementById('difficultyFilter').value;
    const position = document.getElementById('positionFilter').value;
    const type = document.getElementById('typeFilter').value;
    
    const filtered = chords.filter(chord => {
        // Search filter
        if (!chord.name.toLowerCase().includes(searchTerm)) return false;
        
        // Difficulty filter
        if (difficulty !== 'all' && chord.difficulty !== difficulty) return false;
        
        // Position filter
        if (position !== 'all') {
            if (position === '1-3' && chord.position > 3) return false;
            if (position === '4-7' && (chord.position < 4 || chord.position > 7)) return false;
            if (position === '8+' && chord.position < 8) return false;
        }
        
        // Type filter
        if (type !== 'all' && chord.type !== type) return false;
        
        return true;
    });
    
    renderChords(filtered);
}

// Event listeners
document.getElementById('searchButton').addEventListener('click', filterChords);
document.getElementById('searchInput').addEventListener('input', filterChords);
document.getElementById('difficultyFilter').addEventListener('change', filterChords);
document.getElementById('positionFilter').addEventListener('change', filterChords);
document.getElementById('typeFilter').addEventListener('change', filterChords);

// Favorite functionality
let favorites = JSON.parse(localStorage.getItem('chordFavorites')) || [];

function toggleFavorite(chordName) {
    const index = favorites.indexOf(chordName);
    if (index === -1) {
        favorites.push(chordName);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('chordFavorites', JSON.stringify(favorites));
    renderChords();
}

// Add an indicator for "currently showing: chords" above the button
const indicator = document.createElement('div');
indicator.id = 'currentViewIndicator';
indicator.textContent = 'Currently showing: All Chords';
indicator.style.marginBottom = '10px';
indicator.style.fontWeight = 'bold';

const toggleFavoritesButton = document.getElementById('toggleFavorites');
toggleFavoritesButton.parentNode.insertBefore(indicator, toggleFavoritesButton);

// Update the indicator text when toggling favorites
toggleFavoritesButton.addEventListener('click', function() {
    const btn = this;
    if (btn.textContent === 'Show Favorites') {
        indicator.textContent = 'Currently showing: Favorites';
    } else {
        indicator.textContent = 'Currently showing: All Chords';
    }
});

// Toggle favorites button
document.getElementById('toggleFavorites').addEventListener('click', function() {
    const btn = this;
    if (btn.textContent === 'Show Favorites') {
        btn.textContent = 'Show All Chords';
        btn.classList.add('show-all');
        renderChords(chords.filter(chord => favorites.includes(chord.name)));
    } else {
        btn.textContent = 'Show Favorites';
        btn.classList.remove('show-all');
        renderChords();
    }
});

// Initial render
renderChords();