let header = document.querySelector('.sticky-nav-header');
let menu = document.querySelector('.sticky-nav-menu');

window.addEventListener('scroll', debounce(handleNav));
/*
javascrip의 모든 객체, 전역함수, 전역 변수들은 자동으로 window 객체의 property가 된다.
window 객체의 메소드는 전역 함수이며, window 객체의 프로퍼티는 전역 변수가 됩니다.
문서 객체 모델(DOM)의 요소들도 모두 window 객체의 프로퍼티가 됩니다.

debounce와 Throttle은 이벤트를 제어하는 방법으로, 과도한 이벤트의 발생이 성능 저하를 초래하지 않도록 함
이벤트를 그룹화하여 연이어 호출되는 함수들 중 마지막 함수만 호출하도록 하는 기술
이벤트를 그룹화하여 특정 시간이 지난 후 하나의 이벤트만 발생하게 한다. 연이어 호출되는 함수들 중
 마지막 함수 또는 제일 처음 함수만 호출되도록 하는 것.
*/

function handleNav() {
  let isAtTop = header.offsetHeight -menu.offsetHeight -window.scrollY < 0 ;
  // => header의 길이 - 메뉴 길이 - 스크롤 크기가 0보다 작아지면 fixed 실행. 
  //offsetHeight = height + padding + border 
  // offsetHeight
  //window.scrollY 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환
  let method = isAtTop ? 'add' : 'remove';
  
    menu.classList[method]('fixed');
  // DOMTokenList를 반환하는 읽기 전용 프로퍼티이다.
  // classList 사용은 공백으로 구분된 문자열인 element.className을 통해 엘리먼트의
  // 클래스 목록에 접근하는 방식을 대체하는 간편한 방법이다.
}

function debounce(laFonction, wait = 15, immediate = true){
  let timeout; // wait = 15(millisecond)이내에 함수가 반복 호출될 경우 timeout이 clearTimeout되므로 실행되지 않습니다.

  return function(){
    let context = this, args = arguments;

    let later = function() {
      timeout = null;
      !immediate && laFonction.apply(context, args); //apply()메소드는 주어진 this값과 배열로 제공되는 argument로 함수를
    //호출합니다. call()은 함수에 전달된 인수 리스트를 받는데 비해 apply()는 인수들의 단일 배열을 받는다는 점입니다.
    };
   
    let callNow = immediate && !timeout; //

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    callNow && laFonction.apply(context, args);
                                                  
  }
}
/* 
debounce(콜백함수, 시간)메소드는 이벤트에 의해 특정함수가 여러번 반복 실행될 경우에 사용하며 정해진 지연시간동안
반복된 호출을 딱 1번만 호출하도록 제어


*/