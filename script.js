const map = L.map("map").setView([50.8503, 4.3517], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);


// Bookstores
const bookstores = [
    {
        name: "Waterstones",
        address: "Boulevard Adolphe Max 71/75",
        coordinates: [50.85358, 4.35597]
    },
    {
        name: "Passa Porta",
        address: "Antoine Dansaertstraat 46/48",
        coordinates: [50.84965, 4.34677]
    },
    {
        name: "Tropismes",
        address: "Galerie des Princes 11",
        coordinates: [50.8469, 4.3550]
    },
    {
        name: "Filigranes",
        address: "Boulevard de Waterloo 25",
        coordinates: [50.83800, 4.35889]
    },
    {
        name: "Standaard Boekhandel",
        address: "Boulevard Anspach 28",
        coordinates: [50.8487, 4.3500]
    },
    {
        name: "Librebook",
        address: "Chaussée de Wavre 128",
        coordinates: [50.8360, 4.3700]
    },
    {
        name: "Tulitu",
        address: "Rue de Flandre 55",
        coordinates: [50.8510, 4.3485]
    }
];


// Custom bookstore icons
const bookstoreIcon = L.divIcon({
    className: "bookstore-marker",
    html: "📚",
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});


// adding the markers
bookstores.forEach(bookstore => {

    const marker = L.marker(bookstore.coordinates, {
        icon: bookstoreIcon
    }).addTo(map);

    marker.bindTooltip(`
        <div class="bookstore-tooltip">
            <h3>${bookstore.name}</h3>
            <p>${bookstore.address}</p>
        </div>
    `, {
        direction: "top",
        offset: [0, -20],
        opacity: 1
    });

});