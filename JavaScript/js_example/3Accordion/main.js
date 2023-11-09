let acc = document.getElementsByClassName("accordion");
console.log(acc[0]);    
console.log(acc.length)// 배열안의 값의 수

for(let i=0; i<acc.length; i++){ 
    //[1] i= 0 [2] i<acc.length [3] 실행문 [4]i++ 다시 [1]
    acc[i].addEventListener('click',function(){
        console.log(i)
        this.classList.toggle("active")

        let panel = this.nextElementSibling;// 나의 다음요소(동생)

        if(panel.style.maxHegiht){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px"
    // scrollHegiht = 숨어있는 높이값을 포함한 높이값을 찾아준다.
        }
    })
    // 위에 i 는 결국 제이쿼리의 this.index()와 같은 의미를 가지게된다.
    //addEventListener("click") 제이쿼리 .click과같음
}