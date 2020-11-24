var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZGlnaXRhbGFuYWxvZ2JveSIsImEiOiJja2h3NmswYzIxdG41MnFwYjBjNzFla2FvIn0.Pct-Yd9QbqQFTYP0Yo_mXg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Lapor Bansos',
    subtitle: 'Laporan terkait Bantuan Sosial yang masuk ke Chatbot LaporCovid-19',
    byline: 'Tim Bansos LaporCovid-19',
    footer: 'Source: https://laporcovid19.org',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Laporan 06/08/2020 16:51:34',
            image: './path/to/images/source.png',
            description: 'Kami warga kelurahan Meruya Utara taman Aries tidak mendapat jatah bansos tahap 5 yang di jadwalkan tgl 4-5agustus. Sampai hari ini kami tidak dapat kejelasan dr RT maupun RW, sedangkan di daerah rumah anak saya di kelurahan Sukabumi Utara,kec. Kebon jeruk  tidak pernah mendapat jatah bansos sekalipun dari tahap pertama sampai saat ini, dengan dalih dr RT setempat bahwa tidak terdaftar, sedangkan yg mendapat bantuan adalah keluarga RT yg punya mobil dan kontrakan banyak, mohon di tindak oknum seperti ini..',
            location: {
                center: [-6,195285212, 106,75064785016],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
