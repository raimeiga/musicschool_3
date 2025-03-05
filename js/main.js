$(function() {
 
 // ハンバーガー
 $('.c-hamburger').click(function(){
   $(this).toggleClass('active')
   $('.l-header-nav').toggleClass('active')
 })

 $('.l-header-nav__lists a').click(function(){
   $('.c-hamburger').removeClass('active')
   $('.l-header-nav').removeClass('active')
 });
 
 
 // FVのスライダー
 $('.js-slider').slick({ 
  // centerMode: true,
   autoplay: false, 
   arrows: true,
   slidesToShow: 3, // 3枚ずつ表示
   slidesToScroll: 1, // 1枚ずつスクロール
   prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',  
   nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
   responsive: [
     {
       breakpoint: 768,
       settings: {      
         slidesToShow: 1, // 1枚表示
         slidesToScroll: 1,
         prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev-sp.svg" alt="Previous"></button>',  
         nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next-sp.svg" alt="Next"></button>',     
       }
     }
   ]
 });

 // アコーディオンメニューの初期化とクリックイベント
 $('.p-qa-list__a').hide(); // 初期状態で非表示

 $('.p-qa-list__q').on('click', function() {
   $(this).toggleClass('active'); // 矢印の回転を制御
   // $(this).addClass('active'); // 矢印の回転を制御
   $(this).next('.p-qa-list__a').slideToggle(); // 対応する要素を開閉
 });

 $('.p-qa-list__a').on('click', function() {
   $(this).slideUp(); // 閉じる
   $(this).prev('.p-qa-list__q').removeClass('active'); // 矢印をリセット
 });

 // トップに戻るボタンの表示・非表示の切り替え
 // $(window).on('scroll', function() {
 //   if ($(this).scrollTop() > 200) {
 //     $('.c-top-back-btn, .c-btn').addClass('active');
 //   } else {
 //     $('.c-top-back-btn, .c-btn').removeClass('active');
 //   }
 // });


 $(window).on('scroll', function() {
  const scrollTop = $(this).scrollTop();
  const footerOffset = $('footer').offset().top; // footerの上端の位置を取得
  const windowHeight = $(window).height();

  console.log("Footer offset:", footerOffset); // footerの位置をログに出力
  
  // スクロール位置が200px以上の場合
  if (scrollTop > 200) {
    $('.c-top-back-btn, .c-btn,.c-top-back-btn--91-79,.c-top-back-btn--30-18').addClass('active');
  } else {
    $('.c-top-back-btn, .c-btn,.c-top-back-btn--91-79,.c-top-back-btn--30-18').removeClass('active');
  }

  // トップに戻るボタン、問い合わせボタン（footerまでスクロールした場合）
  if (scrollTop >= footerOffset - windowHeight) { // footerの高さを278に設定
    $('.c-top-back-btn--91-79').addClass('fixed-position-long'); // footerの上端から上部9.1remに固定
    $('.c-top-back-btn--30-18').addClass('fixed-position-short'); // footerの上端から上部9.1remに固定
    $('.c-btn').addClass('fixed-position-con'); 
   } else {
    $('.c-top-back-btn--91-79').removeClass('fixed-position-long'); // footerの上端から上部9.1remに固定
    $('.c-top-back-btn--30-18').removeClass('fixed-position-short'); // footerの上端から上部9.1remに固定
    $('.c-btn').removeClass('fixed-position-con'); 
  }
});
 
 // SimpleBarの初期化
 // const tableWrap = document.querySelector('.p-plan__table-wrap');
 // if (tableWrap) {
 //   new SimpleBar(tableWrap, {
 //     autoHide: false,  // スクロールバーを常に表示
 //     scrollbarMaxSize: 120, // スクロールバーの最大サイズ  
 //   });
 // }

// 1remのピクセル値を取得
const remToPx = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
// rem値をピクセルに変換して設定
const tableWrap = document.querySelector('.p-plan__table-wrap');
if (tableWrap) {
  new SimpleBar(tableWrap, {
    autoHide: false,  // スクロールバーを常に表示
    // scrollbarMaxSize: remToPx(10), // 10remをpxに変換して指定
  });
}

});

 // トップに戻るボタン、問い合わせボタン
//   $(window).on('scroll', function() {
//   var footerOffset = $('footer').offset().top;  // フッターの位置
//   var scrollPosition = $(window).scrollTop() + $(window).height();  // 現在のスクロール位置 + ウィンドウの高さ
//   var isPC = $(window).width() > 767;  // PC画面かSP画面かを判定

