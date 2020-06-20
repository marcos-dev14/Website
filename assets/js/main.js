// Function expression to select elements
const selecElement = (s) => document.querySelector(s);
// Opne the menu on click
selecElement('.open').addEventListener('click', () => {
    selecElement('.nav-list').classList.add('active');
});
// Close the menu on click
selecElement('.close').addEventListener('click', () => {
    selecElement('.nav-list').classList.remove('active');
})