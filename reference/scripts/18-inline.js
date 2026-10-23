document.addEventListener('dragstart', (event) => {
				if (event.target instanceof HTMLImageElement) {
					event.preventDefault();
				}
			});
			for (const img of document.querySelectorAll('img')) {
				img.setAttribute('draggable', 'false');
			}