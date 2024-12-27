// Search functionality
const sections = {
    home: 'home',
    about: 'about',
    team: 'team',
    projects: 'projects',
    contact: 'contact',
};

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sectionId = sections[searchTerm];

    if (sectionId) {
        // Scroll to the matching section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Section not found. Please try: Home, About Us, Team Members, Projects, or Contact Us.');
    }
});
