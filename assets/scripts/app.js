const BASIC_ATTACK = 'ATTACK';
const STRONG_ATTACK = 'STRONG ATTACK';
const LOG_EVENT_HERO_BASIC_ATTACK = 'LOG EVENT HERO BASIC ATTACK';
const LOG_EVENT_HERO_STRONG_ATTACK = 'LOG EVENT HERO STRONG ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'LOG EVENT MONSTER ATTACK';
const LOG_EVENT_HERO_HEAL = 'LOG EVENT HERO HEAL';
const LOG_EVENT_HERO_UNDO_DEATH = 'LOG EVENT HERO UNDO DEATH';
const log = [];
const maximumLife = 100;

const hero = {
    name : "Goku",
    maximumAttackPower : 30,
    maximumStrongAttackPower : 60,
    maximumHeal : 10,
    currentLifeBar : maximumLife
}
const monster = {
    name : "Cell",
    maximumAttackPower : 50,
    maximumHeal : 15,
    currentLifeBar : maximumLife
}

let isFinish;
let hasBonusLife;
let lastLogEntry;

init();

function init(){
    hero.currentLifeBar = maximumLife;
    monster.currentLifeBar = maximumLife;

    isFinish = false;
    hasBonusLife = true;

    adjustHealthBars(maximumLife);
}

function restartGame(){
    init();
    resetState(hero_sprites, 1000)
    resetState(monster_sprites, 1000)

    addBonusLife()
    enabledButton();
}

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
        setTimeout(()=>{
            if(confirm(`You've Win !, Restart the Game ?`)){
                restartGame()
            }
        }, 1300);
        isFinish = true;

    }else if(monster.currentLifeBar > 0 && hero.currentLifeBar <= 0){
        hero_sprites.dead()

        if(hasBonusLife){
            setTimeout(() => {
                if(confirm(`You're dead by now, but you still have 1 bonus life, are you want to use it?`)){
                    hasBonusLife = false;
            
                    removeBonusLife();
                    undoDeath();
                }else{
                    if(confirm(`You've Lost !, Restart the Game ?`)){
                        restartGame()
                    }
                }
            }, 1300)
        }else{
            setTimeout(()=>{
                if(confirm(`You've Lost !, Restart the Game ?`)){
                    restartGame()
                }
            }, 1300);
            isFinish = true;
        }
        
    }else if(monster.currentLifeBar <= 0 && hero.currentLifeBar <= 0){
        if(confirm(`It's a Draw !, Restart the Game ?`)){
            restartGame()
        }
        isFinish = true;
    }
}

function setModeAttack(mode){
    let maxAttack;
    let logAttack;
    const prevLifeBar = monster.currentLifeBar;

    maxAttack = mode === BASIC_ATTACK ? 
                hero.maximumAttackPower : 
                hero.maximumStrongAttackPower;

    logAttack = mode === BASIC_ATTACK ? 
                LOG_EVENT_HERO_BASIC_ATTACK: 
                LOG_EVENT_HERO_STRONG_ATTACK;

    disabledButton()

    // animate punch
    hero_sprites.punch()
    resetState(hero_sprites, 800)
    
    const demageToMonster = dealMonsterDamage(maxAttack);
    monster.currentLifeBar -= demageToMonster;
    cekWin()

    if(!isFinish){
        monsterResponse()
    }

    writeToLog({
        event : logAttack,
        target : 'MONSTER',
        dealtDemage : demageToMonster,
        prevTargetHealth : prevLifeBar,
        currentTargetHealth : monster.currentLifeBar
    });
}

function changeBtnProperties(btn, isDisabled){
    if(isDisabled){
        btn.disabled = true;
        btn.style.background = "grey";
    }else{
        btn.disabled = false;
        btn.style.background = "#ff0062";
    }
}

function disabledButton(){
    changeBtnProperties(attackBtn, true)
    changeBtnProperties(strongAttackBtn, true)
    changeBtnProperties(healBtn, true)
    changeBtnProperties(logBtn, true)
}

function enabledButton(){
    setTimeout(()=>{
        changeBtnProperties(attackBtn, false)
        changeBtnProperties(strongAttackBtn, false)
        changeBtnProperties(healBtn, false)
        changeBtnProperties(logBtn, false)
    }, 1000);
}

