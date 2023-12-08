
$(".intro_page2").mousemove(function(e){

    x=e.clientX;
    y=e.clientY;
    moveX = x * 0.1
    moveY = y * 0.05
    console.log(`${x},${y}`)

    $(".circle_vis img").css("transform", `translate(${moveX}px, ${moveY}px)`)
})

function inp2_mouseEnter (className){
    $(className).mouseenter(function(){
        $(className).addClass("stopAni")
    })
    $(className).mouseleave(function(){
        $(className).removeClass("stopAni")
    })
}

inp2_mouseEnter(".inp-2mc_head")
inp2_mouseEnter(".inp-2mc_foot")

$(".inp-2mc_body div").mouseenter(function(){
    let index = $(this).index()
    console.log(index)
    $(".inp-2mc_body div").removeClass("active")
    $(".inp-2mc_body div").eq(index).addClass("active")

    if(index % 2 == 0 ){
        $(".inp-2mc_head").addClass("stopAni")
        $(".inp-2mc_foot").removeClass("stopAni")
    }else{
        $(".inp-2mc_foot").addClass("stopAni")
        $(".inp-2mc_head").removeClass("stopAni")
    }
})
