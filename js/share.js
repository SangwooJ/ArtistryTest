const url = 'https://artistrytest.netlify.app/';

function setShare(){
  //var resultImg = document.querySelector('#resultImg');
  var resultAlt = 0;
  const shareTitle = '예술성테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/main.png';
  //const shareURL = url + 'page/result-' + resultAlt + '.html';
  const shareURL = url + 'page/result';

  const params = {
    parameter1: Math.round((scores[0]/20)*100),
    parameter2: Math.round((scores[1]/24)*100),
    parameter3: Math.round((scores[2]/20)*100),
    //parameter4: Math.round((parameter1+parameter2+parameter3)/3),
  };
  
  // URL 생성 함수
  function buildURL(baseURL, params) {
    const url = new URL(baseURL);
    
    // 매개변수와 값을 URL에 추가
    for (const key in params) {
      url.searchParams.append(key, params[key]);
    }
    
    return url.toString();
  }
  
  // baseURL은 목적지 페이지의 URL입니다.
  const baseURL = url + 'page/result';
  
  // URL 생성
  const finalURL = buildURL(baseURL, params);
  //console.log(finalURL);
  //console.log(Kakao);
  //console.log(shareTitle);
  //console.log(shareDes);
  //console.log(shareImage);
  //console.log(shareURL);


  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: finalURL,
        webUrl: finalURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: finalURL,
          webUrl: finalURL,
        },
      },
    ]
  });
}