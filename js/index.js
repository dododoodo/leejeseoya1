AOS.init();
	/* 주석부분과 같이 AOS API - Global Setting 가능
	AOS.init({
		offset: 120,
		delay: 0,
		duration: 400,
		easing: 'ease',
		once: false,
		mirror: false,
		anchorPlacement: 'top-bottom'
	});    
	*/
    
var myHeader = document.getElementById("header")

// console.log (document.getElementById("header"));
myHeader.onmouseover = function () {
    // console.log(this);
    // console.log(myHeader);
    this.classList.add("over");
    //this.style.backgroundColor = "white";

}
myHeader.onmouseout = function () {
    this.classList.remove("over");
    //console.log(this);
    //this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

// 스크롤 이벤트
header.classList.add('show');
header.classList.add('hide');

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
        myHeader.style.top = "-100px";
    }
    else {
        myHeader.style.top = "0";

    }
});

// 스크롤에 따른 html 불러오기

// 요소를 가져옴
const myElement = document.getElementById('overview1');

// 스크롤 이벤트를 감지하여 위치를 계산하고 요소를 나타내거나 숨김
window.addEventListener('scroll', function() {
    // 스크롤 위치 계산
    const scrollPosition = window.scrollY + 400;

    // 요소 위치 계산
    const elementPosition = myElement.getBoundingClientRect().top + window.scrollY + myElement.offsetHeight / 2;

    // 스크롤 위치와 요소 위치를 비교하여 요소를 나타내거나 숨김
    if (scrollPosition > elementPosition) {
        myElement.classList.add('visible');
        myElement.classList.remove('hidden');
    } else {
        myElement.classList.add('hidden');
        myElement.classList.remove('visible');
    }
});

// 요소를 가져옴
const myElement1 = document.getElementById('overview2');

// 스크롤 이벤트를 감지하여 위치를 계산하고 요소를 나타내거나 숨김
window.addEventListener('scroll', function() {
    // 스크롤 위치 계산
    const scrollPosition = window.scrollY + 700;

    // 요소 위치 계산
    const elementPosition = myElement1.getBoundingClientRect().top + window.scrollY + myElement.offsetHeight / 2;

    // 스크롤 위치와 요소 위치를 비교하여 요소를 나타내거나 숨김
    if (scrollPosition > elementPosition) {
        myElement1.classList.add('visible');
        myElement1.classList.remove('hidden');
    } else {
        myElement1.classList.add('hidden');
        myElement1.classList.remove('visible');
    }
});


// 스크롤 시 이미지 전환
window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset; // 현재 스크롤 위치
    var section = document.getElementById('sec2'); // 특정 섹션 요소

    var sectionPosition = section.offsetTop; // 특정 섹션의 상단 위치
    var sectionHeight = section.offsetHeight; // 특정 섹션의 높이
    var sectionBottomPosition = sectionPosition + sectionHeight; // 특정 섹션의 하단 위치

    var triggerOffset = 30; // 이미지 변경을 위한 추가적인 스크롤 오프셋

    if (currentPosition > sectionPosition + triggerOffset) { // 특정 섹션을 지나면
        section.style.backgroundImage = "url('./img/fb2.png')"; // 배경 이미지 변경
    } else {
        section.style.backgroundImage = "url('./img/fb1.png')"; // 기존 배경 이미지로 복원
    }
});


// 페이드 업 문구

const animateUpItems = document.querySelectorAll(".fade-in");

function animateUp() {
    animateUpItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop - windowHeight <= 0) {
        item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", animateUp);