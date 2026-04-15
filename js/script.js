// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href'))
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});

// Scroll spy — highlight active tab based on visible section
const sections = ['hero', 'products', 'contact'];
const tabs = document.querySelectorAll('.nav-tab');

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const id = entry.target.id;
			tabs.forEach(tab => {
				tab.classList.toggle('active', tab.dataset.section === id);
			});
		}
	});
}, { threshold: 0.4 });

sections.forEach(id => {
	const el = document.getElementById(id);
	if (el) observer.observe(el);
});

// AOS init
AOS.init({ once: true });
