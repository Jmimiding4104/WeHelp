<template>
  <div class="application" style="background-color: #d1e9e9">
    <div class="container py-5">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              個人簡介
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;我叫做劉珉堯，目前有擔任六角學院的助教，對於 HTML 、 CSS 、 JS 與 VUE
              有基礎的了解，也經常協助同學解決開發中的問題，但網頁開發的世界博大精深，需要運用多種工具和實踐找到答案，培養了我理解解決問題的耐心與能力；前端開發的過程發現相較於畫面的處理我更喜歡針對資料做處理，並且意識到工作流程中需要後端的參與，更加深我對於後端的興趣，自己透過六角的
              node.js 入門課程對於後端有近一步的認識，期望能在 WeHelp 將自身後端的能力更成長茁壯。.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              為了成為軟體工程師，做過什麼努力？
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;除了擔任課程助教期間學習到的 HTML 、 CSS 、 JS 與 VUE
              的相關知識，也透過實際需求接觸到各種套件的使用，像是：Bootstrap 、 Swiper 、 Axios 、
              Git 與 JSON Server 等。
              <br />
              &emsp;&emsp;我也有擔任「每日任務」與「JS
              刷題」協助人員，過程中會將知識點切割小塊以利每日吸收，在協助規劃課程時也會碰到許多與預期上不同的問題點，像是在
              JS 刷題時很常會出現動態出現 btn 但無法初始選擇的問題，我會參考 AI
              與各類國內外的論壇找到解決方式並內化成自己的知識；當我碰到要將 option API 改為
              composition API 時，在 router 與 Pinia
              都有碰到改寫上的問題，我便學習到如何閱讀文件並參考論壇找到適切的寫法。
              <br />
              &emsp;&emsp;為了讓自己有更好的程式邏輯，我也有使用 freeCodeCamp 進行相關基礎的 JS
              學習，但在自己實作與課程問答時，逐漸發現撰寫上會有許多未知的知識點，只是按照過去學習到的慣例去實行，像是：不理解物件與陣列的底層差異，在選擇要使用何者時總是隨意選擇、我們會建議同學使用時間複雜度較低的方式撰寫，但當時沒有相關概念不能很好的對同學做解答，所以自己有透過
              YT
              上「杰哥數位教室」之開放課程持續學習相關資料結構與演算法等學理知識，同時也有因應自身想要深入後端的理想，研習資料庫的課程
              ，望能盡力補足自身基礎學理的不足處能讓自身先備知識更能應用於開發中。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              如果參與這個訓練，會怎麼安排學習時間？
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;我目前周一、周五至周日可做全日的開發學習，其餘平日會以下午與晚上為主，因目前的工作皆為兼職，所以時間上是可以配合
              WeHelp
              的線上會議與第二階段後的周五實體活動，若學習上有需要目前的存款也可支應半年的支出能切換成全職學習的狀態。
              <br />
              &emsp;&emsp;我會於周日或當有新進度時規劃每日的 todo-list
              ，除了能確保進度能在線，也能提高自身的效率與學習品質。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              是否有想要加入的公司？為什麼想加入該公司？
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div class="accordion-body fs-3">
              我有幾個期望的公司
              <br />
              &emsp;&emsp;第一個是狄卡科技股份有限公司，這個平台已經成為生活的一部份，若能為這個平台效力、改善該平台的效能進而提升使用者體驗，會讓我十分有成就感並熱愛這份工作、成為生活的意義是我的理想；該公司後端會使用
              Node.js 與 Golang
              等語言，是我有接觸與想要嘗試的語言，時常會在該公司旗下的影音平台間接觀察到工作環境，屬於較為活潑的工作環境也是我所嚮往的，綜合以上該公司是我想要奮鬥爭取的公司。
              <br />
              &emsp;&emsp;第二個是麗台科技股份有限公司，在目前執行的政府計畫中，我們有一項遠距測量的配合廠商便是該公司，該公司主要的項目也有相關智慧醫療的業務項目，作為使用者一方面我對於開發的過程充滿好奇，另一方面若能參與開發團隊為第一線使用者能有更好的使用者體驗，我能夠滿足馬斯洛需求中最高層級的「自我實現」的達成。
              <br />
              &emsp;&emsp;在未來三年內我也希望在程式專業能力提升的同時能將英文學好，能將聽說讀寫的能力提升到可靈活運用的程度，能夠考慮國外的大型企業，將自身的能力能實踐在大眾的生活中。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFive">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              請描述一件產生明顯負面情緒的經歷，如何處理該情緒？
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;近期出現負面情緒的場合是在某場工作時，當時我的業務是要幫長者抽血，但許多長者表示我看起來沒什麼經驗，質疑我不會抽血便選擇另外一個學姊，當碰到這種質疑時我的情緒是很失落的，確實我的技術綜合起來一定是不比學姊來的高超，但我自己過去抽血經驗少說也有千人以上，被這種理由質疑自己的能力讓我覺得很沮喪。
              <br />
              &emsp;&emsp;但我也知道我沒有能力改變他人，所以我只需要「BE MY
              BEST」就可以了，在大學時我的精神科的指導教授有對我講過一番話，我太容易活在別人的眼裡，別人贊同我的成功也只能表示在他人的眼中我是成功的，但重要的是對於我而言，這點一直是屬於「未知我」的部分，我很不能了解我真的是這樣嗎？但隨著時間的推進，碰到更多會讓我情緒起伏的事情，我也慢慢認知到我這部分的人格特質，並想著要如何改善自己。
              <br />
              &emsp;&emsp;在過去我一定會對於這些讓我感到憤怒、失落等負面情緒的事件耿耿於懷，但逐漸認知到這些情緒是不必要的，對於這些情緒的產生並無助於事件或者是自身，所以我選擇用平靜的心情去面對與試著遺忘負面情緒，多少還是會有讓人感受到不悅的狀態，但當我不與其隨之起舞專注於當下我能做的事情，高漲的情緒是能很大幅度的消退，所以專注於當下可變因子並嘗試平穩自身情緒是我的解法。
              <br />
              &emsp;&emsp;此外因為上述情況是當面的情況，有時候在與 Code
              爭鬥時，也很容易出現煩躁的情況，像是這種狀況，我除了「專注」與「平穩」外，我也會離開當下這個環境幫助自己找回自我，除了能更有效的平穩情緒外後續的效率也能更好。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingSix">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              關於這份申請網頁，分享一個開發時的技術心得。
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSix"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;在進行這份開發時，碰到很多值得分享的心得，畢竟「理想是豐滿的，現實是骨感的」，實際開發時常常會有一些小陷阱很容易碰到，但其中最讓我印象深刻的應該是
              Render 的部屬。
              <br />
              &emsp;&emsp;過去相關網路部屬服務是有實際操作過，但只有部屬過幾次 Heroku
              也在一年多前，所以部屬上花了許多時間去嘗試與找相關的資源去操作部屬，最後是找到英語系的影片成功將
              JSON Server 建立的資料庫上傳至 Render 並成功串接 API 。
              <br />
              &emsp;&emsp;這次的開發很有趣，從一開始不太擅長的版面與色彩規劃，同時配合版型將能展現的各套件呈現出來，同時也在開發的過程中也知道自己技術上不足之處與盲點，相信在未來的開發上這次的經驗也是很寶貴的墊腳石。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven"
            >
              請用簡短兩三句話，描述對你而言，最重要的一項人際交往原則。
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSeven"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSeven"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;真誠是我的原則，我不喜歡對於他人充滿謊言，所以也希望他人真誠地想要進一步深化彼此的關係，在保持真誠坦率的情況下共同促進穩定的人際關係。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingEight">
            <button
              class="accordion-button collapsed fs-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseEight"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseEight"
            >
              其他想要對我們說的事情？
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseEight"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEight"
          >
            <div class="accordion-body fs-3">
              &emsp;&emsp;先謝謝看到現在的您，感謝您花時間的查閱，希望這次能成功參加 WeHelp
              這個計畫，在過去不論是當助教或著開發時，因應個專案的不同都會有許多面向的問題與解決方式，所以我希望能有一個環境能讓我自己去發展，但當我面對難解的問題時，老師、助教或同學能一同討論解決的方向，雖然無法一段
              code
              複製貼上就能完美解決問題，但是能夠一起剝絲抽繭理處頭緒，這種環境是我渴望的，希望能有幸與各位一同學習。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
