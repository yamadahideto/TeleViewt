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

// id: 10,
//   name: "東京タワー",
//   longitud: 139.7454,
//   latitude: 35.6586,
//   created_at: Fri, 19 Jan 2024 16:14:25.880308000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:14:25.880308000 UTC +00:00>,
//  #<Location:0x000000010f7471c8
//   id: 11,
//   name: "雷門",
//   longitud: 139.7963564299187,
//   latitude: 35.711039545421265,
//   created_at: Fri, 19 Jan 2024 16:16:24.739969000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:16:24.739969000 UTC +00:00>,
//  #<Location:0x000000010f747088
//   id: 12,
//   name: "大阪城",
//   longitud: 135.52545448202227,
//   latitude: 34.686774364486574,
//   created_at: Fri, 19 Jan 2024 16:17:02.059491000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:17:02.059491000 UTC +00:00>,
//  #<Location:0x000000010f746f48
//   id: 14,
//   name: "さっぽろテレビ塔",
//   longitud: 141.35580044121915,
//   latitude: 43.06102989259225,
//   created_at: Fri, 19 Jan 2024 16:18:27.558474000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:18:27.558474000 UTC +00:00>,
//  #<Location:0x000000010f746e08
//   id: 15,
//   name: "ユニバーサル・スタジオ・ジャパン",
//   longitud: 135.4352541935071,
//   latitude: 34.66776861403716,
//   created_at: Fri, 19 Jan 2024 16:19:19.565932000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:19:19.565932000 UTC +00:00>,
//  #<Location:0x000000010f746cc8
//   id: 22,
//   name: "アドベンチャーワールド",
//   longitud: 135.37621235625448,
//   latitude: 33.668009519282556,
//   created_at: Fri, 19 Jan 2024 17:06:05.661615000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 17:06:05.661615000 UTC +00:00>,
//  #<Location:0x000000010f746b88
//   id: 23,
//   name: "東京ドイツ村",
//   longitud: 140.05390912303443,
//   latitude: 35.40563294591095,
//   created_at: Fri, 19 Jan 2024 17:09:56.141995000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 17:09:56.141995000 UTC +00:00>,
//  #<Location:0x000000010f746a48
//   id: 24,
//   name: "東京ディズニーランド",
//   longitud: 139.87900810081433,
//   latitude: 35.63504403142782,
//   created_at: Fri, 19 Jan 2024 17:13:42.870526000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 17:13:42.870526000 UTC +00:00>,
//  #<Location:0x000000010f746908
//   id: 25,
//   name: "金閣寺",
//   longitud: 135.72882074233144,
//   latitude: 35.03937705535973,
//   created_at: Fri, 19 Jan 2024 17:17:26.478910000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 17:17:26.478910000 UTC +00:00>,
//  #<Location:0x000000010f7467c8
//   id: 26,
//   name: "横浜中華街",
//   longitud: 139.64759552750934,
//   latitude: 35.44249541979676,
//   created_at: Fri, 19 Jan 2024 17:28:11.227047000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 17:28:11.227047000 UTC +00:00>,
//  "..."]
// (END)
//   latitude: 35.711039545421265,
//   created_at: Fri, 19 Jan 2024 16:16:24.739969000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:16:24.739969000 UTC +00:00>,
//  #<Location:0x000000010f747088
//   id: 12,
//   name: "大阪城",
//   longitud: 135.52545448202227,
//   latitude: 34.686774364486574,
//   created_at: Fri, 19 Jan 2024 16:17:02.059491000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:17:02.059491000 UTC +00:00>,
//  #<Location:0x000000010f746f48
//   id: 14,
//   name: "さっぽろテレビ塔",
//   longitud: 141.35580044121915,
//   latitude: 43.06102989259225,
//   created_at: Fri, 19 Jan 2024 16:18:27.558474000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:18:27.558474000 UTC +00:00>,
//  #<Location:0x000000010f746e08

//   id: 15,
//   name: "ユニバーサル・スタジオ・ジャパン",
//   longitud: 135.4352541935071,
//   latitude: 34.66776861403716,
//   created_at: Fri, 19 Jan 2024 16:19:19.565932000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 16:19:19.565932000 UTC +00:00>,
//  #<Location:0x000000010f746cc8
//   id: 22,
//   name: "アドベンチャーワールド",
//   longitud: 135.37621235625448,
//   latitude: 33.668009519282556,
//   created_at: Fri, 19 Jan 2024 17:06:05.661615000 UTC +00:00,
//   updated_at: Fri, 19 Jan 2024 17:06:05.661615000 UTC +00:00>,
//  #<Location:0x000000010f746b88
//   id: 23,
//   name: "東京ドイツ村",
//   longitud: 140.05390912303443,
//   latitude: 35.40563294591095,

// LoadError: libpq.so.5: cannot open shared object file: No such file or directory - /usr/local/bundle/ruby/3.2.0/gems/pg-1.5.4/lib/pg_ext.so (LoadError)
// LoadError: libpq.so.5: cannot open shared object file: No such file or directory - /usr/local/bundle/ruby/3.2.0/gems/pg-1.5.4/lib/pg_ext.so (LoadError
