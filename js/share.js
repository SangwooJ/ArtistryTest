const url = 'https://artistrytest.netlify.app/';

function setShare(){
  //var resultImg = document.querySelector('#resultImg');
  var resultAlt = 0;
  const shareTitle = '십이간지 연애유형 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/main.png';
  //const shareURL = url + 'page/result-' + resultAlt + '.html';
  const shareURL = url;

  console.log(Kakao);
  console.log(shareTitle);
  console.log(shareDes);
  console.log(shareImage);
  console.log(shareURL);


  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}