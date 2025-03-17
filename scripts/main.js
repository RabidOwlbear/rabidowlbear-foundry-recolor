const defColor = {
  module: {
    main: '#cf337b',
    bright: '#fa1eb8',
    dark: '#6b2780',
    darkAlt: '#372764',
    glow: ' #d20074',
    pause: '#05c2db',
    side: 'rgba(46, 0, 51, 0.362)',//'rgba(46, 0, 51, 0.719)',
    header: 'rgba(110, 1, 86, 0.5)',
    whisper: '#b133e2da',
    sidebarBgA: '#cf337ba0',
    sidebarBgB: '#6b2780a0',
    sidebarBgC: '#372764a0'
  },
  foundry: {
    main: '#ff6400',
    bright: '#FF0000',
    glow: '#ff6400',
    dark: '#782e22',
    side: '#222222'
  },
  pauseGlow: 'flicker 2.5s infinite alternate',
  pauseGlowAlt: `0 0 40px var(--pause-color)`
};

//change foundry logo
const logo = document.querySelector('#logo');
logo.src = 'modules/rabidowlbear-foundry-recolor/image/logo/fvtt-logo-b.webp';
// console.log('logo', logo);
//add text logo to pause div
const pauseDiv = document.querySelector('#pause');
const logoSub = document.createElement('h4');
pauseDiv.appendChild(logoSub);

Hooks.once('init', async function () {
  game.settings.register('rabidowlbear-foundry-recolor', 'useDefaultColor', {
    name: 'Use FVTT Default Colors',
    hint: 'Use FVTT Default Colors',
    scope: 'client',
    type: Boolean,
    default: false,
    config: true,
    onChange: refresh
  });
  game.settings.register('rabidowlbear-foundry-recolor', 'disableGlow', {
    name: 'Disable Pause Glow Animation',
    hint: 'Disable Pause Glow Animation',
    scope: 'client',
    type: Boolean,
    default: false,
    config: true,
    onChange: refresh
  });
});

Hooks.once('ready', refresh);

Hooks.on('renderPause', (app, html, options) => {
  if (options.paused) {
    //html.find("img")[0].src = (game.settings.get("custom-pause", "chooseFile"))
    document.querySelector('#pause img').src = 'modules/rabidowlbear-foundry-recolor/image/pause-ring/80sring.webp';
  }
});

function refresh() {
  if (game.settings.get('rabidowlbear-foundry-recolor', 'useDefaultColor')) {
    document.documentElement.style.setProperty('--main-color', defColor.foundry.main);
    document.documentElement.style.setProperty('--bright-color', defColor.foundry.bright);
    document.documentElement.style.setProperty('--dark-color', defColor.foundry.dark);
    document.documentElement.style.setProperty('--glow-color', defColor.foundry.glow);
    document.documentElement.style.setProperty('--sidebar-color', defColor.foundry.side);
    pauseToggle();
  } else {
    document.documentElement.style.setProperty('--main-color', defColor.module.main);
    document.documentElement.style.setProperty('--bright-color', defColor.module.bright);
    document.documentElement.style.setProperty('--dark-color', defColor.module.dark);
    document.documentElement.style.setProperty('--darkAlt-color', defColor.module.darkAlt);
    document.documentElement.style.setProperty('--glow-color', defColor.module.glow);
    document.documentElement.style.setProperty('--pause-color', defColor.module.pause);
    document.documentElement.style.setProperty('--sidebar-color', defColor.module.side);
    document.documentElement.style.setProperty('--header-color', defColor.module.header);
    document.documentElement.style.setProperty('--sidebar-bg-a', defColor.module.sidebarBgA);
    document.documentElement.style.setProperty('--sidebar-bg-b', defColor.module.sidebarBgB);
    document.documentElement.style.setProperty('--sidebar-bg-c', defColor.module.sidebarBgC);
    pauseToggle();
  }
}
function pauseToggle() {
  if (game.settings.get('rabidowlbear-foundry-recolor', 'disableGlow')) {
    document.documentElement.style.setProperty('--flicker', '');
    document.documentElement.style.setProperty('--pause-glow', defColor.pauseGlowAlt)
  } else {
    document.documentElement.style.setProperty('--flicker', defColor.pauseGlow);
    document.documentElement.style.setProperty('--pause-glow', 'none')
  }
}
