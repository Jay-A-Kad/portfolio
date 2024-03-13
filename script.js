const folders = document.querySelectorAll('.folder');

for (const folder of folders) {
    folder.onclick = () => {
        const targetList = folder.nextElementSibling;
        targetList.style.maxHeight = targetList.style.maxHeight ? null : '100vh';
    }
}
