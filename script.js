const data = [
  { id:1,name: "Распространенный", a: "2.4", b: "1.05", c: "2.5", d: "0.38" },
  { id:2,name: "Полунезависимый", a: "3.0", b: "1.12", c: "2.5", d: "0.35" },
  { id:3,name: "Встроенный", a: "3.6", b: "1.20", c: "2.5", d: "0.32" },
];

let tab = 1;

document.addEventListener("DOMContentLoaded", () => {

    ////табы
    let nav = document.querySelector('.nav'),
    navItem = document.querySelectorAll('.nav-item'),
    navLink = document.querySelectorAll('.nav-link'),
    currentTab = 0;
    tabs = document.querySelectorAll('.tab-item');

    function tab(){
        tabs.forEach((i)=>{i.classList.add('d-none')})
        tabs[currentTab].classList.remove('d-none')
    }

    tab();

    nav.addEventListener('click',(e)=>{
        currentTab = e.target.dataset.target;
        navLink.forEach((i)=>{i.classList.remove('active')})
        e.target.classList.add('active')
        tab()
    })





    /////Задание 1
    let 
    tabOneSelectType = document.getElementById('tabOneSelectType'),
    trudResult = document.getElementById('trudResult'),
    timeResult = document.getElementById('timeResult'),
    kolStrok = document.getElementById('kolStrok'),
    tabOneBtn = document.getElementById('tabOneBtn'),
    curSelect = 0,
    optionOneTab = tabOneSelectType.querySelector('option');
    

    tabOneSelectType.addEventListener('change',(e)=>{
        curSelect = e.target.value
    });

    tabOneBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        let trudr = data[curSelect].a * Math.pow(kolStrok.value,data[curSelect].b)
        trudResult.innerHTML = trudr.toFixed(1);

        let timer = data[curSelect].c * Math.pow(trudr,data[curSelect].d)
        timeResult.innerHTML = timer.toFixed(1);
    })


    ///////Задание 2


    const dataTwo = [
        { id:1,name: "Распространенный", a: "3.2", b: "1.05"},
        { id:2,name: "Полунезависимый", a: "3.0", b: "1.12" },
        { id:3,name: "Встроенный", a: "2.8", b: "1.20" },
      ];
      
      let listTwo = document.getElementById('listTwo'),
      tabTwoSelectType = document.getElementById('tabTwoSelectType'),
      trudResultTwo = document.getElementById('trudResultTwo'),
      kolStrokTwo = document.getElementById('kolStrokTwo'),
      timeResultTwo = document.getElementById('timeResultTwo'),
      itemAtr = document.querySelectorAll('.item-atr'),
      curTwoSelect = 0,
      ymnozhitel = 1,
      tabTwoBtn = document.getElementById('tabTwoBtn');


      tabTwoSelectType.addEventListener('change',(e)=>{
        curTwoSelect = e.target.value
        console.log(curTwoSelect);
    });
    
      listTwo.addEventListener('click',(e)=>{
          console.log(e.target)
          if (e.target.classList.contains('item-atr')){
            e.target.classList.add('text-danger')
            e.target.classList.add('font-weight-bold')
          }
         
      })


      tabTwoBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        itemAtr.forEach((e) => {
            if(e.classList.contains('text-danger')){
                console.log(e.dataset.value);
                ymnozhitel *= e.dataset.value;
            }
        })

        console.log(ymnozhitel);

        let trudrTwo = ymnozhitel * dataTwo[curTwoSelect].a * Math.pow(kolStrokTwo.value,dataTwo[curTwoSelect].b)
        trudResultTwo.innerHTML = trudrTwo.toFixed(1);
        console.log(trudrTwo);
        let timerTwo = data[curTwoSelect].c * Math.pow(trudrTwo,data[curTwoSelect].d)
        timeResultTwo.innerHTML = timerTwo.toFixed(1);
    })


    /////// Задание 3

    let currentOcenka = 0,
    curentSum = 0,
    ymnozhitelThree = 1,
    ymnozhitelFour = 1,
    lastTableSix = 0,
    lastTableSeven = 0,
    trudResultThree = document.getElementById('trudResultThree'),
    timeResultThree = document.getElementById('timeResultThree'),
    Eresult = document.getElementById('Eresult'),
    kolStrokThree = document.getElementById('kolStrokThree'),
    tabThreeSelectType = document.getElementById('tabThreeSelectType'),
    ocenkaItem = document.querySelectorAll('.ocenka-item'),
    listThree = document.getElementById('listThree'),
    itemAtrThree = document.querySelectorAll('.item-atr-listThree'),
    itemAtrFour = document.querySelectorAll('.item-atr-listFour'),
    itemAtrFive = document.querySelectorAll('.item-atr-listFive'),
    tabThreeBtn = document.getElementById('tabThreeBtn');


    tabThreeSelectType.addEventListener('change',(e)=>{
        currentOcenka = e.target.value

        ocenkaItem.forEach((it)=>{it.classList.add('d-none')})
        ocenkaItem[currentOcenka].classList.remove('d-none');
    });

    listThree.addEventListener('click',(e)=>{
        console.log(e.target)
        if (e.target.classList.contains('item-atr-listThree')){
          e.target.classList.add('text-danger')
          e.target.classList.add('font-weight-bold')
        }
       
    })

    listFour.addEventListener('click',(e)=>{
        console.log(e.target)
        if (e.target.classList.contains('item-atr-listFour')){
          e.target.classList.add('text-danger')
          e.target.classList.add('font-weight-bold')
        }
    })

    
    listFive.addEventListener('click',(e)=>{
        console.log(e.target)
        if (e.target.classList.contains('item-atr-listFive')){
          e.target.classList.add('text-danger')
          e.target.classList.add('font-weight-bold')
        }
    })

    
    tabThreeBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        itemAtrThree.forEach((e) => {
            if(e.classList.contains('text-danger')){
                console.log(e.dataset.value);
                curentSum += +e.dataset.value;
            }
        })

        itemAtrFour.forEach((e) => {
            if(e.classList.contains('text-danger')){
                console.log(e.dataset.value);
                ymnozhitelThree *= e.dataset.value;
                lastTableSix = e.dataset.value;
            }
        })

        itemAtrFive.forEach((e) => {
            if(e.classList.contains('text-danger')){
                console.log(e.dataset.value);
                ymnozhitelFour *= e.dataset.value;
                lastTableSeven = e.dataset.value;
            }
        })


        let EresultRes = 0.92 + curentSum

        console.log(EresultRes);

        Eresult.innerHTML = EresultRes.toFixed(1);


        //предварительная  0 детальная 1
        // list-five -детал оценка - табл7

        let a = 0;
        currentOcenka ? a = 2.45 : a= 2.94
        console.log(currentOcenka);
        console.log(a);
        
        
        if(currentOcenka == 0){
            console.log('ymnozhitelThree',ymnozhitelThree.toFixed());
            console.log('EresultRes',EresultRes);
            console.log('kolStrokThree',kolStrokThree.value);
            console.log('a',a);
         

            let trudrThree = ymnozhitelThree.toFixed() * a * Math.pow(kolStrokThree.value,EresultRes)
            trudResultThree.innerHTML = trudrThree.toFixed();

            console.log('trudrThree',trudrThree);

            let timerThree = lastTableSix *   3.67 * Math.pow(trudrThree,(0.28+0.2*(EresultRes-0.91)))
            timeResultThree.innerHTML = timerThree.toFixed();

            
        } else {

            let trudrThree = ymnozhitelFour * a * Math.pow(kolStrokThree.value,EresultRes)
            trudResultThree.innerHTML = trudrThree.toFixed(1);

            let timerThree = lastTableSeven *   3.67 * Math.pow(trudrThree,(0.28+0.2*(EresultRes-0.91)))
            timeResultThree.innerHTML = timerThree.toFixed(1);

            console.log('*******************************');
            console.log('ymnozhitelThree',ymnozhitelThree.toFixed());
            console.log('EresultRes',EresultRes);
            console.log('kolStrokThree',kolStrokThree.value);
            console.log('a',a);
        }
     
     
       
    })

      
});