//   // 要素の取得
//   var topBackBtn91_79 = $('.c-top-back-btn--91-79');  // トップに戻るボタン（91/79）
//   var topBackBtn30_18 = $('.c-top-back-btn--30-18');  // トップに戻るボタン（30/18）
//   var contactBtn = $('.c-btn--fixed');  // お問い合わせボタン

//   // フッターに到達しているかチェック
//   if (scrollPosition >= footerOffset) {
//       var footerHeight = $('footer').outerHeight();  // フッターの高さ

//       if (isPC) {
//           // PC画面の場合
//           topBackBtn91_79.css({
//               position: 'absolute',
//               // bottom: 'calc(' + footerHeight + 'px + (91 / 1080 * 100vw))',  // フッター上端から指定の余白分上に配置
//               bottom: `calc(${footerHeight}px + 9.1rem)`, // フッター上端から9.1rem上に配置
//               right: '10rem'
//           });

//           topBackBtn30_18.css({
//               position: 'absolute',
//               // bottom: 'calc(' + footerHeight + 'px + (30 / 1080 * 100vw))',  // フッター上端から指定の余白分上に配置
//               bottom: `calc(${footerHeight}px + 3rem)`, // フッター上端から3rem上に配置
//               right: '10rem'
//           });

//           // お問い合わせボタンは常にフッターの上に配置
//       contactBtn.css({
//        position: 'absolute',
//        bottom: footerHeight + 'px',  // フッターの上端にピタリと配置
//        right: '0'
//    });

//       } else {
//           // SP画面の場合
//           topBackBtn91_79.css({
//               position: 'absolute',
//               // bottom: 'calc(' + footerHeight + 'px + (79 / 375 * 100vw))',  // フッター上端からSP用の余白分上に配置
//               bottom: `calc(${footerHeight}px + 7.9rem)`, // フッター上端から7.9rem上に配置
//               right: '2rem'
//           });

//           topBackBtn30_18.css({
//               position: 'absolute',
//               //bottom: 'calc(' + footerHeight + 'px + (18 / 375 * 100vw))',  // フッター上端からSP用の余白分上に配置
//               bottom: `calc(${footerHeight}px + 1.8rem)`, // フッター上端から1.8rem上に配置
//               right: '2rem'
//           });

//           // お問い合わせボタンは常にフッターの上に配置
//       contactBtn.css({
//        position: 'absolute',
//        bottom: footerHeight + 'px',  // フッターの上端にピタリと配置
//        right: '2rem'
//    });
//       }     

//   } else {
//       if (isPC) {
//           // PC画面の場合、通常時は画面右下に固定表示
//           topBackBtn91_79.css({
//               position: 'fixed',
//               //bottom: 'calc(91 / 1080 * 100vw)',  // 固定表示
//               bottom: '9.1rem',  // 固定表示
//               right: '10rem',
//               opacity: 1,
//               //visibility: 'visible'
//           });

//           topBackBtn30_18.css({
//               position: 'fixed',
//               // bottom: 'calc(30 / 1080 * 100vw)',  // 固定表示
//               bottom: '3rem',  // 固定表示
//               right: '10rem',
//               opacity: 1,
//               //visibility: 'visible'
//           });

//                  // お問い合わせボタンは常に画面下端に固定
//              contactBtn.css({
//               position: 'fixed',
//               bottom: '0',  // 固定表示
//               right: '0',
//               opacity: 1,
//               //visibility: 'visible'
//           });

//       } else {
//           // SP画面の場合、通常時は画面右下に固定表示
//           topBackBtn91_79.css({
//               position: 'fixed',
//               //bottom: 'calc(79 / 375 * 100vw)',  // 固定表示
//               bottom: '7.9rem',  // 固定表示
//               right: '2rem',
//               opacity: 1,
//               //visibility: 'visible'
//           });

//           topBackBtn30_18.css({
//               position: 'fixed',
//               // bottom: 'calc(18 / 375 * 100vw)',  // 固定表示
//               bottom: '1.8rem',  // 固定表示
//               right: '2rem',
//               opacity: 1,
//              // visibility: 'visible'
//           });

//                  // お問い合わせボタンは常に画面下端に固定
//              contactBtn.css({
//               position: 'fixed',
//               bottom: '0',  // 固定表示
//               right: '2rem',
//               opacity: 1,
//              // visibility: 'visible'
//           });
//       }      
//   }
  
// });



