// Functions and other fun stuff
const duplicateHTML = (element, quantity) => {
    //const content = element.innerHTML
    element.innerHTML = new Array(quantity).fill(element.innerHTML).join('')

//element.innerHTML = duplicate
}

// Conveyor effect
anime({
    targets: '.conveyor',
    translateX: '-50%',
    loop: true,
    duration: 2500,
    easing: 'linear'
})

// Wave effect
const wavePath = document.querySelector('#wave path');
const waveOffset = anime.setDashoffset(wavePath);
wavePath.setAttribute('stroke-dashoffset', waveOffset);
anime({
    targets: wavePath,
    strokeDashoffset: [0, waveOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

// Rotating crosses effect
// Duplicating the crosses
const crosses = document.querySelector('#crosses')
duplicateHTML(crosses, 10)
// Animating the crosses
anime({
    targets: '#crosses path',
    rotate: '2turn',
    delay: (el, i) => i * 150,
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
})

// Rotating dots effect
// Duplicating the dots
duplicateHTML(document.querySelector('#dots'), 40)
// Grabbing the dots
const dots = document.querySelectorAll('#dots .dot')
// We animate each dot separately by looping through and running anime on each individual one
dots.forEach(dot => {
    anime({
        targets: dot,
        rotate: (el, i) => anime.random(90, 360),
        duration: (el, i) => anime.random(250, 750),
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate'
    })
})

// Tunnel effect
anime({
    targets: '#tunnel circle',
    scale: 1.2,
    delay: (el, i) => i * 40,
    loop: true,
    duration: 350,
    direction: 'alternate',
    easing: 'easeInOutSine'
})

// Zigzag effect
const zigZagPath = document.querySelector('#zigzag path');
const zigZagOffset = anime.setDashoffset(zigZagPath);
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

// Flashing squares effect
anime({
    targets: '#flashes .flash',
    backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
    delay: (el, i) => anime.random(50, 1000),
    duration: 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
})

// Circles effect
// Duplicating the circles
duplicateHTML(document.querySelector('#circles'), 20)
// Animating the circles
anime({
    targets: '#circles .dot',
    scale: [0, 1.5],
    delay: (el, i) => i * 100,
    duration: 250,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
})

// Squares tunnel effect
anime({
    targets: '#squares rect',
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: [45, 0, -45],
    delay: (el, i) => 100 * i,
    duration: (el, i) => 750,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
})
