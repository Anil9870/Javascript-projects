const coursesList = document.querySelector('.courses-list');
      scrollIcons = document.querySelectorAll('.icon i');

scrollIcons.forEach(scrollIcon => {
    scrollIcon.addEventListener('click', () => {
        coursesList.scrollLeft -= scrollIcon.id === 'left' ? 350:-350;
    })
});

let isDragging = false;

const dragging = (e) => {
    if (!isDragging)
        return;
    coursesList.classList.add('dragging');
    coursesList.scrollLeft -= e.movementX;
}

coursesList.addEventListener('mousemove', dragging);
coursesList.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => {isDragging = false});