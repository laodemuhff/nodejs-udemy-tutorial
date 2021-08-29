// animation clips
const hero_standing_animation = "assets/sprites/goku/state-normal-2/standing-animation.png";
const hero_state_punch_animation = "assets/sprites/goku/state-punch/state-punch-animation.png";
const hero_state_dead_animation = "assets/sprites/goku/state-dead/dead-animation.png";
const hero_state_heal_animation = "assets/sprites/goku/state-heal/state-heal-animation.png";
const monster_standing_animation = "assets/sprites/cell/standing/standing-animation.png";
const monster_state_kick_animation = "assets/sprites/cell/kick/state-kick-animation.png";
const monster_state_dead_animation = "assets/sprites/cell/demaged/dead-animation.png";

let currentHeroAnimation;
let currentMonsterAnimation;

const hero_standing_options = {
    width: 100,
    height: 135,
    frameHeight: 133.5,
    frames: 4,
    clip: hero_standing_animation,
    elementId : "hero-sprites",
    timer: 140
}

const hero_state_punch_options = {
    width: 145,
    height: 145,
    frameHeight: 135,
    frames: 4,
    clip: hero_state_punch_animation,
    elementId : "hero-sprites",
    timer: 200
}

const hero_state_dead_options = {
    width: 164,
    height: 132,
    frameHeight: 135,
    frames: 7,
    clip: hero_state_dead_animation,
    elementId : "hero-sprites",
    timer: 170
}

const hero_state_heal_options = {
    width: 110,
    height: 158,
    frameHeight: 157,
    frames: 5,
    clip: hero_state_heal_animation,
    elementId : "hero-sprites",
    timer: 210
}

const monster_standing_options = {
    width: 113,
    height: 182,
    frameHeight: 193.5,
    frames: 4,
    clip: monster_standing_animation,
    elementId : "monster-sprites",
    timer: 140
}

const monster_state_kick_options = {
    width: 206,
    height: 182,
    frameHeight: 179,
    frames: 7,
    clip: monster_state_kick_animation,
    elementId : "monster-sprites",
    timer: 150
}

const monster_state_dead_options = {
    width: 216,
    height: 182,
    frameHeight: 163,
    frames: 7,
    clip: monster_state_dead_animation,
    elementId : "monster-sprites",
    timer: 180
}

const hero_sprites = {
    standing : () => {
        currentHeroAnimation = animate(hero_standing_options, currentHeroAnimation)
    },

    punch : () => {
        currentHeroAnimation = animate(hero_state_punch_options, currentHeroAnimation)
    },

    dead : () => {
        currentHeroAnimation = animate(hero_state_dead_options, currentHeroAnimation)
        setTimeout(()=>{clearInterval(currentHeroAnimation)},1300);
    },

    heal : () => {
        currentHeroAnimation = animate(hero_state_heal_options, currentHeroAnimation)
    }
};

const monster_sprites = {
    standing : () => {
        currentMonsterAnimation =  animate(monster_standing_options, currentMonsterAnimation)
    },

    kick : () => {
        currentMonsterAnimation =  animate(monster_state_kick_options, currentMonsterAnimation)
    },

    dead : () => {
        currentMonsterAnimation = animate(monster_state_dead_options, currentMonsterAnimation)
        setTimeout(()=>{clearInterval(currentMonsterAnimation)},1300);
    }
};

function animate (options, prevAnimation) {
    clearInterval(prevAnimation);
    
    var animation, i = 0,
    element = document.getElementById(options.elementId);

    element.style.width = options.width + "px";
    element.style.height = options.height + "px";
    element.style.backgroundImage = "url(" + options.clip + ")";
    // element.style.backgroundColor = "white";
    
    animation = setInterval(function () {
        if (i >= options.frames) {
            i = 0;
        }
        element.style.backgroundPosition = "0px -" + i * options.frameHeight + "px";
        i++;
    }, options.timer);
    
    return animation
}

hero_sprites.standing()
monster_sprites.standing()