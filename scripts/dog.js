(function () {
  window.Dog = (function() {
    function Dog(param) {
      if (!param) return;
      this.id = param.id;
      this.name = param.name;
      this.group = param.group;
      this.countries = param.countries;
      this.colors = param.colors;
      this.characteristics = param.characteristics;
      this.initialWorks = param.initialWorks;
    }

    Dog.data = [
      {
        id: 1,
        name: 'シェットランド・シープドッグ',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'セーブル',
          'ブルーマール',
          'トライカラー',
          'ブラック&ホワイト',
          'ブラック&タン'
        ],
        characteristics: [
          '愛称:シェルティー',
          '豊かな被毛',
          'ストップがはっきりしている',
          'ケネル犬 ソフィー'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 2,
        name: 'コリー',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'セーブル&ホワイト',
          'トライカラー',
          'ブルーマール'
        ],
        characteristics: [
          '短毛:スムース・コリー',
          '長毛:ラフ・コリー',
          'ホワイト・マーキングを持つ',
          '警察犬',
          'ケネル犬 鈴(リン)'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 3,
        name: 'ビアデッド・コリー',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック',
          'ブルー',
          'ブラウン',
          'グレー',
          'フォーン',
          'サンディ'
        ],
        characteristics: [
          'ストレートの長毛'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 4,
        name: 'オールド・イングリッシュ・シープドッグ',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブルー',
          'グレー',
          'グリズル'
        ],
        characteristics: [
          '愛称：ボブ・テイル',
          '断尾',
          '狼爪がある'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 5,
        name: 'ジャーマン・シェパード・ドッグ',
        group: '1G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック',
          'グレー',
          '黒地にレディッシュ・ブラウン',
          '黒地にブラウン',
          '黒地にイエロー',
          '黒地に明るいグレー'
        ],
        characteristics: [
          '警察犬'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 6,
        name: 'ベルジアン・シェパード・ドッグ「タービュレン」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'フォーンにブラック・オーバレイ'
        ],
        characteristics: [
          '長毛',
          'ブラックマスク'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 7,
        name: 'ベルジアン・シェパード・ドッグ「グローネンダール」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'ブラック'
        ],
        characteristics: [
          '長毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 8,
        name: 'ベルジアン・シェパード・ドッグ「マリノア」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'フォーンにブラックオーバレイ'
        ],
        characteristics: [
          '長毛',
          'カール状の被毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 9,
        name: 'ベルジアン・シェパード・ドッグ「ラケノア」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'フォーンにブラックオーバレイ'
        ],
        characteristics: [
          '長毛',
          'カール状の被毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 10,
        name: 'ボーダー・コリー',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '短毛：スムース'
        ],
        initialWorks: [
          '羊と牛のハーディング'
        ]
      },
      {
        id: 11,
        name: 'オーストラリアン・シェパード',
        group: '1G',
        countries: [
          'アメリカ'
        ],
        colors: [
          'ブルーマール',
          'レッドマール',
          'ブラックトライ',
          'レッドトライ'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 12,
        name: 'ホワイト・スイス・シェパード・ドッグ',
        group: '1G',
        countries: [
          'スイス'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '番犬',
          '作業犬'
        ]
      },
      {
        id: 13,
        name: 'オーストラリアン・キャトル・ドッグ',
        group: '1G',
        countries: [
          'オーストラリア'
        ],
        colors: [
          'ブルー',
          'レッド'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '牛のハーディング'
        ]
      },
      {
        id: 14,
        name: 'プーリー',
        group: '1G',
        countries: [
          'ハンガリー'
        ],
        colors: [
          'ブラック',
          'フォーン',
          'パールホワイト'
        ],
        characteristics: [
          '縄状の被毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 15,
        name: 'コモンドール',
        group: '1G',
        countries: [
          'ハンガリー'
        ],
        colors: [
          'アイボリー'
        ],
        characteristics: [
          '縄状の被毛'
        ],
        initialWorks: [
          '羊のガーディング'
        ]
      },
      {
        id: 16,
        name: 'スキッパーキ',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'ブラック'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '小型害獣の狩猟'
        ]
      },
      {
        id: 17,
        name: 'ブービエ・デ・フランダース',
        group: '1G',
        countries: [
          'フランス',
          'ベルギー'
        ],
        colors: [
          'ブラック',
          'ブリンドル',
          'グレー'
        ],
        characteristics: [
          '断尾',
          '断耳',
          'あごひげ',
          '口ひげ'
        ],
        initialWorks: [
          '牛のハーディング',
          '運搬犬'
        ]
      },
      {
        id: 18,
        name: 'ポーリッシュ・　ローランド・シープドッグ',
        group: '1G',
        countries: [
          'ポーランド'
        ],
        colors: [
          'なし'
        ],
        characteristics: [
          '愛称：ポン',
          '別名：ポルスキー・オフチャレック・ニンジンネ'
        ],
        initialWorks: [
          'ハンティング'
        ]
      },
      {
        id: 19,
        name: 'ウェルッシュ・コーギー・ペンブローク',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'セーブル',
          'フォーン',
          'ブラック&タン'
        ],
        characteristics: [
          '尾生まれつきないか、あっても断尾'
        ],
        initialWorks: [
          '牧畜追い犬'
        ]
      },
      {
        id: 20,
        name: 'ウェルッシュ・コーギー・カーディガン',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブリンドル',
          'ブルーマール',
          'セーブル&ブラック',
          'ブラック&タン'
        ],
        characteristics: [
          'ふさふさとした長い尾',
          'ケネル犬：小町'
        ],
        initialWorks: [
          '牧畜追い犬'
        ]
      },
      {
        id: 21,
        name: 'マレンマ・シープドッグ',
        group: '1G',
        countries: [
          'イタリア'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '牧畜のガーディング'
        ]
      },
      {
        id: 22,
        name: 'ドーベルマン',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック＆タン',
          'ブラウン＆タン'
        ],
        characteristics: [
          '断耳',
          '断尾',
          '警察犬'
        ],
        initialWorks: [
          '番犬'
        ]
      },
      {
        id: 23,
        name: 'ロットワイラー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック＆タン'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '牧牛犬',
          '護衛犬'
        ]
      },
      {
        id: 24,
        name: 'ボクサー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'フォーン',
          'ブリンドル'
        ],
        characteristics: [
          '断尾',
          '断耳',
          'ブラックマスク',
          'アンダージョット',
          '警察犬'
        ],
        initialWorks: [
          'ブル・バイティング',
          '護衛犬'
        ]
      },
      {
        id: 25,
        name: 'グレート・デーン',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'フォーン',
          'ブリンドル',
          'ハールクイン',
          'ブルー',
          'ブラック'
        ],
        characteristics: [
          '断耳',
          '別名：ジャーマン・マスティフ'
        ],
        initialWorks: [
          '軍用',
          '大型獣のハンティング'
        ]
      },
      {
        id: 26,
        name: 'マスティフ',
        group: '2G',
        countries: [
          'イギリス'
        ],
        colors: [
          'フォーン',
          'ブリンドル'
        ],
        characteristics: [
          '別名：オールド・イングリッシュ・マスティフ'
        ],
        initialWorks: [
          '護衛犬',
          'ベア・ファイティング'
        ]
      },
      {
        id: 27,
        name: 'ブル・マスティフ',
        group: '2G',
        countries: [
          'イギリス'
        ],
        colors: [
          'フォーン',
          'ブリンドル',
          'レッド'
        ],
        characteristics: [
          'ブラックマスク'
        ],
        initialWorks: [
          '護衛犬'
        ]
      },
      {
        id: 28,
        name: 'チベタン・マスティフ',
        group: '2G',
        countries: [
          'チベット地方'
        ],
        colors: [
          'ブラック',
          'ブラウン',
          'ゴールド'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '牧畜のガーディング'
        ]
      },
      {
        id: 29,
        name: 'ピレニアン・マスティフ',
        group: '2G',
        countries: [
          'スペイン'
        ],
        colors: [
          'ピュアホワイト・スノーホワイト地にグレ・ゴールデンイエロー・ブラウンの班'
        ],
        characteristics: [
          '明瞭なマスク'
        ],
        initialWorks: [
          '害獣の防衛犬'
        ]
      },
      {
        id: 30,
        name: 'ピレニアン・マウンテン・ドッグ',
        group: '2G',
        countries: [
          'フランス'
        ],
        colors: [
          'ホワイト',
          'グレー',
          '薄いイエロー',
          'ウルフカラー'
        ],
        characteristics: [
          '狼爪を残す',
          '別名：グレート・ピレニーズ',
          'ケネル犬：藍',
          '血統書名：シービー・レディ・ラン・オブ・スペース・タムラ・JP'
        ],
        initialWorks: [
          '牧畜のガーディング'
        ]
      },
      {
        id: 31,
        name: 'ニューファンドランド',
        group: '2G',
        countries: [
          'カナダ'
        ],
        colors: [
          'ブラック',
          'ブラウン',
          'ランドシャー'
        ],
        characteristics: [
          '足に水かきがある'
        ],
        initialWorks: [
          '漁師の補助'
        ]
      },
      {
        id: 32,
        name: 'バーニーズ・マウンテン・ドッグ',
        group: '2G',
        countries: [
          'スイス'
        ],
        colors: [
          '黒地にタンとホワイトの班'
        ],
        characteristics: [
          'ケネル犬：柚子'
        ],
        initialWorks: [
          '牽引',
          '護衛犬'
        ]
      },
      {
        id: 33,
        name: 'セント・バーナード',
        group: '2G',
        countries: [
          'スイス'
        ],
        colors: [
          '白地にブラウンの班'
        ],
        characteristics: [
          '短毛：ショートヘアード',
          '長毛：ロングヘアード'
        ],
        initialWorks: [
          '救助犬',
          'コンパニオン'
        ]
      },
      {
        id: 34,
        name: 'ジャイアント・シュナウザー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック',
          'ソルト＆ペッパー'
        ],
        characteristics: [
          '断耳'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 35,
        name: 'ドゴ・アルヘンティーノ',
        group: '2G',
        countries: [
          'アルゼンチン'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          '断耳',
          '通称：鉄砲いらずの銃猟犬'
        ],
        initialWorks: [
          '狩猟犬',
          '闘犬',
          '護衛犬'
        ]
      },
      {
        id: 36,
        name: 'レオンベルガー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ライオンイエロー',
          'レッド',
          'レディッシュ・ブラウン',
          'サンディ'
        ],
        characteristics: [
          'ブラックマスク'
        ],
        initialWorks: [
          '牧畜犬',
          '牽引'
        ]
      },
      {
        id: 37,
        name: 'ブルドッグ',
        group: '2G',
        countries: [
          'イギリス'
        ],
        colors: [
          '単色',
          'パイド'
        ],
        characteristics: [
          'アンダーショット',
          'ローズイヤー',
          'スクリュー尾',
          'O脚である',
          'イギリスの国犬',
          'スマット'
        ],
        initialWorks: [
          '闘犬'
        ]
      },
      {
        id: 38,
        name: 'ミニチュア・ピンシャー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック＆タン',
          'チョコレート＆タン',
          'レッド',
          'ブラウン'
        ],
        characteristics: [
          '断耳',
          '断尾'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 39,
        name: 'ミニチュア・シュナウザー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ソルト＆ペッパー',
          'ホワイト',
          'ブラック＆シルバー',
          'ブラック'
        ],
        characteristics: [
          '断耳',
          '断尾',
          '長い眉毛とヒゲ'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 40,
        name: '土佐闘犬',
        group: '2G',
        countries: [
          '日本'
        ],
        colors: [
          '赤',
          '黒',
          'ブリンドル',
          'フォーン',
          'アプリコット'
        ],
        characteristics: [
          'マスティフと似ている',
          '別名：ジャパニーズ・マスティフ',
          '多くの国では飼育禁止'
        ],
        initialWorks: [
          '闘犬'
        ]
      },
      {
        id: 41,
        name: 'チャイニーズ・シャーペイ',
        group: '2G',
        countries: [
          '中国'
        ],
        colors: [
          'ホワイト以外のすべての単色'
        ],
        characteristics: [
          '額、頬、尾の付け根のシワ',
          '独特な形尾のマズル'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 42,
        name: 'ウェスト・ハイランド・ホワイト・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          '愛称：ウェスティ',
          '先祖：ケアーン・テリア'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 43,
        name: 'ケアーン・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'クリーム',
          'ウィートン',
          'グレー',
          'ほぼブラック'
        ],
        characteristics: [
          'テリア種最古の犬'
        ],
        initialWorks: [
          'ネズミ捕り',
          'キツネ猟'
        ]
      },
      {
        id: 44,
        name: 'ノーリッチ・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'ウィートン',
          'ブラック＆タン',
          'グリズル'
        ],
        characteristics: [
          '断耳',
          '立ち耳'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 45,
        name: 'ノーフォーク・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'ウィートン',
          'ブラック＆タン',
          'グリズル'
        ],
        characteristics: [
          '断耳',
          '垂れ耳'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 46,
        name: 'エアーデール・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック＆タン',
          'グリズル＆タン'
        ],
        characteristics: [
          '別名：キング・オブ・テリア',
          '警察犬',
          '断尾'
        ],
        initialWorks: [
          'アナグマ・カワウソ猟'
        ]
      }
    ];

    Dog.query = function() {
      return Dog.data
        .map(function(d) {return new Dog(d)})
        .sort(function(d) {return d.id - d.id});
    };

    Dog.shuffle = function(limit) {
      return _.sampleSize(Dog.query(), limit || Dog.data.length);
    };

    Object.defineProperty(Dog.prototype, 'imageURL', {
      get: function() {
        return '/resources/' + this.id + '.jpg';
      },
      enumerable: true
    });

    return Dog;
  })();
})();
