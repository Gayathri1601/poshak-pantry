// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href'))
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});

// Scroll spy — highlight active tab based on scroll position
const sections = ['hero', 'aboutUs', 'products', 'contact'];
const tabs = document.querySelectorAll('.nav-tab');

function setActiveTab() {
	const navHeight = document.getElementById('mainNav').offsetHeight;
	const scrollPos = window.scrollY + navHeight + 10;

	let current = sections[0];
	sections.forEach(id => {
		const el = document.getElementById(id);
		if (el && el.offsetTop <= scrollPos) {
			current = id;
		}
	});

	tabs.forEach(tab => {
		tab.classList.toggle('active', tab.dataset.section === current);
	});
}

window.addEventListener('scroll', setActiveTab, { passive: true });
setActiveTab();

// AOS init
AOS.init({ once: true });
