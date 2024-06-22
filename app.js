    document.addEventListener('DOMContentLoaded', (event) => {
        const collapseToggles = document.querySelectorAll('.collapse-toggle');
        const collapses = document.querySelectorAll('.collapse');

        collapseToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('data-bs-target') || this.getAttribute('href');
                const targetCollapse = document.querySelector(targetId);

                // Cerrar todos los colapsos excepto el clicado
                collapses.forEach(collapse => {
                    if (collapse !== targetCollapse) {
                        collapse.classList.remove('show');
                        collapse.style.maxHeight = null;
                    }
                });

                // Alternar el colapso clicado
                if (targetCollapse.classList.contains('show')) {
                    targetCollapse.classList.remove('show');
                    targetCollapse.style.maxHeight = null;
                } else {
                    targetCollapse.classList.add('show');
                    targetCollapse.style.maxHeight = targetCollapse.scrollHeight + "px";
                }
            });
        });
    });
