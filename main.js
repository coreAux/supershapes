
// Conveyor effect
anime({
    targets: '.conveyor',
    translateX: '-50%',
    loop: true,
    duration: 1500,
    easing: 'linear'
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
