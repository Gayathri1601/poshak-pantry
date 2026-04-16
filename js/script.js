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

// Product modal
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

document.querySelectorAll('.product-card--clickable').forEach(card => {
	card.addEventListener('click', () => {
		document.getElementById('modalImg').src = card.dataset.img;
		document.getElementById('modalImg').alt = card.dataset.name;
		document.getElementById('modalName').textContent = card.dataset.name;
		document.getElementById('modalShort').textContent = card.querySelector('.product-description').textContent;
		document.getElementById('modalDesc').textContent = card.dataset.desc;
		productModal.show();
	});
});

// AOS init
AOS.init({ once: true });