function monsterResponse(){
     // wait for 2.5 second for monster to respond
    setTimeout(function(){
        const prevLifeBar = hero.currentLifeBar;

        monster_sprites.kick()
        resetState(monster_sprites, 1200)

        const demageToHero = dealPlayerDamage(monster.maximumAttackPower);
        hero.currentLifeBar -= demageToHero;
        cekWin()

        enabledButton();

        writeToLog({
            event : LOG_EVENT_MONSTER_ATTACK,
            target : 'HERO',
            dealtDemage : demageToHero,
            prevTargetHealth : prevLifeBar,
            currentTargetHealth : hero.currentLifeBar
        });
    }, 2500);
}

function attack(){
    setModeAttack(BASIC_ATTACK);
}

function strongAttack(){
    setModeAttack(STRONG_ATTACK);
}

function heal(){
    const prevLifeBar = hero.currentLifeBar;

    disabledButton();

    // animate heal
    hero_sprites.heal()
    resetState(hero_sprites, 1500)

    const healValue = increasePlayerHealth(hero.maximumHeal)
    if(hero.currentLifeBar + healValue > maximumLife){
        hero.currentLifeBar = maximumLife
    }else{
        hero.currentLifeBar += healValue
    }
  
    cekWin()

    if(!isFinish){
        monsterResponse()
    }

    writeToLog({
        event : LOG_EVENT_HERO_HEAL,
        target : 'HERO',
        addedHealth : healValue,
        prevTargetHealth : prevLifeBar,
        currentTargetHealth : hero.currentLifeBar
    });
}

function undoDeath(){
    const prevLifeBar = hero.currentLifeBar;

    disabledButton();
            
    // animate heal
    hero_sprites.heal()
    resetState(hero_sprites, 1500)

    undoPlayerHealthAfterDeath(hero.maximumHeal)
    hero.currentLifeBar = 0 + hero.maximumHeal
    
    monsterResponse()

    writeToLog({
        event : LOG_EVENT_HERO_UNDO_DEATH,
        target : 'HERO',
        addedHealth : hero.maximumHeal,
        prevTargetHealth : prevLifeBar,
        currentTargetHealth : hero.currentLifeBar
    });
}

function writeToLog(data){

    const obj = {
        event : data.event,
        target : data.target,
        prevTargetHealth : data.prevTargetHealth,
        currentTargetHealth : data.currentTargetHealth
    };

    if( data.event === LOG_EVENT_HERO_BASIC_ATTACK  || 
        data.event === LOG_EVENT_HERO_STRONG_ATTACK || 
        data.event === LOG_EVENT_MONSTER_ATTACK){
            obj.dealtDemage = data.dealtDemage ?? null;

    }else if(data.event === LOG_EVENT_HERO_HEAL || data.event === LOG_EVENT_HERO_UNDO_DEATH){
            obj.addedHealth = data.addedHealth ?? null;
    }

    log.push(obj);
}

function showLog(){

    // ==> only print index 0, baceuse after i becoming 1 it will never again reach i++ hence it will still skip until forof ends
    // let i = 0;
    // for (const lg of log) {
    //     if(i === 1) continue;
    //     console.log(`${i}`);
    //     for (const key in lg) {
    //         if (key === 'event') {
    //             continue;
    //         }
    //         console.log(`${key} ==> ${lg[key]}`);
    //     }
    //     i++;
    // }

    // ==> everthing will be skipped except for console log "test" because it will never again reach i++ hence every index got skipped.
    let i = 0;
    for (const lg of log) {
        console.log('test');
        if(i === 0) continue;
        console.log(`${i}`);
        for (const key in lg) {
            if (key === 'event') {
                continue;
            }
            console.log(`${key} ==> ${lg[key]}`);
        }
        i++;
    }


    // ==> index 0 will skipped, the rest is still executed beacause i++ still gonna happen after every iteration
    // for (let index = 0; index < log.length; index++) {
    //     if(index == 0){
    //         continue;
    //     }

    //     const element = log[index];
    //     console.log(`#${index}`);
    //     for(const key in element){
    //         if(key === "event"){
    //             continue;
    //         }
    //         console.log(`${key} => ${element[key]}`);
    //     } 
    // }

    // ==>infinity loop (be carefull with while loop when using continue or break)
    // let index = 0;
    // do{
    //     console.log('test');
    //     if(index == 0){
    //         continue;
    //     }
    //     console.log(`${index}`)
    //     for (const key in log[index]) {
    //         if (key == 'event') {
    //             continue;
    //         }
    //         console.log(`${key} => ${log[index][key]}`);
    //     }
    //     index++;
    // }while(index < log.length);
   
   
}

attackBtn.addEventListener('click', attack)
strongAttackBtn.addEventListener('click', strongAttack)
healBtn.addEventListener('click', heal)
logBtn.addEventListener('click', showLog)