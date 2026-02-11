// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

function moveElement(duration, distance, element) {
    let xPos = element.getBoundingRect().left;
    const startT = performance.now();

    const animate = (currentT) => {
        const timeMoved = currentT - startT;
        const percentTimeMoved = timeMoved / duration;
        const distanceToMove = percentTimeMoved * distance;
        
        if (distanceToMove <= distance) {
            element.style.transform = `translateX(${xPos + distanceToMove})`;
            requestAnimationFrame(animate);
        }

    }

    requestAnimationFrame(animate);
}
