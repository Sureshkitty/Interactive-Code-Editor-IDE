document.getElementById('run').addEventListener('click', function() {
    const html = document.getElementById('html-editor').value;
    const css = `<style>${document.getElementById('css-editor').value}</style>`;
    const js = document.getElementById('js-editor').value;
    const previewFrame = document.getElementById('preview');

    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDocument.open();
    previewDocument.write(html + css + `<script>${js}<\/script>`);
    previewDocument.close();
});

document.querySelectorAll('.resize-button').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const sizeChange = parseInt(this.getAttribute('data-size'));
        const textarea = document.getElementById(`${target}-editor`);

        const newHeight = Math.max(100, textarea.offsetHeight + sizeChange * 10);
        textarea.style.height = `${newHeight}px`;
    });
});

document.getElementById('bg-color').addEventListener('input', function() {
    const selectedColor = this.value;
    document.body.style.backgroundColor = selectedColor;

    const previewFrame = document.getElementById('preview');
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;

    previewDocument.body.style.backgroundColor = selectedColor;
});


document.getElementById('dark-theme').addEventListener('click', function() {
    document.body.classList.remove('light-theme');
});


document.getElementById('light-theme').addEventListener('click', function() {
    document.body.classList.add('light-theme');
});


document.querySelectorAll('.minimize').forEach(icon => {
    icon.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const codeBox = document.getElementById(`${target}-box`);
        const textarea = document.getElementById(`${target}-editor`);

        if (codeBox.classList.contains('minimized')) {
            codeBox.classList.remove('minimized');
            textarea.style.display = 'block';
            this.classList.remove('fa-plus');
            this.classList.add('fa-minus');
        } else {
            codeBox.classList.add('minimized');
            textarea.style.display = 'none';
            this.classList.remove('fa-minus');
            this.classList.add('fa-plus');
        }
    });
});
