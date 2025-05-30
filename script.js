const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.onclick = () => mobileMenu.classList.toggle('hidden');

function showquote(num) {
document.querySelectorAll('.quote').forEach(q => q.classList.add('hidden'));
document.getElementById(`quote${num}`).classList.remove('hidden');

document.querySelectorAll('.quote-btn').forEach((btn, i) => {
btn.classList.toggle('bg-yellow-500', i === num - 1);
btn.classList.toggle('bg-gray-600', i !== num - 1);
});
}

document.querySelector('form').onsubmit = e => {
e.preventDefault();
alert('thank you for your tribute to technoblade. o7');
e.target.reset();
};