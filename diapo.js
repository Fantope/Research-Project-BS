
const container = document.getElementById("diapo-container")

function getPanels() {
	return Array.from(container.childNodes).filter(e => e.nodeName == "DIV")
}

function getCurrentPanelIndex() {
	const panels = getPanels()
	let currentPanelIndex = 0
	let minPanelOffset = Infinity
	for (let i = 0; i < panels.length; ++i) {
		const thisPanelOffset = Math.abs(container.scrollLeft + container.offsetLeft - panels[i].offsetLeft)
		if (thisPanelOffset < minPanelOffset) {
			minPanelOffset = thisPanelOffset
			currentPanelIndex = i
		}
	}
	return currentPanelIndex
}

container.oncontextmenu = e => e.preventDefault()
container.onmousedown = e => {
	const panels = getPanels()
	const currentPanelIndex = getCurrentPanelIndex()
	if (e.buttons & 1) {
		if (panels.length == currentPanelIndex + 1) location.replace("./index.html")
		else container.scrollLeft = panels[currentPanelIndex + 1].offsetLeft - container.offsetLeft
	} if ((e.buttons & 2) && currentPanelIndex > 0) {
		container.scrollLeft = panels[currentPanelIndex - 1].offsetLeft - container.offsetLeft
	}
}

