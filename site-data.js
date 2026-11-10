(function () {
    const defaults = {
        hero: {
            eyebrow: "Independent sound. No boundaries.",
            title: "Sound",
            italic: "with a pulse.",
            description: "Producer, sound architect, and storyteller. I build records that move between the club, the culture, and the moments in between.",
            note: "Producer · songwriter · sonic explorer",
            location: "Lagos · Working everywhere",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=85",
            font: "Manrope"
        },
        beats: [
            { id: "BT-001", title: "Midnight City", genre: "Afro-fusion", mood: "Moody", bpm: 102, duration: "02:48", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", audio: "", stock: "available", description: "" },
            { id: "BT-002", title: "Blue Hour", genre: "Alté / R&B", mood: "Dreamy", bpm: 88, duration: "03:12", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80", audio: "", stock: "available", description: "" },
            { id: "BT-003", title: "Open Roads", genre: "Afrobeats", mood: "Uplifting", bpm: 110, duration: "02:56", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", audio: "", stock: "sold", description: "" },
            { id: "BT-004", title: "Afterglow", genre: "R&B", mood: "Warm", bpm: 94, duration: "03:04", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", audio: "", stock: "available", description: "" },
            { id: "BT-005", title: "Night Drive", genre: "Trap", mood: "Dark", bpm: 140, duration: "02:35", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80", audio: "", stock: "sold", description: "" },
            { id: "BT-006", title: "Palmwine Skies", genre: "Afrobeats", mood: "Easy", bpm: 98, duration: "03:01", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", audio: "", stock: "available", description: "" },
            { id: "BT-007", title: "Soft Focus", genre: "R&B", mood: "Intimate", bpm: 76, duration: "02:51", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", audio: "", stock: "available", description: "" },
            { id: "BT-008", title: "New Frequency", genre: "Afro-fusion", mood: "Energetic", bpm: 116, duration: "02:44", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80", audio: "", stock: "sold", description: "" }
        ],
        music: [
            { id: "MU-001", title: "Midnight City", genre: "Afro-fusion", year: 2024, duration: "02:48", bpm: 102, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", description: "Moody textures, glassy synths, and a warm pulse built for late-night motion.", type: "Single" },
            { id: "MU-002", title: "Blue Hour", genre: "Alté / R&B", year: 2024, duration: "03:12", bpm: 88, image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", description: "Dreamlike chords and intimate vocal space with a slow, glowing pull.", type: "Single" },
            { id: "MU-003", title: "Open Roads", genre: "Afrobeats", year: 2023, duration: "02:56", bpm: 110, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", description: "A bright, forward-driving cut full of rhythm, uplift, and movement.", type: "Single" },
            { id: "MU-004", title: "Afterglow", genre: "R&B", year: 2023, duration: "03:04", bpm: 94, image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", description: "Soft percussion and a slow-burning melodic line for warm, reflective moments.", type: "Single" },
            { id: "MU-005", title: "Night Drive", genre: "Trap", year: 2022, duration: "02:35", bpm: 140, image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", description: "Dark rhythm, heavy bass, and a cinematic edge for the city after dark.", type: "Single" },
            { id: "MU-006", title: "Palmwine Skies", genre: "Afrobeats", year: 2022, duration: "03:01", bpm: 98, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", description: "Easygoing rhythm and glowing melodies that feel like a summer memory.", type: "Single" },
            { id: "MU-007", title: "Soft Focus", genre: "R&B", year: 2021, duration: "02:51", bpm: 76, image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", description: "Intimate and delicate, built around gentle hooks and clean melodic space.", type: "Single" },
            { id: "MU-008", title: "New Frequency", genre: "Afro-fusion", year: 2021, duration: "02:44", bpm: 116, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", description: "An energetic blend of rhythm and motion for forward-focus performance energy.", type: "Single" }
        ]
    };
    const keys = { hero: "klassikroom.hero", beats: "klassikroom.beats", music: "klassikroom.music" };
    const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const apiBase = isLocalhost
        ? `${window.location.protocol}//${window.location.hostname}:3000`
        : "https://backendklassic.onrender.com";
    function read(key) {
        const saved = localStorage.getItem(keys[key]);
        return saved === null ? JSON.parse(JSON.stringify(defaults[key])) : JSON.parse(saved);
    }
    function write(key, value) {
        localStorage.setItem(keys[key], JSON.stringify(value));
    }
    async function request(path, options = {}) {
        const response = await fetch(new URL(path, apiBase), {
            ...options,
            credentials: "include",
            headers: {
                ...(options.body ? { "Content-Type": "application/json" } : {}),
                ...options.headers
            }
        });
        if (response.status === 204) return null;
        const text = await response.text();
        let result;
        try {
            result = text ? JSON.parse(text) : null;
        } catch {
            throw new Error("The server returned an invalid response.");
        }
        if (!response.ok) throw new Error(result?.error || `The request failed (HTTP ${response.status}).`);
        return result;
    }
    function applyRemoteData(siteData) {
        if (!siteData) return;
        write("hero", siteData.hero);
        write("beats", siteData.beats);
        write("music", siteData.music);
        window.dispatchEvent(new CustomEvent("site-data-updated"));
    }
    const loadController = new AbortController();
    const loadTimeout = setTimeout(() => loadController.abort(), 5000);
    const ready = request("/api/site-data", { signal: loadController.signal })
        .then(result => applyRemoteData(result.siteData))
        .catch(error => {
            console.error("Could not load shared site content; using this browser's saved copy.", error);
        })
        .finally(() => {
            clearTimeout(loadTimeout);
        });
    function assetURL(value) {
        if (!value) return "";
        if (typeof value === "string" && /^data:image\/(?:webp|jpeg|png);base64,/.test(value)) return value;
        try {
            const url = new URL(value, window.location.href);
            return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
        } catch {
            return "";
        }
    }
    window.SiteData = {
        defaults,
        ready,
        getHero: () => read("hero"),
        getBeats: () => read("beats"),
        getMusic: () => read("music"),
        saveHero: value => write("hero", value),
        saveBeats: value => write("beats", value),
        saveMusic: value => write("music", value),
        sync: () => request("/api/site-data", {
            method: "PUT",
            body: JSON.stringify({
                hero: read("hero"),
                beats: read("beats"),
                music: read("music")
            })
        }),
        login: password => request("/api/admin/login", {
            method: "POST",
            body: JSON.stringify({ password })
        }),
        checkAdminSession: () => request("/api/admin/session"),
        logout: () => request("/api/admin/logout", { method: "POST" }),
        assetURL,
        apiURL: path => new URL(path, apiBase).href,
        reset: () => Object.keys(keys).forEach(key => localStorage.removeItem(keys[key]))
    };
}());
