 /* intro_page1 영역 gsap */

 let tl = gsap.timeline();
 let tl_arrow = gsap.timeline();

 tl.from(".itp-1_desc1", {
     fontSize: "30px",
     y: 20,
     x: -20,
     // duration:1,
     opacity: 0,
     rotate: -3,
     // delay:0.5,
 })
 tl.from(".itp-1_desc2", {
     fontSize: "30px",
     y: 20,
     x: -20,
     // duration:1,
     opacity: 0,
     rotate: -3,
     // delay:0.5,
 })

 tl.from(".itp-1_desc3", {
     fontSize: "30px",
     y: 20,
     x: -20,
     // duration:1,
     opacity: 0,
     rotate: -3,
     // delay:0.5,
 })
 tl.from(".itp-1_desc4", {
     fontSize: "30px",
     y: 20,
     x: -20,
     // duration:1,
     opacity: 0,
     rotate: -3,
     // delay:0.5,
 })

 tl.from(".loadingBar", {
     x: 20,
     // duration:1,
     opacity: 0,
     // delay:1
 })

 tl.to(".lodingbar_active", {
     width: 300,
     // duration:1,
     // delay:1,
     onComplete: function () {


         // arrow_animation
         tl_arrow.to(".itp-1_left_arrow .third_arrow", {
             duration: 4,
             y: -500,
             opacity: 0,
             force3D: true
         })

         tl_arrow.to(".itp-1_right_arrow .third_arrow", {
             duration: 4,
             opacity: 0,
             y: -500,
             force3D: true
         }, "<")

         tl_arrow.to(".itp-1_left_arrow .second_arrow", {
             duration: 4,
             opacity: 0,
             y: -600,
             force3D: true
         }, "-=3.8")

         tl_arrow.to(".itp-1_right_arrow .second_arrow", {
             duration: 4,
             opacity: 0,
             y: -600,
             force3D: true
         }, "<")


         tl_arrow.to(".itp-1_left_arrow .first_arrow", {
             duration: 4,
             opacity: 0,
             y: -720,
             force3D: true
         }, "-=3.8")

         tl_arrow.to(".itp-1_right_arrow .first_arrow", {
             duration: 4,
             opacity: 0,
             y: -720,
             force3D: true
         }, "<")

         //loading_end 추가시
         $(".section1").addClass("loading_end")
         tl.to(".itp-1_desc1", {
             fontSize: "10px",
             duration: 0.3,
             y: -30,
             opacity: 0,
             rotate: 3,
         })
         tl.to(".itp-1_desc2", {
             fontSize: "10px",
             duration: 0.3,
             y: -30,
             opacity: 0,
             rotate: 3,
         }, "-=0.2")
         tl.to(".itp-1_desc3", {
             fontSize: "10px",
             duration: 0.3,
             y: -30,
             opacity: 0,
             rotate: 3,
         }, "-=0.2")
         tl.to(".itp-1_desc4", {
             fontSize: "10px",
             duration: 0.3,
             y: -30,
             z: 0,
             force3D: true,
             opacity: 0,
             rotate: 3,
         }, "-=0.2")
         tl.to(".lodingbar_active", {
             duration: 0.4,
             width: 0,
             opacity: 0,
         }, "-=0.3")
         tl.to(".loadingBar", {
             duration: 0.4,
             width: 0,
             opacity: 0,
         }, "<")
     }
 })

 /* intro_page2 영역 gsap */

 let tl2 = gsap.timeline();

 tl2.from(".circles", {
     delay: 4.5,
     duration: 0.5,
     y: 1400,
 })
 tl2.to(".circle_mid", {
     delay: 0.5,
     opacity: 1
 })
 tl2.to(".circle_out", {
     delay: 0.5,
     opacity: 1
 })

 tl2.to(".intro_page2 .intro_title .itp-2_arrow", {
     opacity: 1,
 }, "<")

 tl2.to(".circles", {
     width:"120vh",
     height:"120vh",
     duration: 3,
     x: "35vw",
     y:"-35vh",
     onComplete: function () {
         $(".inp-2mc_head").addClass("circle_end")
         $(".inp-2mc_body").addClass("circle_end")
         $(".inp-2mc_foot").addClass("circle_end")
     }
 })

 // arrow_animation2
 tl2.to(".itp-2_left_arrow .third_arrow2", {
     duration: 1.5,
     y: -700,
     opacity: 0,
     force3D: true,
 }, "<")

 tl2.to(".itp-2_right_arrow .third_arrow2", {
     duration: 1.5,
     opacity: 0,
     y: -700,
     force3D: true,
 }, "<")

 tl2.to(".itp-2_left_arrow .second_arrow2", {
     duration: 1.5,
     opacity: 0,
     y: -625,
     force3D: true,
 }, "<")

 tl2.to(".itp-2_right_arrow .second_arrow2", {
     duration: 1.5,
     opacity: 0,
     y: -625,
     force3D: true,
 }, "<")


 tl2.to(".itp-2_left_arrow .first_arrow2", {
     duration: 1.5,
     opacity: 0,
     y: -550,
     force3D: true,
 }, "<")

 tl2.to(".itp-2_right_arrow .first_arrow2", {
     duration: 1.5,
     opacity: 0,
     y: -550,
     force3D: true,
 }, "<")

 tl2.fromTo(".inp_section1", {
     opacity: 0,
     x: "50vw"
 }, {
     opacity: 1,
     x: "6vw",
 })

 tl2.fromTo(".inp_section2", {
      opacity: 0,
     x: "50vw"
 }, {
     opacity: 1,
     x: "4vw",
 }, "-=0.3")

 tl2.fromTo(".inp_section3", {
     opacity: 0,
     x: "50vw"
 }, {
     opacity: 1,
     x: "2vw",
 }, "-=0.3")

 tl2.fromTo(".inp_section4", {
     opacity: 0,
     x: "50vw"
 }, {
     opacity: 1,
     x: "0",
 }, "-=0.3")
