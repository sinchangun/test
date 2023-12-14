//intro_page2 -- circle_vis X,Y 이동
function page2Move(e) {

    let x = e.clientX;
    let y = e.clientY;
    let moveX = x * 0.01
    let moveY = y * 0.004
    /* console.log(`${x},${y}`) */

    $(".circle_vis img").css("transform", `translate(${moveX}vw, ${moveY}vh)`)
}

$(".intro_page2").mousemove(page2Move);



// inp-2mc_head,foot -- Color박스 stop.start
function inp2_mouseEnter(className) {
    $(className).mouseenter(function () {
        $(className).addClass("stopAni")
    })
    $(className).mouseleave(function () {
        $(className).removeClass("stopAni")
    })
}

inp2_mouseEnter(".inp-2mc_head")
inp2_mouseEnter(".inp-2mc_foot")


// inp-2mc_body>div -- 마우스 진입시 hover효과
let last_index = 0;
let start_setTime;
let selectPage_index;

$(".inp-2mc_body>div").mouseenter(function () {

    clearTimeout(start_setTime);

    let index = $(this).index()
    /* console.log(index) */

    $(".inp-2mc_body>div").removeClass("active")
    $(".inp-2mc_body>div").eq(index).addClass("active")

    if (index % 2 == 0) {
        $(".inp-2mc_head").addClass("stopAni")
        $(".inp-2mc_foot").removeClass("stopAni")
    } else {
        $(".inp-2mc_foot").addClass("stopAni")
        $(".inp-2mc_head").removeClass("stopAni")
    }


    // inp-2mc_body>div -- 해당 이미지 추출 circle_vis img에게 전달
    let inps_img = $(".inp-2mc_body>div").eq(index).find("img").attr("src")
    console.log(inps_img)

    if (last_index == index) {
        console.log("똑같은 index입니다.")
    } else {
        function setTime() {
            $(".circles .circle_vis").find("img").fadeOut()
            setTimeout(function () {
                    $(".circles .circle_vis").find("img").attr("src", inps_img)
                    $(".circles .circle_vis").find("img").fadeIn()
                },
                600)
        }
    }

    // settimeout 선언및 초기화
    start_setTime = setTimeout(setTime, 300);
    last_index = index;

    /* console.log(last_index) */

})

// inp-2mc_body>div -- 클릭시 클래스추가
$(".inp-2mc_body>div").click(function () {

    let index2 = $(this).index()

    let unSelectPage = $(".inp-2mc_body>div").not(this)


    $(".inp-2mc_body>div").addClass("endPage")
    $(".inp-2mc_body>div").eq(index2).addClass("selectPage")
    $(".intro_page2").addClass("selectPage")

    gsap.to($(this), {
        x: 5000,
        delay: 1
    })
    gsap.to(unSelectPage, {
        x: -5000,
        onComplete: function () {
            $(".ipt-2_follow").addClass("selectPage")
        }
    })

    if ($(".inp-2mc_head").hasClass("stopAni")) {
        $(".inp-2mc_head").removeClass("stopAni")
    }

    if ($(".inp-2mc_foot").hasClass("stopAni")) {
        $(".inp-2mc_foot").removeClass("stopAni")
    }

    selectPage_index = index2
})

// .ipt-2_follow 클릭시 클래스 생성
$(".ipt-2_follow").click(function () {

    if (!$(".ipt-2_follow").hasClass("active")) {
        $(this).addClass("active")
    }

})

// intro_page2 -- 마우스 이동시 ipt-2_follow,itp2_f_line,circle_vis 이동
$(".intro_page2").mousemove(function (e) {


    //x,y값 단위 변환및 사이즈변환
    let x2 = e.clientX;
    let y2 = e.clientY;

    let x2vw = (e.clientX / window.innerWidth) * 100;
    let y2vh = (e.clientY / window.innerHeight) * 100;

    let x2vw_reverse = 100 - x2vw;
    let x2vw_reverse_size2 = x2vw_reverse * 2;

    console.log(`${x2vw},${y2vh}`)

    //
    if ($(".ipt-2_follow").hasClass("active")) {
        $(".ipt-2_follow").css({
            "top": "-8vh",
            "left": "-8vh",
            "transform": `translate(${x2vw}vw, ${y2vh}vh)`,
        })
    }

    // f_line길이 삼각함수 이용 계산
    let f_lineX = window.innerWidth - x2;
    let f_lineY = (innerHeight / 2) - y2;
    let f_lineWidth = Math.sqrt(Math.pow(f_lineX, 2) + Math.pow(f_lineY, 2));
    // console.log(f_lineWidth)

    let f_lineAngle_radian = Math.atan2(f_lineY, f_lineX)
    let f_lineAngle_deg = (f_lineAngle_radian * 180) / Math.PI

    // console.log(f_lineAngle_deg)


    // x2vw에 따라서 나뉜 영역
    if ($(".ipt-2_follow").hasClass("active")) {

        $(".itp2_f_line").css({
            "width": `${f_lineWidth}vw`,
            "transform": `rotate(${f_lineAngle_deg}deg)`
        })

        if (x2vw > 75) {
            // console.log("75vw초과 영역입니다.")
        } else if (x2vw <= 75 && x2vw > 5) {
            // console.log("75vw이하 5vw초과 영역입니다.")
            $(".circle_vis").css({
                "border-radius": `${x2vw - 15}%`,
                "transform": `translateX(${x2vw - 65}vw)`
            })
            $(".circle_vis img").css({
                "left": `${-95 / 3 + x2vw_reverse * (1 / 3)}vw`
                /* 
                y1:95 x + y1*a = 0
                y2:35 x + y2*a = -20 
                x,a: 상수 y: 변수
                x: -95/3 , a: 1/3
                */
            })
        } else {
            $(".ipt-2_follow").removeClass("active")
            $(".ipt-2_follow").addClass("endPage")
            $(".circle_vis").css({
                "width": "200%"
            })
            $(".intro_page2").off("mousemove", page2Move)
            $(".intro_page2").addClass("endPage")
            // console.log("5vw이하 영역입니다.")

            gsap.to(".circle_vis", {
                filter: "blur(20px)",
                duration: 4,
                onComplete: function () {
                    $(".ipt2_sidebar").addClass("active")
                }
            })
        }


        if (x2vw > 50) {
            $(".circle_vis").css({
                "width": "90%",
            })
        } else if (x2vw <= 50 && x2vw > 5) {
            $(".circle_vis").css({
                "width": `${x2vw_reverse_size2 - 10}%`,
                // width를 이렇게 설정한 이유는 x2vw가 50이하일때 width가 처음엔 90퍼
                // 마우스를 왼쪽으로 최대로 옮기면 200% 가 되게 하기위해서 설정
                // 200%인 이유는 circles 가 50vw로 설정되어있기때문
            })
        } else {

        }
    }


})

