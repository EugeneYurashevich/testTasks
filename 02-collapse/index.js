'use strict';

let $collapsibleButton = document.querySelector('.collapsible__button');
let $collapsibleContent = document.querySelector('.collapsible__content');
let $collapsibleButtonValues = $collapsibleButton.querySelectorAll('.collapsible__action');

let animation = createAnimation($collapsibleContent);
animation.pause();

hideButtonValue($collapsibleButtonValues);

$collapsibleButton.addEventListener('click', () => {
    hideButtonValue(reverseButtonValue($collapsibleButtonValues));

    if (animation.playState === 'paused') {
        animation.play();
    } else {
        animation.reverse();
    }
});

function createAnimation(node) {
    return node.animate([
        { transform: 'translateY(0em)', opacity: 1 },
        { transform: 'translateY(-1em)', opacity: 0 }
    ], {
        duration: 200,
        fill: "both"
    });
}

function hideButtonValue(buttonValues) {
    buttonValues.forEach(item => {
        item.classList.contains('collapsible__action--hidden') ? item.style.display = 'none' : item.style.display = 'inline';
    });
}

function reverseButtonValue(buttonValues) {
    buttonValues.forEach(item => {
        item.classList.toggle('collapsible__action--visible');
        item.classList.toggle('collapsible__action--hidden');
    });

    return buttonValues;
}