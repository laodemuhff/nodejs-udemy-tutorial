const maximumLife = 100;
let isFinish = false;

const hero = {
    name : "Goku",
    maximumAttackPower : 30,
    currentLifeBar : maximumLife
}

const monster = {
    name : "Cell",
    maximumAttackPower : 30,
    currentLifeBar : maximumLife
}

adjustHealthBars(maximumLife);

function resetState(sprites, timeout){
    // stand again after doing action
    setTimeout(() => {
        sprites.standing()
    }, timeout);
}

function cekWin(){
    // cek the result
    if(monster.currentLifeBar <= 0 && hero.currentLifeBar > 0){
        monster_sprites.dead()
        setTimeout(()=>{alert(`You've Win !`)}, 1300);
        isFinish = true;

    }else if(monster.currentLifeBar > 0 && hero.currentLifeBar <= 0){
        hero_sprites.dead()
        setTimeout(()=>{alert(`You've Lost !`)}, 1300);
        isFinish = true;
        
    }else if(monster.currentLifeBar <= 0 && hero.currentLifeBar <= 0){
        alert(`It's a Draw !`)
        isFinish = true;
    }
}

function attack(){
    // animate punch
    hero_sprites.punch()
    resetState(hero_sprites, 800)
    
    const demageToMonster = dealMonsterDamage(hero.maximumAttackPower);
    monster.currentLifeBar -= demageToMonster;
    cekWin()
    
    // wait for 2.5 second for monster to respond
    if(!isFinish){
        setTimeout(function(){
            monster_sprites.kick()
            resetState(monster_sprites, 1200)
    
            const demageToHero = dealPlayerDamage(monster.maximumAttackPower);
            hero.currentLifeBar -= demageToHero;
            cekWin()
        }, 2500);
    }
}

attackBtn.addEventListener('click', attack)