// ipt2_s_head 영역 타이핑 효과
const vsTxt = `잠시만 기다려주세요 코드입력중 입니다.`
const vsHead_txt = `/* Head 영역이 시작됩니다. */`
const vsHeadCont_txt = `.head_cont`
let vsHeadCont_txtIn = `선택하신 영역은 [ About ] 입니다.`

let vsTxtStart = 1;
let txtIndex = 0;

let intervalVsTxt;
let intervalVsHeadTxt;
let intervalVsHeadContTxt;
let intervalVsHeadContTxtIn;

// ipt2_s_body 영역 타이핑 효과

/* Body 영역이 시작됩니다.
.body_cont
아래 링크가 완성되면 클릭해주세요 */

// 링크 <a href="${vsHeadCont_txtIn_name}"></a>


$(".vs_img").click(function () {

    let vsHeadCont_txtIn_name = $(".inp-2mc_body>div").eq(selectPage_index)
    .find(".inps_tit p").text()
    
    vsHeadCont_txtIn = `선택하신 영역은 [ ${vsHeadCont_txtIn_name} ] 입니다.`

    if (vsTxtStart) {
        
        $(".visualStudio").addClass("select")
        intervalVsTxt = setInterval(headTxt, 150)
        vsTxtStart = 0;

        let tlVsTxt = gsap.timeline();

        tlVsTxt.to("#vsHead_txt", {
            delay: 4,
            oncomplete: function () {
                intervalVsHeadTxt = setInterval(headTxtTitle, 150)
            }
        })
        tlVsTxt.to("#vsHeadCont_txt", {
            delay: 4,
            oncomplete: function () {
                intervalVsHeadContTxt = setInterval(headContTxt, 150)
            }
        })
        tlVsTxt.to(".vsh-div", {
            delay: 4,
            oncomplete: function () {
                $(".vsh-div").addClass("active")
                $("#vsHeadCont_txt").addClass("active")
                $("#vsHeadCont_txt2").addClass("start")
            }
        })

        tlVsTxt.to(".vsHeadCont", {
            delay: 3,
            oncomplete: function () {
                $(".vsh-div, #vsHeadCont_txt, #vsHeadCont_txt2").css({
                    "float": "none"
                })
                console.log(selectPage_index)
                console.log(vsHeadCont_txtIn_name)
                intervalVsHeadContTxtIn = setInterval(headContTxtIn, 150)
            }
        })
       
    }


})

function text(txtArea, inputTxt, intervalName, delay) {

    const txtAreaContainer = txtArea;

    txtAreaContainer.text(txtAreaContainer.text() + inputTxt[txtIndex]);
    txtIndex++

    //console.log(txtIndex)
    //console.log(inputTxt.length)

    if (txtIndex === inputTxt.length) {

        // 글자가 모두 다적힐시 setinterval stop. class 추가
        clearInterval(intervalName);
        console.log("실행되었습니다")
        txtAreaContainer.addClass("end")
        txtIndex = 0;

        setTimeout(function () {
            txtAreaContainer.addClass("delete")
        }, delay)
    }
}


// ipt2_s_head 영역 타이핑 효과함수
function headTxt() {
    text($("#vs_txt"), vsTxt, intervalVsTxt, 3500)
}

function headTxtTitle() {
    text($("#vsHead_txt"), vsHead_txt, intervalVsHeadTxt, 3500)
}

function headContTxt() {
    text($("#vsHeadCont_txt"), vsHeadCont_txt, intervalVsHeadContTxt, 3500)
}

function headContTxtIn() {
    text($("#vsHeadCont_txt2"), vsHeadCont_txtIn, intervalVsHeadContTxtIn, 3500)
}

// ipt2_s_body 영역 타이핑 효과함수