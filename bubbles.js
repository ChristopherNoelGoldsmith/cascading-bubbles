(function () {
    const createKeyframes = () => {

        //inserts keyframes and positions the bubble div on the DOM.
        const css = document.styleSheets[0];
        console.log(document.styleSheets)
        css.insertRule(`
    @keyframes bubble-up {
        from {
            transform: translateY(0%);
        }
    
        to {
            transform: translateY(-1500%);
            opacity: 0;
        }
    }`, css.cssRules.length)
        css.insertRule(`
    #bubbles {
        position: fixed;
        bottom: 0px;
        left: 0;
        height: 120vh;
    }`, css.cssRules.length)
    };

    const cascadingBubbles = () => {
        //targets dom element creates bubble then appends it.
        const bubble = document.createElement('div');
        //determines the size of the bubble and its animation duration.
        const bubbleSize = Math.round(Math.random() * 100);
        const duration = Math.round(Math.random() * 20) + 5;
        const position = Math.floor(Math.random() * 85) + 5;

        //styles of the bubbles
        //bubble.id = `${Math.round(bubbleSize + position)}POPPING!`
        bubble.style.zIndex = `-100`;
        bubble.style.animation = `bubble-up ${duration}s ease-out`;
        bubble.style.position = `fixed`;
        bubble.style.left = `${position}%`;
        bubble.style.height = `${bubbleSize}px`;
        bubble.style.width = `${bubbleSize}px`;
        bubble.style.background = `rgba(255, 255, 255, 0.2)`;
        bubble.style.border = `1px solid white`;
        bubble.style.borderRadius = `50%`;
        bubble.style.bottom = `-200px`;
        document.querySelector('body').appendChild(bubble);

        const removeBubble = () => {
            bubble.parentNode.removeChild(bubble);
        };
        setTimeout(cascadingBubbles, 500)
        setTimeout(removeBubble, (duration * 1000))
    };
    createKeyframes();
    cascadingBubbles();
})()