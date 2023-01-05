window.onload = function(){
    var timerContent, pageIdx = 1,
        pageBtn = document.querySelectorAll('nav > a'),
        pageMax = pageBtn.length;
    pageBtn.forEach((el) => {
      el.addEventListener('click',pageChange);
    }); 
    document.getElementById('angleleft').addEventListener('click',nextPrePage);
    document.getElementById('angleright').addEventListener('click',nextPrePage);
    function pageBtnReset(){
        document.querySelectorAll('nav > a')[pageIdx-1].classList.remove('active');
    }
    function pageIdxHandler(){
        pageIdx = (pageIdx + pageMax) % pageMax;
        if(pageIdx === 0) pageIdx = pageMax;
    }
    function pageChange(){
        if(this.classList.contains('active')) return false;
        pageBtnReset();
        pageIdx = Number(this.id.substr(1));
        showPage();
    } 
    function nextPrePage(){
        pageBtnReset();
        this.id == 'angleright' ? pageIdx++ : pageIdx-- ;
        pageIdxHandler();
        showPage();
    }
    function showPage(){
        document.querySelectorAll('nav > a')[pageIdx-1].classList.add('active');
        document.getElementById('contentPhone').style.backgroundImage = 'url("../images/05/big/a' + pageIdx +'.jpg")';
    }
    document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseenter',timerStop);
        el.addEventListener('mouseleave', timerGo);
    });
    function timerStop(){
        clearInterval(timerContent);
    }
    function timerGo(){
        timerContent = setInterval(function(){
            pageBtnReset();
            pageIdx++;
            pageIdxHandler();
            showPage();
        },2000);
        console.log(timerContent);
    }
    timerGo();

    // var a1 = document.getElementById("a1");
    // var a2 = document.getElementById("a2");
    // var a3 = document.getElementById("a3");
    // var a4 = document.getElementById("a4");
    // var a5 = document.getElementById("a5");
    // var phone = document.getElementById("contentPhone");
    // var angleleft = document.getElementById("angleleft");
    // var angleright = document.getElementById("angleright");
    // var pageIdx = 1;
    // a1.addEventListener("click", showPhoto);
    // a2.addEventListener("click", showPhoto);
    // a3.addEventListener("click", showPhoto);
    // a4.addEventListener("click", showPhoto);
    // a5.addEventListener("click", showPhoto);
    // angleleft.addEventListener("click", angleleftFn)
    // angleright.addEventListener("click", anglerightFn)
    // function showPhoto(){
    //     pageIdx = Number(this.id.substr(1));
    //     phone.style.backgroundImage = 'url("../images/05/big/' + this.id +'.jpg")';
    // }
    // function angleleftFn(){
    //     pageIdx = pageIdx - 1;
    //     if(pageIdx < 1) pageIdx = 5;
    //     phone.style.backgroundImage = 'url("../images/05/big/a' + pageIdx +'.jpg")';
    // }
    // function anglerightFn(){
    //     pageIdx = pageIdx + 1;
    //     if(pageIdx > 5) pageIdx = 1;
    //     phone.style.backgroundImage = 'url("../images/05/big/a' + pageIdx +'.jpg")';
    // }

    // var pageIdx = 1,
    //     pageBtn = document.querySelectorAll('nav > a'),
    //     pageMax = pageBtn.length;
    // pageBtn.forEach((el) => {
    //   el.addEventListener('click',pageChange);
    // });
    // document.getElementById('angleleft').addEventListener('click',nextPrePage);
    // document.getElementById('angleright').addEventListener('click',nextPrePage);
    // function pageChange(){
    //     pageIdx = Number(this.id.substr(-1));
    //     showPage();
    // }
    // function nextPrePage(){
    //     if(this.id == 'angleright') {
    //         pageIdx++;
    //         if(pageIdx > pageMax) pageIdx = 1
    //     } else {
    //         pageIdx--;
    //         if(pageIdx < 1) pageIdx = pageMax
    //     }
    //     // console.log(pageMax); console.log(pageIdx);
    //     showPage();
    // }
    // function showPage(){
    //     document.getElementById('contentPhone').style.backgroundImage = 'url("../images/05/big/a' + pageIdx +'.jpg")';
    // }
    
}