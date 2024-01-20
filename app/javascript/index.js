function initialize() {
  const location_data = JSON.parse(
    document.getElementById("location_data").dataset.variable
  );
  // 33.560655361380114, 133.53351920699242
  // const latitude = 33.560655361380114;
  // const longitud = 133.53351920699242;
  const location = { lat: location_data.latitude, lng: location_data.longitud };
  // const location = { lat: latitude, lng: longitud };
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama"),
    {
      position: location,
      pov: {
        heading: 34,
        pitch: 5,
      },
      addressControl: false, //住所情報の非表示
    }
  );
}

// name: "東京タワー",
//   longitud: 139.7454,
//   latitude: 35.6586,
//   created_at: Thu, 18 Jan 2024 14:24:03.778286000 UTC +00:00,
//   updated_at: Thu, 18 Jan 2024 14:24:03.778286000 UTC +00:00>,
//  #<Location:0x0000000114d72bd8
//   id: 2,
//   name: "雷門",
//   longitud: 139.7963564299187,
//   latitude: 35.711039545421265,
//   created_at: Thu, 18 Jan 2024 14:43:00.460737000 UTC +00:00,
//   updated_at: Thu, 18 Jan 2024 14:43:00.460737000 UTC +00:00>,
//  #<Location:0x0000000114d72a98
//   id: 3,
//   name: "大阪城",
//   longitud: 135.52545448202227,
//   latitude: 34.686774364486574,
//   created_at: Thu, 18 Jan 2024 14:52:18.626206000 UTC +00:00,
//   updated_at: Thu, 18 Jan 2024 14:52:18.626206000 UTC +00:00>,
//  #<Location:0x0000000114d72958
//   id: 5,
//   name: "通天閣",
//   longitud: 34.65256470233662,
//   latitude: 135.5063898641635,
//   created_at: Thu, 18 Jan 2024 14:58:52.661708000 UTC +00:00,
//   updated_at: Thu, 18 Jan 2024 14:58:52.661708000 UTC +00:00>,
//  #<Location:0x0000000114d72818
//   id: 6,
//   name: "さっぽろテレビ塔",
//   longitud: 141.35580044121915,
//   latitude: 43.06102989259225,
//   created_at: Thu, 18 Jan 2024 15:08:52.663874000 UTC +00:00,
//   updated_at: Thu, 18 Jan 2024 15:08:52.663874000 UTC +00:00>,
//  #<Location:0x0000000114d726d8
//   id: 7,
//   name: "首里城",
//   longitud: 26.217034999089524,
//   latitude: 127.71901212863506,
//   created_at: Thu, 18 Jan 2024 15:20:49.558873000 UTC +00:00,
//   updated_at: Thu, 18 Jan 2024 15:20:49.558873000 UTC +00:00>,
//  #<Location:0x0000000114d72598
//   id: 8,
//   name: "ユニバーサル・スタジオ・ジャパン",
//   longitud: 135.4352541935071,
//   latitude: 34.66776861403716,
