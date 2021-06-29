ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [55.100350, 61.357332],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
   ),


    // myPlacemarkWithContent = new ymaps.Placemark([55.100350, 61.357332], {
    //   hintContent: 'Turbo',
    // }, {
    //   // Опции.
    //   // Необходимо указать данный тип макета.
    //   iconContentLayout: MyIconContentLayout
    // });
    myPlacemarkWithContent = new ymaps.Placemark([55.100350, 61.357332], {
        hintContent: 'Автосервис TURBO',
        balloonContent: '',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '/image/marker.svg',
        // Размеры метки.
        iconImageSize: [80, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -70],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
});
